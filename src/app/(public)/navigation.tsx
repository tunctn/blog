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
    title: "Blog",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];
export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="my-4 flex items-center gap-4 border-t border-b">
      {NAVIGATION.map((item) => {
        let isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        if (pathname.startsWith("/blog") && item.href === "/") {
          isActive = true;
        }
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("relative py-2", {
              "font-semibold": isActive,
            })}
          >
            {item.title}
            {/* {isActive && <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />} */}
          </Link>
        );
      })}
    </nav>
  );
};
