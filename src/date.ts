/**
 * Lightweight date formatter.
 *
 * Supported tokens:
 *  YYYY - 4-digit year
 *  YY   - 2-digit year
 *  MM   - zero-padded month (01-12)
 *  M    - month (1-12)
 *  DD   - zero-padded day (01-31)
 *  D    - day (1-31)
 *  HH   - zero-padded hours (00-23)
 *  mm   - zero-padded minutes (00-59)
 *  ss   - zero-padded seconds (00-59)
 *
 * Examples:
 *  formatDate('2025-08-31', 'MM/DD/YYYY') -> '08/31/2025'
 *  formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') -> '2025-08-31 13:05:09'
 */

function zeroPad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

/** Accepts Date | number (ms) | string (parseable by Date). Returns formatted string. */
export function formatDate(input: Date | number | string, format = "YYYY-MM-DD"): string {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";

  const Y = date.getFullYear();
  const M = date.getMonth() + 1;
  const D = date.getDate();
  const H = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const replacements: Record<string, string> = {
    YYYY: String(Y),
    YY: String(Y).slice(-2),
    MM: zeroPad(M),
    M: String(M),
    DD: zeroPad(D),
    D: String(D),
    HH: zeroPad(H),
    mm: zeroPad(m),
    ss: zeroPad(s),
  };

  // Replace tokens in the format string. Longer tokens first.
  return Object.keys(replacements)
    .sort((a, b) => b.length - a.length)
    .reduce((acc, token) => acc.replace(new RegExp(token, "g"), replacements[token]), format);
}
