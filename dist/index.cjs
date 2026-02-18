var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// cjs-source-ns:cjs-entry
var cjs_entry_exports = {};
__export(cjs_entry_exports, {
  default: () => cjs_entry_default
});
module.exports = __toCommonJS(cjs_entry_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_consola = require("consola");
var import_color = require("@randplus/color");
var import_gradient_string = __toESM(require("gradient-string"));
var aaDir = import_path.default.join(__dirname, "../aa");
function nekos(options = {}) {
  const { id } = options;
  let { colors } = options;
  let catAscii = "";
  try {
    const files = import_fs.default.readdirSync(aaDir);
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
    const filePath = import_path.default.join(aaDir, targetFile);
    catAscii = import_fs.default.readFileSync(filePath, "utf-8");
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
      "violet"
    ];
    if (typeof colors === "string") {
      const upperCaseColor = colors.toUpperCase();
      if (upperCaseColor === "RAINBOW") {
        processedColors = rainbowColors;
      } else if (upperCaseColor === "RANDOM") {
        processedColors = [(0, import_color.hex)("#")];
      } else {
        processedColors = [colors];
      }
    } else if (Array.isArray(colors)) {
      if (colors.includes("RAINBOW")) {
        import_consola.consola.warn("Cannot use the value, 'RAINBOW' in array.");
      }
      processedColors = colors.map(
        (color) => typeof color === "string" && color.toUpperCase() === "RANDOM" ? (0, import_color.hex)("#") : color
      );
    } else {
      processedColors = colors;
    }
    if (Array.isArray(processedColors) && processedColors.length === 1) {
      processedColors.push(processedColors[0]);
    }
    if (processedColors && processedColors.length > 0) {
      console.log((0, import_gradient_string.default)(processedColors)(catAscii));
    } else {
      console.log(catAscii);
    }
  } else {
    console.log(catAscii);
  }
}
var cjs_entry_default = nekos;
