import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import gradient from "gradient-string";

/**
 * Generates a random HEX color code (e.g., #1a2b3c).
 * @returns {string} A random color code.
 */
function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777216).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aaDir = path.join(__dirname, "aa");

/**
 * Logs a cat ASCII art to the console.
 * @param {object} [options={}] - The options object.
 * @param {string|string[]} [options.colors] - A single color, a keyword ("RANDOM", "RAINBOW"), or an array of colors/keywords.
 * @param {string} [options.id] - The ID (filename without .txt) of a specific ASCII art file to display.
 */
function nekos(options = {}) {
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

    const filePath = path.join(aaDir, targetFile);
    catAscii = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Error reading ascii art file:", error);
    return;
  }

  if (colors) {
    let processedColors;
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
        processedColors = [getRandomHexColor()];
      } else {
        processedColors = [colors];
      }
    } else if (Array.isArray(colors)) {
      processedColors = colors.map((color) =>
        typeof color === "string" && color.toUpperCase() === "RANDOM"
          ? getRandomHexColor()
          : color
      );
    } else {
      processedColors = colors;
    }

    if (Array.isArray(processedColors) && processedColors.length === 1) {
      processedColors.push(processedColors[0]);
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
