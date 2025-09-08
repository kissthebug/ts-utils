import { describe, it, expect } from "vitest";
import { unique, chunk } from "../src";

describe("unique", () => {
  it("removes duplicates", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("works with strings", () => {
    expect(unique(["a", "b", "a"])).toEqual(["a", "b"]);
  });
});

describe("chunk", () => {
  it("splits array into equal parts", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("last chunk may be smaller", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it("returns empty array for non-positive size", () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });
});
