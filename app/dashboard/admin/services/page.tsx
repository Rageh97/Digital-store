"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const services = [
  {
    id: "srv-1",
    name: "تصميم",
    description: "خدمة تصميم شعارات وهويات بصرية.",
    category: "تصميم",
    productsCount: 12,
    status: "نشطة",
  },
  {
    id: "srv-2",
    name: "تطبيقات مدفوعة",
    description: "خدمة بيع تطبيقات جاهزة.",
    category: "برمجة",
    productsCount: 5,
    status: "مخفية",
  },
  {
    id: "srv-3",
    name: "اشتراكات أكواد",
    description: "خدمة بيع أكواد واشتراكات رقمية.",
    category: "رقمية",
    productsCount: 20,
    status: "نشطة",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">الخدمات</h1>
        <Button asChild>
          <Link href="/dashboard/admin/services/create">إضافة خدمة</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {service.name}
                <Badge
                  variant={service.status === "نشطة" ? "default" : "destructive"}
                >
                  {service.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{service.description}</p>
              <p className="mt-2">التصنيف: {service.category}</p>
              <p>المنتجات: {service.productsCount}</p>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/dashboard/admin/services/${service.id}`}>
                  تفاصيل
                </Link>
              </Button>
              <Button variant="default" size="sm">
                تعديل
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
