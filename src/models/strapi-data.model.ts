export interface DataFromStrapi {
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
