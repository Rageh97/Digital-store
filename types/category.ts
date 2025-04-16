export interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCategoryInput {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  isActive?: boolean;
}

export interface UpdateCategoryInput {
  name?: string;
  slug?: string;
  description?: string | null;
  image?: string | null;
  isActive?: boolean;
}

export interface CategoryApiResponse {
  success: boolean;
  data?: Category | Category[];
  error?: string;
  message?: string;
}
