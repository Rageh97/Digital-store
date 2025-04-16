// components/services/ServiceList.tsx
"use client";

import { Category } from "@/types/category";
import { ServiceCard } from "./CategoryCard";

interface CategoryListProps {
  categories: Category[];
}

export function ServiceList({ categories }: CategoryListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <ServiceCard key={category._id} category={category} />
      ))}
    </div>
  );
}
