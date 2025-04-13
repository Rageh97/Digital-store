import { services } from "@/lib/utils";
import { ServiceCard } from "@/components/service-card";
import { notFound } from "next/navigation";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface props {
  params: { service: string };
}
const Service = ({ params }: props) => {
  const service = services.find((s) => s.slug === params.service);
  if (!service) return notFound();
  return (
    <main className="container mx-auto py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">ALL Categories</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {service.products.map((product) => (
          <ServiceCard
            key={product.slug}
            title={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
            href={`/services/${service.slug}/${product.slug}`}
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
};

export default Service;
