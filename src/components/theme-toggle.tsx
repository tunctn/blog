"use client";

import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button variant="ghost" className="group/toggle extend-touch-target size-8" onClick={toggleTheme} title="Toggle theme">
      {mounted ? resolvedTheme === "dark" ? <Sun /> : <Moon /> : null}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
