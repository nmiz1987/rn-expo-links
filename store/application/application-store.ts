import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '../../services/storage';
import { singInWithToken } from '@/api/links/links.api';

class UserStore {
  private _email: string = '';
  private _token: string = '';
  private _isRememberMe: boolean = false;
  private _isFinishLoadToken: boolean = false;
  private _ACCESS_TOKEN_KEY = 'LINKS_ACCESS_TOKEN';

  constructor() {
    makeAutoObservable(this);
  }

  get token() {
    return this._token;
  }

  get isLoggedIn() {
    // console.log('isLoggedIn() ', this._token, `|${this._token}|`, this._token.length);
    return this._token !== '';
  }

  get isRememberMe() {
    return this._isRememberMe;
  }

  get email() {
    return this._email;
  }

  get isFinishLoadToken() {
    return this._isFinishLoadToken;
  }

  async loadTokenHandler() {
    const token = await getStringAsync(this._ACCESS_TOKEN_KEY);
    if (token) {
      console.log('token existing in local storage');

      this.setTokenHandler(token);
    }
    runInAction(() => {
      this._isFinishLoadToken = true;
    });
  }

  async setTokenHandler(newToken: string) {
    if (!newToken) return;
    await setStringAsync(this._ACCESS_TOKEN_KEY, newToken);
    this._token = newToken;
  }

  async deleteTokenHandler() {
    await deleteStringAsync(this._ACCESS_TOKEN_KEY);
    this._token = '';
  }

  setRememberMe(isRememberMe: boolean) {
    if (isRememberMe === undefined) return;
    this._isRememberMe = isRememberMe;
  }

  setEmail(email: string) {
    if (!email) return;
    this._email = email;
  }
}
export default new UserStore();
