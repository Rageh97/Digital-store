"use client";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import useSWR from "swr";

interface Service {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  hasProducts?: boolean;
  isActive?: boolean;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function AllServices() {
  const { data, error, isLoading } = useSWR<Service[]>(
    "http://localhost:3000/api/services",
    fetcher
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load services</p>;
  return (
    <main className="container mx-auto py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">ALL Categories</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            // imageUrl={service.imageUrl}
            href={`/services/${service.slug}`}
            footer={
              <Button variant="ghost" size="sm" className="flex-1">
                View All
              </Button>
            }
            icon={Eye}
            iconClassName="text-yellow-500"
          />
        ))}
      </div>
    </main>
  );
}
