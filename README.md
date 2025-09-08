# @kissthebug/ts-utils

Tiny **TypeScript utility library** for strings and dates.  
Includes simple string converters (to lowercase / uppercase) and a lightweight date formatter.

---

## ✨ Features

- ✅ Written in **TypeScript** with full type definitions
- ✅ Supports **ESM** and **CommonJS**
- ✅ Tiny string utilities
- ✅ Customizable date formatting function
- ✅ Tested with **Vitest**

---

## 📦 Installation

```bash
npm install @kissthebug/ts-utils
# or
yarn add @kissthebug/ts-utils
# or
pnpm add @kissthebug/ts-utils
```

---

## 🚀 Usage

### String utilities

```ts
import { stringToLower, stringToUpper } from "@kissthebug/ts-utils";

console.log(stringToLower("HeLLo")); // "hello"
console.log(stringToUpper("HeLLo")); // "HELLO"
```

### Date utility

```ts
import { formatDate } from "@kissthebug/ts-utils";

// Default format
console.log(formatDate("2025-08-31"));
// -> "2025-08-31"

// Custom format
console.log(formatDate("2025-08-31T07:05:09Z", "MM/DD/YYYY HH:mm:ss"));
// -> "08/31/2025 07:05:09"
```

---

## 📚 API Reference

### `stringToLower(input: unknown): string`

Converts input to lowercase string.  
Returns `""` for `null` or `undefined`.

### `stringToUpper(input: unknown): string`

Converts input to uppercase string.  
Returns `""` for `null` or `undefined`.

### `formatDate(input: Date | string | number, format = "YYYY-MM-DD"): string`

Formats a date using simple tokens.  
Returns `""` if input is not a valid date.

**Supported tokens:**

- `YYYY` – 4-digit year
- `YY` – 2-digit year
- `MM` – zero-padded month (01–12)
- `M` – month (1–12)
- `DD` – zero-padded day (01–31)
- `D` – day (1–31)
- `HH` – zero-padded hours (00–23)
- `mm` – zero-padded minutes (00–59)
- `ss` – zero-padded seconds (00–59)

> ℹ️ This formatter is lightweight and does not handle locales/time zones beyond the native `Date`. For advanced needs, consider `date-fns` or `dayjs`.

### `deepClone<T>(value: T): T`

Creates a deep copy of the input value.  
Supports objects, arrays, `Date`, `RegExp`, `Map`, `Set`, and primitives.  
Returns a **new instance**, so modifying the clone does not affect the original.

```ts
const original = { a: 1, nested: { b: 2 } };
const copy = deepClone(original);
copy.nested.b = 3;
console.log(original.nested.b); // 2 (unchanged)
```

### `mergeObjects<T, U>(target: T, source: U): T & U`

Deeply merges two objects.

- For **objects** → merges properties recursively
- For **arrays/primitives** → values from `source` overwrite `target`

```ts
const a = { user: { name: "Alice" }, roles: ["user"] };
const b = { user: { age: 30 }, roles: ["admin"] };
const merged = mergeObjects(a, b);
// { user: { name: "Alice", age: 30 }, roles: ["admin"] }
```

### `unique<T>(arr: T[]): T[]`

Removes duplicate values from an array.  
Uses strict equality (`===`) for comparison.

```ts
unique([1, 2, 2, 3, 1]);
// [1, 2, 3]

unique(["a", "b", "a"]);
// ["a", "b"]
```

### `chunk<T>(arr: T[], size: number): T[][]`

Splits an array into chunks of the given size.  
If `size <= 0`, returns an empty array.

```ts
chunk([1, 2, 3, 4], 2);
// [[1, 2], [3, 4]]

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

---

## 🛠 Development

Clone repo and install deps:

```bash
git clone https://github.com/your-username/@kissthebug/ts-utils.git
cd @kissthebug/ts-utils
npm install
```

Build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

---

## 📜 License

[MIT](./LICENSE) © kissthebug
