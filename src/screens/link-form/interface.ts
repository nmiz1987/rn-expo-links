export interface formProp {
  tags: string;
  isErrorTags: boolean;
  category: string;
  isErrorCategory: boolean;
  name: string;
  isErrorName: boolean;
  description: string;
  isErrorDescription: boolean;
  link: string;
  isErrorLink: boolean;
  isRecommended: boolean;
  imgSrc: string;
  isErrorImgSrc: boolean;
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
