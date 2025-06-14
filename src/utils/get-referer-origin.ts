export function getRefererOrigin(raw: string | null): string | null {
  if (!raw) return null;

  try {
    // Strip tracking junk first if you like
    const { protocol, host } = new URL(raw);
    return `${protocol}//${host}`; // ➜ "https://example.com"
  } catch {
    return null; // malformed or missing
  }
}
