import { describe, it, expect } from "vitest";
import { stringToLower, stringToUpper } from "../src";

describe("string converters", () => {
  it("lowercases strings", () => {
    expect(stringToLower("ABC")).toBe("abc");
    expect(stringToLower(null)).toBe("");
    expect(stringToLower(123)).toBe("123");
  });

  it("uppercases strings", () => {
    expect(stringToUpper("abc")).toBe("ABC");
    expect(stringToUpper(undefined)).toBe("");
  });
});
