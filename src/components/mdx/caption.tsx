import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import Balancer from "react-wrap-balancer";

export function Caption({ children, className, ...props }: ComponentPropsWithRef<"span">) {
  return (
    <span className={cn("my-3 block w-full text-center font-mono text-gray-500 text-xs leading-normal", className)} {...props}>
      <Balancer>
        <span className="[&>a]:post-link">{children}</span>
      </Balancer>
    </span>
  );
}
