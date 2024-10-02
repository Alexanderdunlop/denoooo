import { composition } from "./leetcode/js-composition.ts";
import { runMemoize } from "./leetcode/js-memoize.ts";
import { runTimeLimitedCache } from "./leetcode/2622-cache-with-limit.ts";
import { runPromiseTimeLimit } from "./leetcode/2637-promise-time-limit.ts";
import { runDebounce } from "./leetcode/2627-debounce.ts";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  // console.log("Add 2 + 3 =", add(2, 3));

  // composition();
  // runMemoize();
  // runPromiseTimeLimit();
  // runTimeLimitedCache();
  runDebounce();
}
