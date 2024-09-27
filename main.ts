export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));

  console.log("Add 5 + 3 =", add(5, 3));

  const nums = [1, 2, 3, 4];
  const fn = function sum(accum: number, curr: number) {
    return accum + curr;
  };

  let val = 0;
  let i = 0;
  while (i < nums.length) {
    val = fn(val, nums[i]);
    i++;
  }
  console.log("Sum of array [1,2,3,4] is", val);
}
