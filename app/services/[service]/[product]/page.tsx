// app/services/[serviceSlug]/[productSlug]/page.tsx
import { notFound } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/utils";

interface Props {
  params: { service: string; product: string };
}

export default function ProductPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.service);
  const product = service?.products.find((p) => p.slug === params.product);

  if (!service || !product) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-muted-foreground">{product.description}</p>
        <p className="text-xl font-semibold mt-2">السعر: {product.price} ريال</p>
      </div>

      <form className="space-y-4 bg-muted/30 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">طلب الخدمة</h2>

        <Input required placeholder="الاسم الكامل" name="name" />
        <Input required placeholder="البريد الإلكتروني" name="email" type="email" />
        <Textarea placeholder="تفاصيل إضافية (اختياري)" name="details" rows={4} />

        <Button type="submit">إرسال الطلب</Button>
      </form>
    </div>
  );
}
