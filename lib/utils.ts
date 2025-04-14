import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const services = [
  {
    title: "تصميم",
    slug: "design",
    description: "خدمة تصميم الشعارات والهويات البصرية",
    imageUrl: "/category.jpeg",
    products: [
      {
        name: "تصميم شعار",
        slug: "logo",
        price: 250,
        description: "شعار احترافي لمتجرك أو مشروعك",
        imageUrl: "/category.jpeg",
      },
      {
        name: "تصميم هوية",
        slug: "identity",
        price: 600,
        description: "هوية بصرية كاملة",
        imageUrl: "/category.jpeg",
      },
    ],
  },
  {
    title: "تطبيقات مدفوعة",
    slug: "apps",
    description: "خدمة التطبيقات الجاهزة للشراء",
    imageUrl: "/category.jpeg",
    products: [
      {
        name: "تطبيق متجر إلكتروني",
        slug: "store-app",
        price: 1200,
        description: "تطبيق جاهز لمتجرك",
        imageUrl: "/category.jpeg",
      },
    ],
  },
  {
    title: "تطبيقات مدفوعة",
    slug: "apps",
    description: "خدمة التطبيقات الجاهزة للشراء",
    imageUrl: "/category.jpeg",
    products: [
      {
        name: "تطبيق متجر إلكتروني",
        slug: "store-app",
        price: 1200,
        description: "تطبيق جاهز لمتجرك",
        imageUrl: "/category.jpeg",
      },
    ],
  },
];
