import { getImageSize } from "@/utils/image-size";
import { parseAlt } from "@/utils/parse-alt";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Caption } from "./caption";
import { Image, type ImageProps } from "./image";

export async function Lightbox(props: ImageProps) {
  const { width, height } = await getImageSize(props.src);
  const ratio = width / height;
  const isHorizontal = ratio > 1;

  const { alt } = parseAlt(props.alt);

  return (
    <Dialog>
      <DialogTrigger className="relative flex h-full max-h-[500px] w-full flex-col">
        <div className="my-5 flex w-full grow flex-col items-center justify-center">
          <Image {...props} className="max-h-[450px] w-max grow cursor-zoom-in rounded-md object-contain" />
          {alt && <Caption>{alt}</Caption>}
        </div>
      </DialogTrigger>
      <DialogContent
        closeButtonProps={{
          className: "bg-white opacity-80 rounded-full [&_svg:not([class*='size-'])]:size-4.5 p-2",
        }}
        overlayProps={{
          className: "bg-black/90",
        }}
        className="flex h-full! max-h-max! w-full! max-w-max! items-center justify-center border-0 bg-transparent p-0 shadow-none!"
      >
        <VisuallyHidden>
          <DialogTitle>{props.alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative">
          <Image {...props} style={{ maxHeight: "90vh", maxWidth: isHorizontal ? "90vw" : `calc(90vh * ${ratio})` }} />
          {alt && <Caption>{alt}</Caption>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
