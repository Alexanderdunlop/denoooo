export function add(a: number, b: number): number {
  return a + b;
}

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
}
