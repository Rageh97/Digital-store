"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./togglemode";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/services" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement your search logic here
  };

  return (
    <header className="sticky flex items-center justify-center top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl flex h-16 items-center justify-between space-x-6">
        <div className="mr-4 flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={"/logo.png"} width={60} height={40} alt="logo"/>
          </Link>
          <ModeToggle />
        </div>

        <div className="flex items-center space-x-3">
          <nav className="hidden md:flex ">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex  items-center justify-end space-x-2">
            {isSearchOpen ? (
              <form
                onSubmit={handleSearch}
                className="relative flex w-full max-w-sm items-center md:w-auto"
              >
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close search</span>
                </Button>
              </form>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Signup</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement your search logic here
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto pb-12">
      <div className="px-7 py-4">
        <Link href="/" className="flex items-center">
          <span className="font-bold">Brand</span>
        </Link>
      </div>
      <div className="px-7 py-2">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>
      <div className="flex-1">
        <nav className="flex flex-col space-y-2 px-7 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex py-2 text-base font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
