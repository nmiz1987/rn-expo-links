import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '../../services/storage';
import { singInWithToken as singInWithTokenAPI, refreshToken as refreshTokenAPI } from '@/api/links/links.api';

class UserStore {
  private _email: string = '';
  private _accessToken: string = '';
  private _refreshToken: string = '';
  private _isRememberMe: boolean = false;
  private _isFinishLoadTokens: boolean = false;
  private _ACCESS_TOKEN_KEY = 'LINKS_ACCESS_TOKEN';
  private _ACCESS_REFRESH_TOKEN_KEY = 'LINKS_REFRESH_ACCESS_TOKEN';

  constructor() {
    makeAutoObservable(this);
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get isLoggedIn() {
    // console.log('isLoggedIn() ', this._token, `|${this._token}|`, this._token.length);
    return this._accessToken !== '' && this._refreshToken !== '';
  }

  get isRememberMe() {
    return this._isRememberMe;
  }

  get email() {
    return this._email;
  }

  get isFinishLoadTokens() {
    return this._isFinishLoadTokens;
  }

  async loadTokensFromStorageHandler() {
    const accessToken = await getStringAsync(this._ACCESS_TOKEN_KEY);
    const refreshToken = await getStringAsync(this._ACCESS_REFRESH_TOKEN_KEY);

    if (accessToken && refreshToken) {
      this._accessToken = accessToken;
      this._refreshToken = refreshToken;

      const res = await singInWithTokenAPI(accessToken);
      if ('accessToken' in res) {
        this._accessToken = res.accessToken;
        this._refreshToken = refreshToken;
        this.storeTokensInStorageHandler(res.accessToken, refreshToken);
      } else if (res.status === 401) {
        //Token expired
        const refreshRes = await refreshTokenAPI(refreshToken);
        if ('accessToken' in refreshRes) {
          this._accessToken = refreshRes.accessToken;
          this._refreshToken = refreshToken;
          this.storeTokensInStorageHandler(refreshRes.accessToken, refreshToken);
        }
      } else if (res.status === 403) {
        //Access denied)
        this._accessToken = '';
        this._refreshToken = '';
        this.deleteTokenHandler();
      }
    }
    runInAction(() => {
      this._isFinishLoadTokens = true;
    });
  }

  async storeTokensInStorageHandler(accessToken: string, refreshToken: string) {
    if (!accessToken || !refreshToken) return;
    await setStringAsync(this._ACCESS_TOKEN_KEY, accessToken);
    await setStringAsync(this._ACCESS_REFRESH_TOKEN_KEY, refreshToken);
  }

  async setAccessTokensHandler(accessToken: string) {
    if (!accessToken) return;
    this._accessToken = accessToken;
  }

  async deleteTokenHandler() {
    await deleteStringAsync(this._ACCESS_TOKEN_KEY);
    await deleteStringAsync(this._ACCESS_REFRESH_TOKEN_KEY);
    runInAction(() => {
      this._accessToken = '';
      this._refreshToken = '';
    });
  }

  setRememberMe(isRememberMe: boolean) {
    if (isRememberMe === undefined) return;
    runInAction(() => {
      this._isRememberMe = isRememberMe;
    });
  }

  setEmail(email: string) {
    if (!email) return;
    this._email = email;
  }
}
export default new UserStore();
