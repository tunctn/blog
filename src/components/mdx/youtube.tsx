"use client";

import YT from "react-youtube";

export function YouTube(props: React.ComponentProps<typeof YT>) {
  return (
    <span className="my-5 block">
      <YT width="100%" {...props} />
    </span>
  );
}
