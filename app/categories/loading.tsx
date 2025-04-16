import { ServiceListSkeleton } from "@/components/categories/CategoryListSkeleton";

export default function Loading() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Services</h1>
      </div>
      <ServiceListSkeleton />
    </div>
  );
}
