type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

// My solution
function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
}

// Better solution
function isEmptyBetter(input: Obj): boolean {
  // Check for object
  if (typeof input === "object" && !Array.isArray(input)) {
    return Object.keys(input).length === 0;
  }

  // Check for array
  if (Array.isArray(input)) {
    return input.length === 0;
  }

  // Other data types are not considered empty
  return false;
}
