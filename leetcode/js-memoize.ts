type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>();
  return function (...args) {
    const key = args.join("-");
    const item = cache.get(key);
    console.log(key, item);
    console.log("item", item);
    if (item) {
      console.log("item", item);
      return item;
    }
    const value = fn(...args);
    cache.set(key, value);
    return value;
  };
}

export function runMemoize() {
  const sum = (a: number, b: number) => a + b;
  const memoizedSum = memoize(sum);
  memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
  memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
  // "getCallCount" - total call count: 1
  memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
  // "getCallCount" - total call count: 2
  memoizedSum(0, 0);
  memoizedSum(0, 0);
}
