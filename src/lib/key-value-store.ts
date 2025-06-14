import { db, kvCleanup, kvTable } from "@/database";
import { desc, eq, lt } from "drizzle-orm";

export class KeyValueStore {
  static readonly instance = new KeyValueStore();

  async set<T = unknown>(key: string, value: T, ttl?: number): Promise<void> {
    const expiresAt = typeof ttl === "number" ? new Date(Date.now() + ttl * 1_000) : null; //

    await db
      .insert(kvTable)
      .values({ key, value, expires_at: expiresAt })
      .onConflictDoUpdate({
        target: kvTable.key,
        set: { value, expires_at: expiresAt },
      });
  }

  async get<T = unknown>(key: string): Promise<T | null> {
    const row = await db.select().from(kvTable).where(eq(kvTable.key, key)).limit(1);

    if (!row[0]) return null;
    if (row[0].expires_at && row[0].expires_at < new Date()) {
      await this.del(key);
      return null;
    }
    return row[0].value as T;
  }

  async del(key: string): Promise<void> {
    await db.delete(kvTable).where(eq(kvTable.key, key));
  }

  async cleanupExpired(): Promise<number> {
    const [lastCleanup] = await db.select().from(kvCleanup).orderBy(desc(kvCleanup.cleaned_at)).limit(1);
    if (lastCleanup && lastCleanup.cleaned_at > new Date(Date.now() - 1000 * 60 * 60 * 24)) {
      return 0;
    }

    const result = await db.delete(kvTable).where(lt(kvTable.expires_at, new Date()));
    await db.insert(kvCleanup).values({ cleaned_at: new Date() });

    return result.rowCount ?? 0;
  }
}

export const kv = KeyValueStore.instance;
