import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '../../services/storage';
import { EnumUserRoles } from './application-store.interfaces';
import { refreshToken as refreshTokenAPI, singInWithToken as singInWithTokenAPI } from '@/api/links/links.api';

class UserStore {
  #email: string = '';
  #userRole: EnumUserRoles = EnumUserRoles.Guest;
  #accessToken: string = '';
  #refreshToken: string = '';
  #isRememberMe: boolean = false;
  #isFinishLoadTokens: boolean = false;
  #ACCESS_TOKEN_KEY = 'LINKS_ACCESS_TOKEN';
  #ACCESS_REFRESH_TOKEN_KEY = 'LINKS_REFRESH_ACCESS_TOKEN';

  constructor() {
    makeAutoObservable(this);
  }

  get accessToken() {
    return this.#accessToken;
  }

  get userRole() {
    return this.#userRole;
  }

  setUserRole(role: EnumUserRoles) {
    if (!role) return;
    this.#userRole = role;
  }

  get refreshToken() {
    return this.#refreshToken;
  }

  get isLoggedIn() {
    return this.#accessToken.length > 0 && this.#email.length > 0;
  }

  get isRememberMe() {
    return this.#isRememberMe;
  }

  get email() {
    return this.#email;
  }

  get isFinishLoadTokens() {
    return this.#isFinishLoadTokens;
  }

  async loadTokensFromStorageHandler() {
    const accessToken = await getStringAsync(this.#ACCESS_TOKEN_KEY);
    const refreshToken = await getStringAsync(this.#ACCESS_REFRESH_TOKEN_KEY);
    try {
      if (accessToken && refreshToken) {
        this.#accessToken = accessToken;
        this.#refreshToken = refreshToken;

        const res = await singInWithTokenAPI(accessToken);
        if ('accessToken' in res) {
          this.#accessToken = res.accessToken;
          this.#refreshToken = refreshToken;
          this.#email = res.email;
          this.#userRole = res.userRole;
          this.storeTokensInStorageHandler(res.accessToken, refreshToken);
        } else if (res.status === 401) {
          //Token expired
          const refreshRes = await refreshTokenAPI(refreshToken);
          if ('accessToken' in refreshRes) {
            this.#accessToken = refreshRes.accessToken;
            this.#refreshToken = refreshToken;
            this.#userRole = refreshRes.userRole;
            this.storeTokensInStorageHandler(refreshRes.accessToken, refreshToken);
          }
        } else if (res.status === 403) {
          //Access denied)
          this.#accessToken = '';
          this.#refreshToken = '';
          this.deleteTokenHandler();
        }
      }
      runInAction(() => {
        this.#isFinishLoadTokens = true;
      });
    } catch (error) {
      console.error('error in loadTokensFromStorageHandler', error);
      this.#accessToken = '';
      this.#refreshToken = '';
      this.deleteTokenHandler();
    }
  }

  setIsFinishLoadTokensHandler(isFinishLoadTokens: boolean) {
    if (isFinishLoadTokens === undefined) return;
    runInAction(() => {
      this.#isFinishLoadTokens = isFinishLoadTokens;
    });
  }

  async storeTokensInStorageHandler(accessToken: string, refreshToken: string) {
    if (!accessToken || !refreshToken) return;
    await setStringAsync(this.#ACCESS_TOKEN_KEY, accessToken);
    await setStringAsync(this.#ACCESS_REFRESH_TOKEN_KEY, refreshToken);
  }

  async setAccessTokensHandler(accessToken: string) {
    if (!accessToken) return;
    this.#accessToken = accessToken;
  }

  async deleteTokenHandler() {
    await deleteStringAsync(this.#ACCESS_TOKEN_KEY);
    await deleteStringAsync(this.#ACCESS_REFRESH_TOKEN_KEY);
    runInAction(() => {
      this.#accessToken = '';
      this.#refreshToken = '';
    });
  }

  setRememberMe(isRememberMe: boolean) {
    if (isRememberMe === undefined) return;
    runInAction(() => {
      this.#isRememberMe = isRememberMe;
    });
  }

  setEmail(email: string) {
    if (!email) return;
    this.#email = email;
  }
}
export default new UserStore();
