export const revalidate = 60;

import { readFileSync } from "node:fs";
import { join } from "node:path";
import commaNumber from "comma-number";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getPostByYearAndSlug } from "@/lib/blog";
import { env } from "@/lib/env";

const fontsDir = join(process.cwd(), "src/fonts");

const inter300 = readFileSync(join(fontsDir, "inter-latin-300-normal.woff"));
const inter700 = readFileSync(join(fontsDir, "inter-latin-700-normal.woff"));
const robotoMono400 = readFileSync(join(fontsDir, "roboto-mono-latin-400-normal.woff"));

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const year = requestUrl.pathname.split("/")[2];
  const slug = requestUrl.pathname.split("/")[3];

  const post = await getPostByYearAndSlug(year, slug);

  if (!post) {
    return new ImageResponse(<div>Post not found</div>, {
      width: 1200,
      height: 630,
    });
  }

  const title = getTitle(post.meta.title);
  const description = getDescription(post.meta.description);
  const titleSize = getTitleSize(title);

  return new ImageResponse(
    <div tw="flex p-10 h-full w-full bg-white flex-col" style={font("Inter 300")}>
      <header tw="flex w-full items-center justify-center mt-10">
        <picture>
          <img src={`${env.NEXT_PUBLIC_APP_URL}/assets/logo.svg`} width={48} height={48} alt="Tunç Türkmen" />
        </picture>
      </header>

      <main tw="flex grow items-center justify-center flex-col w-full pt-5">
        <div tw="flex text-gray-600 mx-auto items-center justify-between text-[28px]" style={font("Roboto Mono 400")}>
          <div tw="flex mr-20">{commaNumber(post.meta.views)} views</div>
          <div tw="flex">{getPrettyDate(post.meta.date)}</div>
        </div>

        <div
          tw="mt-4 flex justify-center px-10 text-center"
          style={{ ...font("Inter 700"), fontSize: titleSize, lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {title}
        </div>
        <div tw="mt-5 pb-6 flex justify-center text-[40px] px-40 text-center" style={font("Inter 400")}>
          {description}
        </div>
      </main>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter 300",
          data: inter300,
        },
        {
          name: "Inter 700",
          data: inter700,
        },
        {
          name: "Roboto Mono 400",
          data: robotoMono400,
        },
      ],
    },
  );
}

const getTitle = (title: string) => {
  if (title.length > 100) {
    return `${title.slice(0, 100)}...`;
  }
  return title;
};

const getDescription = (description: string) => {
  if (description.length > 100) {
    return `${description.slice(0, 100)}...`;
  }
  return description;
};

function getTitleSize(title: string) {
  if (title.length < 30) {
    return 120;
  }
  if (title.length < 50) {
    return 70;
  }
  return 60;
}

function getPrettyDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function font(fontFamily: string) {
  return { fontFamily };
}
