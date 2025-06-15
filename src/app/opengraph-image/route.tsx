import { env } from "@/lib/env";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    <div tw="flex p-10 h-full w-full justify-center items-center bg-white flex-col">
      <img src={`${env.NEXT_PUBLIC_APP_URL}/assets/logo.svg`} width={240} height={240} alt="Tunç Türkmen" tw="mr-4" />
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
