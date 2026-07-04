// In-memory sliding-window rate limiter, keyed by client IP.
// Resets on cold start / new serverless instance — good enough to stop naive
// spam scripts at current traffic, not a substitute for an edge-level WAF if
// this ever becomes a real target.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestLog = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}
