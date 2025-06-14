import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

interface CodeProps extends ComponentPropsWithRef<"code"> {}

export const Code = ({ children, className, ...props }: CodeProps) => {
  return (
    <code
      className={cn("[p_&]:rounded-sm [p_&]:bg-gray-200 [p_&]:px-1 [p_&]:py-0.5 [p_&]:text-sm dark:[p_&]:bg-[#333] ", className)}
      {...props}
    >
      {children}
    </code>
  );
};
