import { cn } from "@/lib/utils";
import { getImageSize } from "@/utils/image-size";
import { parseAlt } from "@/utils/parse-alt";
import NextImage from "next/image";
import type { ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends NextImageProps {
  src: string;
}

export async function Image({ src, alt: originalAlt, className, ...props }: ImageProps) {
  const isDataImage = src.startsWith("data:");
  if (isDataImage) {
    /* eslint-disable @next/next/no-img-element */
    return <img src={src} alt={originalAlt ?? ""} />;
  }

  if (props.width === undefined || (props.height === undefined && props.fill === false)) {
    const { width, height } = await getImageSize(src);
    props.width = width;
    props.height = height;
  }

  const { alt, factor } = parseAlt(originalAlt);

  return (
    <span className="flex flex-col items-center">
      <NextImage
        {...props}
        className={cn(className, "overflow-hidden rounded-md")}
        width={props.fill ? undefined : props.width ? (props.width as unknown as number) * factor : undefined}
        height={props.fill ? undefined : props.height ? (props.height as unknown as number) * factor : undefined}
        alt={alt ?? ""}
        src={src}
      />
    </span>
  );
}
