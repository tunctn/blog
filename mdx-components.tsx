import type { MDXComponents } from "mdx/types";

import { A as a } from "@/components/mdx/a";
import { Blockquote as blockquote } from "@/components/mdx/blockquote";
import { Callout } from "@/components/mdx/callout";
import { Caption } from "@/components/mdx/caption";
import { Code as code } from "@/components/mdx/code";
import { Figure } from "@/components/mdx/figure";
import { FootNote, FootNotes, Ref } from "@/components/mdx/footnotes";
import { H1 as h1 } from "@/components/mdx/h1";
import { H2 as h2 } from "@/components/mdx/h2";
import { H3 as h3 } from "@/components/mdx/h3";
import { HR as hr } from "@/components/mdx/hr";
import { Image } from "@/components/mdx/image";
import { LI as li } from "@/components/mdx/li";
import { Lightbox } from "@/components/mdx/lightbox";
import { OL as ol } from "@/components/mdx/ol";
import { P as p } from "@/components/mdx/p";
import { Snippet } from "@/components/mdx/snippet";
import { Tweet } from "@/components/mdx/tweet";
import { UL as ul } from "@/components/mdx/ul";
import { YouTube } from "@/components/mdx/youtube";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Lightbox,
    blockquote,
    Tweet,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}
