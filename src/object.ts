/**
 * Object utilities
 */

/**
 * Deeply clones an object or array.
 * Supports objects, arrays, Date, RegExp, Map, Set, and primitives.
 */
export function deepClone<T>(value: T): T {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as any;
  }

  if (value instanceof RegExp) {
    return new RegExp(value) as any;
  }

  if (value instanceof Map) {
    return new Map(Array.from(value.entries()).map(([k, v]) => [deepClone(k), deepClone(v)])) as any;
  }

  if (value instanceof Set) {
    return new Set(Array.from(value.values()).map((v) => deepClone(v))) as any;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item)) as any;
  }

  const cloned: any = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      cloned[key] = deepClone((value as any)[key]);
    }
  }
  return cloned;
}

/**
 * Deeply merges two objects.
 * Arrays and primitives from `source` overwrite `target`.
 */
export function mergeObjects<T extends object, U extends object>(target: T, source: U): T & U {
  const result: any = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetVal = (target as any)[key];
      const sourceVal = (source as any)[key];

      if (sourceVal && typeof sourceVal === "object" && !Array.isArray(sourceVal) && !(sourceVal instanceof Date)) {
        result[key] = mergeObjects(targetVal || {}, sourceVal);
      } else {
        result[key] = deepClone(sourceVal);
      }
    }
  }

  return result;
}
