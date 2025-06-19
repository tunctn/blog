import { Children } from "react";

export function withHeadingId(children: React.ReactNode) {
  return Children.map(children, (el) => {
    if ("string" === typeof el) {
      const re = /\[#([^\]]+)\]\s*$/m;
      const match = el.match(re);

      if (match?.[1]?.length) {
        return (
          <span className="relative">
            <a
              className={`-left-[2rem] invisible absolute px-3 font-mono font-normal text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400 [span:hover_&]:visible `}
              href={`#${match[1]}`}
            >
              #
            </a>

            {el.substring(0, match.index)}
          </span>
        );
      }
    }

    return el;
  });
}
