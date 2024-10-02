type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return Promise.all(functions.map((fn) => fn()));
}

export function runPromiseAll() {
  const promise = promiseAll([() => new Promise((res) => res(42))]);
  promise.then(console.log); // [42]
}
