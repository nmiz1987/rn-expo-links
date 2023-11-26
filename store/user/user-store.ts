import { makeAutoObservable } from "mobx";

class UserStore {
  private _email: string = "";
  private _password: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  setEmail(email: string) {
    if (!email) return;
    this._email = email;
  }

  setPassword(password: string) {
    if (!password) return;
    this._password = password;
  }
}
export default new UserStore();
