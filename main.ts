export function add(a: number, b: number): number {
  return a + b;
}

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Leetcode Function Composition
function composition() {
  const x = 4;
  const exampleFunctions = [
    (x: number) => x + 1,
    (x: number) => x * x,
    (x: number) => 2 * x,
  ];
  const output = 65;

  let y = x;
  let len = exampleFunctions.length;

  while (len--) {
    y = exampleFunctions[len](y);
  }

  console.log(output === y);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));

  composition();

  // console.log("Add 5 + 3 =", add(5, 3));

  // const nums = [1, 2, 3, 4];
  // const fn = function sum(accum: number, curr: number) {
  //   return accum + curr;
  // };

  // let val = 0;
  // let i = 0;
  // while (i < nums.length) {
  //   val = fn(val, nums[i]);
  //   i++;
  // }
  // console.log("Sum of array [1,2,3,4] is", val);
}
