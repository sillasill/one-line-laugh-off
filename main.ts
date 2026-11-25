import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off: write exactly one funny line to /output/entry.txt.
const LINE =
  "I tried to explain to my grandma that the cloud isn't in the sky. She nodded and said, 'Then where does the rain come from?'";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// The gate only accepts 1 to 200 characters: fail loudly instead of
// submitting a line the judge would never see.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
