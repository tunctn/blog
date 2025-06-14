"use client";

import YT from "react-youtube";

export function YouTube(props: React.ComponentProps<typeof YT>) {
  return (
    <span className="my-5 block">
      <YT iframeClassName="rounded-md bg-muted max-w-full h-full aspect-video" style={{ width: "100%", height: "100%" }} {...props} />
    </span>
  );
}
