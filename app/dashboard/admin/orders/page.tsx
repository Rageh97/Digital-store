"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: "ORD-001",
    customer: "محمد علي",
    service: "تصميم شعار",
    date: "2025-04-12",
    status: "قيد التنفيذ",
  },
  {
    id: "ORD-002",
    customer: "أحمد سعيد",
    service: "تطبيق مدفوع",
    date: "2025-04-10",
    status: "مكتمل",
  },
  {
    id: "ORD-003",
    customer: "نورا خالد",
    service: "اشتراك أكواد",
    date: "2025-04-09",
    status: "مرفوض",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">الطلبات</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم الطلب</TableHead>
            <TableHead>العميل</TableHead>
            <TableHead>الخدمة</TableHead>
            <TableHead>تاريخ الطلب</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>الإجراء</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.service}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "مكتمل"
                      ? "default"
                      : order.status === "مرفوض"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  عرض التفاصيل
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
