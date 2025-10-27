interface CacheItem<T> {
    data: T;
    timestamp: number;
    ttl: number; // Time to live in milliseconds
}

class Cache {
    private cache = new Map<string, CacheItem<unknown>>();

    set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
        this.cache.set(key, {
            data,
            timestamp: Date.now(),
            ttl,
        });
    }

    get<T>(key: string): T | null {
        const item = this.cache.get(key) as CacheItem<T> | undefined;
        if (!item) return null;

        const now = Date.now();
        if (now - item.timestamp > item.ttl) {
            this.cache.delete(key);
            return null;
        }

        return item.data;
    }

    clear(): void {
        this.cache.clear();
    }
}

export const cache = new Cache();
