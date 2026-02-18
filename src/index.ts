import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { consola } from "consola";
import { hex } from "@randplus/color";
import gradient from "gradient-string";

// Define types for clarity and safety
type SingleColorKeyword = "RAINBOW";
type ColorKeyword = "RANDOM";
type HexColor = `#${string}`;
type ColorValue = ColorKeyword | HexColor;

interface NekosOptions {
  id?: string;
  colors?: SingleColorKeyword | ColorValue | ColorValue[];
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aaDir = path.join(__dirname, "../aa");

/**
 * Logs a cat ASCII art to the console.
 * @param {NekosOptions} [options={}] - The options object.
 */
function nekos(options: NekosOptions = {}) {
  const { id } = options;
  let { colors } = options;
  let catAscii = "";

  try {
    const files = fs.readdirSync(aaDir);
    if (files.length === 0) {
      console.error("Error: 'aa' directory is empty or does not exist.");
      return;
    }

    let targetFile;

    if (id && files.includes(`${id}.txt`)) {
      targetFile = `${id}.txt`;
    } else {
      const randomIndex = Math.floor(Math.random() * files.length);
      targetFile = files[randomIndex];
    }

    const filePath = path.join(aaDir, targetFile as string);
    catAscii = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading ascii art file:", error);
    return;
  }

  if (colors) {
    let processedColors: (string | ColorKeyword)[];
    const rainbowColors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
    ];

    if (typeof colors === "string") {
      const upperCaseColor = colors.toUpperCase();
      if (upperCaseColor === "RAINBOW") {
        processedColors = rainbowColors;
      } else if (upperCaseColor === "RANDOM") {
        processedColors = [hex("#")];
      } else {
        processedColors = [colors];
      }
    } else if (Array.isArray(colors)) {
      if (colors.includes("RAINBOW" as ColorValue)) {
        consola.warn("Cannot use the value, 'RAINBOW' in array.");
      }
      processedColors = colors.map((color) =>
        typeof color === "string" && color.toUpperCase() === "RANDOM"
          ? hex("#")
          : color,
      );
    } else {
      processedColors = colors;
    }

    if (Array.isArray(processedColors) && processedColors.length === 1) {
      processedColors.push(processedColors[0] as string);
    }

    if (processedColors && processedColors.length > 0) {
      console.log(gradient(processedColors)(catAscii));
    } else {
      console.log(catAscii);
    }
  } else {
    console.log(catAscii);
  }
}

export default nekos;
