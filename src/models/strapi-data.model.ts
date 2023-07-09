export interface ReposnePackageFromStrapi {
  data: Package[];
  meta: Meta;
}

export interface Package {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  header: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

////Logos
export interface ResposneLogoFormStrapi {
  data: DataLogoFormStrapi[];
}

export interface DataLogoFormStrapi {
  id: number;
  attributes: LogoAttributes;
}

export interface LogoAttributes {
  alt: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  img: imgArr;
}

export interface imgArr {
  data: Img[];
}

export interface Img {
  id: number;
  attributes: ImgAttributes;
}

export interface ImgAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}
