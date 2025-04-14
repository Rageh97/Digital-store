"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateServicePage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: send data to backend or API
    setTimeout(() => {
      alert("تم حفظ الخدمة بنجاح");
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>إضافة خدمة جديدة</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">اسم الخدمة</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="مثال: خدمة تصميم الشعارات"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">الوصف</Label>
            <Textarea
              id="description"
              name="description"
              required
              placeholder="نبذة عن هذه الخدمة"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">التصنيف</Label>
            <Input
              id="category"
              name="category"
              placeholder="مثال: تصميم / تطوير / رقمية"
            />
          </div>

          <div className="space-y-2">
            <Label>الحالة</Label>
            <Select defaultValue="active" name="status">
              <SelectTrigger>
                <SelectValue placeholder="اختر الحالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">نشطة</SelectItem>
                <SelectItem value="hidden">مخفية</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <Button type="submit" disabled={loading}>
              {loading ? "جاري الحفظ..." : "حفظ الخدمة"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
