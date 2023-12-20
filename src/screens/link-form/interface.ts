export interface formProp {
  tags: string;
  category: string;
  name: string;
  description: string;
  link: string;
  isRecommended: boolean;
  imgSrc: string;
  isError: boolean;
}

export enum EnumForm {
  Tags = 'tags',
  Category = 'category',
  Name = 'name',
  Description = 'description',
  Link = 'link',
  IsRecommended = 'recommended',
  ImgSrc = 'imgSrc',
}
