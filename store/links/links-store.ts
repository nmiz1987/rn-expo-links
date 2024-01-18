import { linkProps } from '@/src/components/link-preview/link-preview.interfaces';
import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '@/services/storage';

class LinkStore {
  private _links: linkProps[] = [];
  private _categories: string[] = [];
  private _favoriteLinks: string[] = [];
  private _usersFavoriteLinksToken: string = 'USERS_FAVORITE_LINKS';

  constructor() {
    makeAutoObservable(this);
  }

  get links() {
    return this._links;
  }

  get categories() {
    return this._categories;
  }

  get favoriteLinks() {
    return this._favoriteLinks;
  }

  async deleteFavoriteByUser() {
    await deleteStringAsync(this._usersFavoriteLinksToken);
  }

  async loadFavoriteByUser() {
    await getStringAsync(this._usersFavoriteLinksToken).then(links => {
      if (links) {
        runInAction(() => {
          this._favoriteLinks = links.split(',');
        });
      }
    });
  }

  isFavoriteByUser(link: string) {
    return this._favoriteLinks.includes(link);
  }

  setFavoriteByUser(link: string) {
    runInAction(() => {
      const index = this._favoriteLinks.indexOf(link);
      if (index === -1) {
        this._favoriteLinks.push(link);
      } else {
        this._favoriteLinks.splice(index, 1);
      }
      setStringAsync(this._usersFavoriteLinksToken, this._favoriteLinks.join(','));
    });
  }

  setLinks(links: linkProps[]) {
    if (links.length === 0) return;
    runInAction(() => {
      this._links = links;
      this._categories = Array.from(new Set(links.map((link: linkProps) => link.category)));
    });
  }

  addNewLink(link: linkProps) {
    if (link.name.length === 0) return;
    runInAction(() => {
      this._links.push(link);
      this._categories = Array.from(new Set(this._links.map((link: linkProps) => link.category)));
    });
  }
}
export default new LinkStore();
