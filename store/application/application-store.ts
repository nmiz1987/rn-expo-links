import { makeAutoObservable } from 'mobx';

class UserStore {
  private _email: string = '';
  private _isRememberMe: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isRememberMe() {
    return this._isRememberMe;
  }

  setRememberMe(isRememberMe: boolean) {
    if (isRememberMe === undefined) return;
    this._isRememberMe = isRememberMe;
  }

  get email() {
    return this._email;
  }

  setEmail(email: string) {
    if (!email) return;
    this._email = email;
  }
}
export default new UserStore();
