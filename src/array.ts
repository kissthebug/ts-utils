/**
 * Array utilities
 */

/**
 * Removes duplicate values from an array.
 * Uses strict equality (===) for comparison.
 */
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * Splits an array into chunks of given size.
 * If size <= 0, returns an empty array.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
