// Leetcode Function Composition
export function composition() {
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
