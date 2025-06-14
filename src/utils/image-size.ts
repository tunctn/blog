import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sizeOf from "image-size";

export async function getImageSize(src: string): Promise<{ width: number; height: number }> {
  let imageBuffer: Buffer;

  if (src.startsWith("http")) {
    const res = await fetch(src);
    imageBuffer = Buffer.from(await res.arrayBuffer());
  } else if (!process.env.CI && process.env.VERCEL_URL && process.env.NODE_ENV === "production") {
    const res = await fetch(`https://${process.env.VERCEL_URL}${src}`);
    imageBuffer = Buffer.from(await res.arrayBuffer());
  } else {
    const imagePath = join(process.cwd(), "public", src);
    imageBuffer = await readFile(imagePath);
  }

  const computedSize = sizeOf(imageBuffer);
  if (computedSize.width === undefined || computedSize.height === undefined) {
    throw new Error(`Could not compute image size for ${src}`);
  }

  return { width: computedSize.width, height: computedSize.height };
}
