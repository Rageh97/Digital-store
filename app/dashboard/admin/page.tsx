import { StatCard } from "@/components/dashboard/admin/page";

export default function AdminDashboardPage() {
  // بيانات مبدئية (لاحقًا نربطها بـ API)
  const stats = [
    { label: "عدد الطلبات", value: 120 },
    { label: "عدد المستخدمين", value: 45 },
    { label: "عدد الخدمات", value: 10 },
    { label: "عدد المتاجر المباعة", value: 18 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">لوحة تحكم الأدمن</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
