#!/usr/bin/env node

import { program } from "commander";
import nekos from "../dist/index.js";

program
  .option(
    "-i, --id <id>",
    "Display a specific cat by its ID (filename without .txt)"
  )
  .option(
    "-c, --colors [colors...]",
    'Specify colors (e.g., RANDOM, RAINBOW, #ff00ff, "#ff0000 #00ff00")'
  );

program.parse(process.argv);

const options = program.opts();
const nekosOptions = {};

if (options.id) {
  nekosOptions.id = options.id;
}

if (options.colors) {
  const finalColors = options.colors.flatMap((colorString) =>
    colorString.split(" ")
  );

  if (finalColors.length === 1) {
    nekosOptions.colors = finalColors[0];
  } else {
    nekosOptions.colors = finalColors;
  }
}

nekos(nekosOptions);
