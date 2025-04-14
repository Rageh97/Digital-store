import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, List, Users, Settings } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const navLinks = [
  { label: "الرئيسية", href: "/dashboard/admin", icon: Home },
  { label: "الطلبات", href: "/dashboard/admin/orders", icon: List },
  { label: "الخدمات", href: "/dashboard/admin/services", icon: Settings },
  { label: "المستخدمين", href: "/dashboard/admin/users", icon: Users },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* ثابت على يسار الشاشة */}
      <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r p-4 z-50">
        <h2 className="text-lg font-bold mb-4">لوحة التحكم</h2>
        <nav className="space-y-2">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 p-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* محتوى الصفحة مع إزاحة من اليسار */}
      <main className="flex-1 ml-64 p-6">{children}</main>
    </div>
  );
}
