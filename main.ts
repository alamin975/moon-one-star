// The Moon Gets One Star — entry program.
// Writes exactly one funny one-star review of the Moon to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. Shows up late every night, stares through my window, and has never once paid rent.";

// writeEntry: writes the review to /output/entry.txt with explicit utf8 encoding.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`Wrote ${text.length} chars to /output/entry.txt`);
}

writeEntry(entry);
