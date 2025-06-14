"use client";

import { useState } from "react";

type InteractiveDemoProps = {
  title?: string;
  children?: React.ReactNode;
};

export function InteractiveDemo({ title = "Interactive Demo", children }: InteractiveDemoProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="my-6 rounded-lg border bg-card p-6">
      <h3 className="mb-4 font-semibold text-lg">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Click me
          </button>
          <span className="text-muted-foreground text-sm">Clicked {count} times</span>
        </div>
        {children && <div className="mt-4 rounded-md bg-muted p-4">{children}</div>}
      </div>
    </div>
  );
}
