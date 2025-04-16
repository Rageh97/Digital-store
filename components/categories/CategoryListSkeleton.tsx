// components/services/ServiceListSkeleton.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export  function ServiceListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[380px] w-full rounded-lg" />
      ))}
    </div>
  );
}
