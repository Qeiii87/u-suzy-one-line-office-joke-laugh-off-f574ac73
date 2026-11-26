// One-Line Office Joke Laugh-Off — make.fun bounty entry.
// Writes one original one-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not whitespace-only, a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked IT for a second monitor. They gave me a mirror and said, \"Now you can watch yourself work twice as hard.\"";

const line = JOKE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (/\n/.test(line)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
