type F = (...args: string[]) => void;

function debounce(fn: F, t: number): F {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(null, args);
    }, t);
  };
}

export function runDebounce() {
  const log = debounce(console.log, 100);
  log("Hello"); // cancelled
  log("Hello"); // cancelled
  log("Hello"); // Logged at t=100ms
}
