"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItem = {
  title: string;
  href: string;
};

const NAVIGATION: NavigationItem[] = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];
export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="mt-6 flex items-center gap-4 rounded-md bg-muted px-4">
      {NAVIGATION.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("relative py-2", {
              "font-semibold": isActive,
            })}
          >
            {item.title}
            {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />}
          </Link>
        );
      })}
    </nav>
  );
};
