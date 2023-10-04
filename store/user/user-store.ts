import { makeAutoObservable } from 'mobx';


class UserStore {
  private _name: string = "";

  get name() {
    return this._name;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setName(name: string) {
    if (!name) return;
    this._name = name;
  }

}
export default new UserStore();
