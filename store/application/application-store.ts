import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '../../services/storage';

class UserStore {
  private _email: string = '';
  private _token: string = '';
  private _isRememberMe: boolean = false;
  private _isTokenLoaded: boolean = false;
  private _ACCESS_TOKEN_KEY = 'LINKS_ACCESS_TOKEN';

  constructor() {
    makeAutoObservable(this);
  }

  get token() {
    return this._token;
  }

  get isLoggedIn() {
    return this._token !== '';
  }

  get isRememberMe() {
    return this._isRememberMe;
  }

  get email() {
    return this._email;
  }

  get isTokenLoaded() {
    return this._isTokenLoaded;
  }

  async loadTokenHandler() {
    const token = await getStringAsync(this._ACCESS_TOKEN_KEY);
    if (token) {
      this.setTokenHandler(token);
    }
    runInAction(() => {
      this._isTokenLoaded = true;
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
