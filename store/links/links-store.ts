import { makeAutoObservable, runInAction } from 'mobx';
import { deleteStringAsync, getStringAsync, setStringAsync } from '@/services/storage';
import { linkProps } from '@/src/components/link-preview/link-preview.interfaces';

class LinkStore {
  #links: linkProps[] = [];
  #categories: string[] = [];
  #favoriteLinks: string[] = [];
  #usersFavoriteLinksToken: string = 'USERS_FAVORITE_LINKS';

  constructor() {
    makeAutoObservable(this);
  }

  get links() {
    return this.#links;
  }

  get categories() {
    return this.#categories;
  }

  get favoriteLinks() {
    return this.#favoriteLinks;
  }

  async deleteFavoriteByUser() {
    await deleteStringAsync(this.#usersFavoriteLinksToken);
  }

  async loadFavoriteByUser() {
    await getStringAsync(this.#usersFavoriteLinksToken).then(links => {
      if (links) {
        runInAction(() => {
          this.#favoriteLinks = links.split(',');
        });
      }
    });
  }

  isFavoriteByUser(link: string) {
    return this.#favoriteLinks.includes(link);
  }

  setFavoriteByUser(link: string) {
    runInAction(() => {
      const index = this.#favoriteLinks.indexOf(link);
      if (index === -1) {
        this.#favoriteLinks.push(link);
      } else {
        this.#favoriteLinks.splice(index, 1);
      }
      setStringAsync(this.#usersFavoriteLinksToken, this.#favoriteLinks.join(','));
    });
  }

  setLinks(links: linkProps[]) {
    if (links.length === 0) return;
    runInAction(() => {
      this.#links = links;
      this.#categories = Array.from(new Set(links.map((link: linkProps) => link.category)));
    });
  }

  addNewLink(link: linkProps) {
    if (link.name.length === 0) return;
    runInAction(() => {
      this.#links.push(link);
      this.#categories = Array.from(new Set(this.#links.map((link: linkProps) => link.category)));
    });
  }
}
export default new LinkStore();
