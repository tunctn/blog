export function getRefererOrigin(raw: string | null): string | null {
  if (!raw) return null;

  try {
    // Strip tracking junk first if you like
    const { protocol, host, pathname } = new URL(raw);
    return `${protocol}//${host}${pathname}`; // ➜ "https://example.com"
  } catch {
    return null; // malformed or missing
  }
}
