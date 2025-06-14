import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

interface FigureProps extends ComponentPropsWithRef<"div"> {
  wide?: boolean;
}

export function Figure({ wide = false, children, className, ...props }: FigureProps) {
  return (
    <div
      className={cn("text-center", {
        "relative bg-gray-100 before:absolute before:top-[0] before:left-[-1000px] before:z-[-1] before:h-[100%] before:w-[10000%] before:bg-gray-100 before:content-[ dark:bg-[#111] before:dark:bg-[#111]":
          wide,
      })}
      {...props}
    >
      {children}
    </div>
  );
}
