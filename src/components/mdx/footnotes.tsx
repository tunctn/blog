import { cn } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";
import { A } from "./a";
import { P } from "./p";

interface FootNotesProps extends ComponentPropsWithRef<"div"> {}

export const FootNotes = ({ children, className, ...props }: FootNotesProps) => (
  <div
    className={cn(
      "before:content[''] text-base before:m-auto before:my-10 before:block before:w-[200px] before:border-gray-300 before:border-t dark:before:border-[#444]",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const Ref = ({ id }: { id: string }) => (
  <a href={`#f${id}`} id={`s${id}`} className="relative top-[-5px] text-xs no-underline">
    [{id}]
  </a>
);

export const FootNote = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <P>
    {id}.{" "}
    <A href={`#s${id}`} id={`f${id}`} className="no-underline">
      ^
    </A>{" "}
    {children}
  </P>
);
