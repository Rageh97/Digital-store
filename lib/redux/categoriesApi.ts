import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  Category, 
  CreateCategoryInput, 
  UpdateCategoryInput,
  CategoryApiResponse 
} from '@/types/category';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
      transformResponse: (response: CategoryApiResponse): Category[] => {
        if (!response.data) throw new Error(response.error || 'No categories found');
        return Array.isArray(response.data) ? response.data : [response.data];
      },
      providesTags: (result) => 
        result 
          ? [...result.map(({ id }) => ({ type: 'Category' as const, id })), 'Category']
          : ['Category'],
    }),
    getCategoryBySlug: builder.query<Category, string>({
      query: (slug) => `categories/${slug}`,
      transformResponse: (response: CategoryApiResponse): Category => {
        if (!response.data || Array.isArray(response.data)) {
          throw new Error(response.error || 'Category not found');
        }
        return response.data;
      },
      providesTags: (result, error, slug) => [{ type: 'Category', id: result?._id || slug }],
    }),
    createCategory: builder.mutation<Category, CreateCategoryInput>({
      query: (body) => ({
        url: 'categories',
        method: 'POST',
        body,
      }),
      transformResponse: (response: CategoryApiResponse): Category => {
        if (!response.data || Array.isArray(response.data)) {
          throw new Error(response.error || 'Failed to create category');
        }
        return response.data;
      },
      invalidatesTags: ['Category'],
    }),
    updateCategory: builder.mutation<Category, { slug: string; body: UpdateCategoryInput }>({
      query: ({ slug, body }) => ({
        url: `categories/${slug}`,
        method: 'PUT',
        body,
      }),
      transformResponse: (response: CategoryApiResponse): Category => {
        if (!response.data || Array.isArray(response.data)) {
          throw new Error(response.error || 'Failed to update category');
        }
        return response.data;
      },
      invalidatesTags: (result, error, { slug }) => [
        { type: 'Category', id: result?._id || slug },
        'Category',
      ],
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (slug) => ({
        url: `categories/${slug}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, slug) => [{ type: 'Category', id: slug }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;