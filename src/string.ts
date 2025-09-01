/**
 * String utilities
 */

/** Convert input to string and return lowercase. Always returns a string. */
export function stringToLower(input: unknown): string {
  if (input === null || input === undefined) return "";
  return String(input).toLowerCase();
}

/** Convert input to string and return uppercase. Always returns a string. */
export function stringToUpper(input: unknown): string {
  if (input === null || input === undefined) return "";
  return String(input).toUpperCase();
}
