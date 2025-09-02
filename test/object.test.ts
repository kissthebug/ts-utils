import { describe, it, expect } from "vitest";
import { deepClone, mergeObjects } from "../src";

describe("deepClone", () => {
  it("clones nested objects", () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original); // new object
    expect(cloned.b).not.toBe(original.b); // nested also cloned
  });

  it("clones arrays", () => {
    const arr = [1, { a: 2 }];
    const cloned = deepClone(arr);

    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
    expect(cloned[1]).not.toBe(arr[1]);
  });
});

describe("mergeObjects", () => {
  it("merges nested objects", () => {
    const obj1 = { a: 1, nested: { x: 1 } };
    const obj2 = { b: 2, nested: { y: 2 } };
    const merged = mergeObjects(obj1, obj2);

    expect(merged).toEqual({ a: 1, b: 2, nested: { x: 1, y: 2 } });
  });

  it("overwrites arrays and primitives", () => {
    const obj1 = { arr: [1, 2], num: 5 };
    const obj2 = { arr: [3], num: 10 };
    const merged = mergeObjects(obj1, obj2);

    expect(merged.arr).toEqual([3]);
    expect(merged.num).toBe(10);
  });
});
