export interface ParsedAlt {
  alt: string | null;
  factor: number;
}

/**
 * Parses an image alt text to extract the clean alt text and a scaling factor.
 * The scaling factor is expected to be at the end of the string in the format ` [n%]`.
 *
 * @example
 * // returns { alt: 'A beautiful landscape', factor: 0.5 }
 * parseAlt('A beautiful landscape [50%]')
 *
 * @example
 * // returns { alt: 'A normal image', factor: 1 }
 * parseAlt('A normal image')
 *
 * @param originalAlt The raw alt text from the image, which may include a scaling factor.
 * @returns An object containing the clean alt text and the scaling factor (e.g., 0.5 for 50%).
 */
export function parseAlt(originalAlt: string | null | undefined): ParsedAlt {
  if (typeof originalAlt !== "string") {
    return { alt: originalAlt ?? null, factor: 1 };
  }

  // This regex captures the main alt text and an optional percentage at the end.
  const match = originalAlt.match(/(.*?) ?\[(\d+)%\]$/);

  if (match) {
    return {
      alt: match[1].trim(),
      factor: Number.parseInt(match[2], 10) / 100,
    };
  }

  return { alt: originalAlt, factor: 1 };
}
