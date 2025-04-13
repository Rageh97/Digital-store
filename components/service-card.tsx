import type React from "react";
// import Image, { StaticImageData } from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  href?: string;
  footer?: React.ReactNode;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  imageAlt = "category",
  icon: Icon,
  iconClassName,
  href,
  footer,
  className,
}: CategoryCardProps) {
  const content = (
    <>
      <CardHeader className="space-y-1">
        {imageUrl && (
          <div className="mb-2 flex items-center ">
            <Image
              className="rounded-lg"
              src={imageUrl}
              width={100}
              height={100}
              alt={imageAlt}
            />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-4" />
      </CardContent>
      {footer && (
        <CardFooter className="flex items-center justify-between space-x-2">
          {footer} {Icon && <Icon className={cn("h-5 w-5", iconClassName)} />}
        </CardFooter>
      )}
    </>
  );

  if (href) {
    return (
      <Card
        className={cn(
          "overflow-hidden transition-colors hover:bg-muted/50",
          className
        )}
      >
        <Link href={href} className="block h-full">
          {content}
        </Link>
      </Card>
    );
  }

  return <Card className={className}>{content}</Card>;
}
