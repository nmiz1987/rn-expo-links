import { makeAutoObservable } from 'mobx';

class UserStore {
  private _email: string = '';

  constructor() {
    makeAutoObservable(this);
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
