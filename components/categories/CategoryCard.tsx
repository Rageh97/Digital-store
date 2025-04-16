"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Badge } from "@/components/ui/badge";
import { Category } from "@/types/category";
import Image from "next/image";

interface CategoryCardProps {
  category: Category;
}

export function ServiceCard({ category }: CategoryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        {category.image && (
          <Image
            src={category.image} 
            alt={category.name}
            width={300}
            height={200}
            className="rounded-lg"
          />
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{category?.name}</CardTitle>
          <Badge variant={category?.isActive ? "default" : "destructive"}>
            {category?.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
        <CardDescription className="mt-2 line-clamp-2">
          {category?.slug}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href={`/services/${category?._id}`}>View All</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
