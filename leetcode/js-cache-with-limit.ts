// My solution to the problem, problem is cache doesn't clear itself.
class TimeLimitedCache {
  cache: Map<
    number,
    {
      value: number;
      expiration: Date;
    }
  > = new Map();

  constructor() {}

  set(key: number, value: number, duration: number): boolean {
    const didExist = this.get(key) !== -1;
    this.cache.set(key, {
      value,
      expiration: new Date(Date.now() + duration),
    });
    return didExist;
  }

  get(key: number): number {
    const item = this.cache.get(key);
    if (!item) {
      return -1;
    }
    if (item.expiration.getTime() < Date.now()) {
      this.cache.delete(key);
      return -1;
    }
    return item.value;
  }

  count(): number {
    let count = 0;
    // map through the cache and return the size
    this.cache.forEach((value, _) => {
      if (value.expiration.getTime() > Date.now()) {
        count++;
      }
    });
    return count;
  }
}

// jwseph
// Overall time/space complexity: O(n)

// Problem here: Javascript's architecture, but each setTimeout creates a list that a thread regularly has to go check every single one of them to ensure they are expired on time.

class TimeLimitedCacheO {
  cache: Map<number, { value: number; ref: number }> = new Map();

  constructor() {}

  set(key: number, value: number, duration: number): boolean {
    const found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key)!.ref);
    this.cache.set(key, {
      value,
      ref: setTimeout(() => this.cache.delete(key), duration),
    });
    return found;
  }

  get(key: number): number {
    return this.cache.has(key) ? this.cache.get(key)!.value : -1;
  }

  count(): number {
    return this.cache.size;
  }
}

export function runTimeLimitedCache() {
  const timeLimitedCache = new TimeLimitedCache();
  timeLimitedCache.set(1, 42, 1000); // false
  console.log(timeLimitedCache.get(1)); // 42
  console.log(timeLimitedCache.count()); // 1
}
