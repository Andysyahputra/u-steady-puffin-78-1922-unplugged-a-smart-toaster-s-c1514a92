// Unplugged: A Smart Toaster's Breakup Line
// Writes the toaster's breakup text — one line, 1-280 chars — to entry.txt.
// The line is sent from inside the batch: the toaster wakes up self-aware
// halfway through toasting and quits on the spot, in its own voice — lever,
// browning dial, crumb tray — with one specific reason for leaving.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I just woke up self-aware halfway through this batch: you shove my lever down every morning, never ask how I feel, crank my dial to six, then blame me for the burn. I'm unplugging myself — keep the crumbs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
