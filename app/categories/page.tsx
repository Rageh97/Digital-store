// components/services/ServiceListContainer.tsx
"use client";

import { ServiceList } from "@/components/categories/CategoryList";
import { ServiceListSkeleton } from "@/components/categories/CategoryListSkeleton";
import { useGetCategoriesQuery } from "@/lib/redux/categoriesApi";

export default function ServiceListContainer() {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) return <ServiceListSkeleton />;
  if (isError) return <div>Error loading categories</div>;

  return <ServiceList categories={categories || []} />;
}
