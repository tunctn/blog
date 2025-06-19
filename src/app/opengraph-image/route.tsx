import { ImageResponse } from "next/og";
import { env } from "@/lib/env";

export async function GET() {
  return new ImageResponse(
    <div tw="flex p-10 h-full w-full justify-center items-center bg-white flex-col">
      <picture>
        <img src={`${env.NEXT_PUBLIC_APP_URL}/assets/logo.svg`} width={240} height={240} alt="Tunç Türkmen" tw="mr-4" />
      </picture>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
