import { linkProps } from "@/src/components/link/interfaces";
import { makeAutoObservable, runInAction } from 'mobx';


class LinkStore {
  private _links: linkProps[] = [];
  private _categories: string[] = [];
  private _favoriteLinks: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get links() {
    return this._links;
  }

  get categories() {
    return this._categories;
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
    }
    );
  }

  setLinks(links: linkProps[]) {
    if (links.length === 0) return;
    runInAction(() => {
      this._links = links;
      this._categories = Array.from(new Set(links.map((link: linkProps) => link.category)))
    });
  }

}
export default new LinkStore();
