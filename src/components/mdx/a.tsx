import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithRef } from "react";

export function A({ children, className = "", href, ...props }: ComponentPropsWithRef<typeof Link>) {
  if (typeof href === "string" && href[0] === "#") {
    return (
      <a
        href={href}
        className={cn(
          "border-gray-300 border-b text-gray-600 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:text-white dark:hover:border-white",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        "border-gray-300 border-b text-gray-600 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:text-white dark:hover:border-white",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
