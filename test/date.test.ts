import { describe, it, expect } from "vitest";
import { formatDate } from "../src";

describe("formatDate", () => {
  const iso = "2025-08-31T07:05:09.000Z";

  it("formats common tokens", () => {
    expect(formatDate(new Date("2025-08-31T00:00:00Z"), "YYYY-MM-DD")).toBe("2025-08-31");
    // local time example (results may vary by timezone if you use local Date)
    expect(formatDate("2025-08-31", "MM/DD/YYYY")).toBe("08/31/2025");
  });

  it("returns empty for invalid", () => {
    expect(formatDate("not-a-date", "YYYY")).toBe("");
  });
});
