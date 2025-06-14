import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

// we use `[ul_&]` prefix for the <UL> variety
export function LI({ children, className, ...props }: ComponentPropsWithRef<"li">) {
  return (
    <li
      className={cn(
        "[ul_&]:before:-ml-4 my-2 [ul_&]:relative [ul_&]:pl-4 [ul_&]:before:absolute [ul_&]:before:mr-2 [ul_&]:before:text-gray-400 [ul_&]:before:content-['–']",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  );
}
