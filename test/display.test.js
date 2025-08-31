import {
  jest,
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
} from "@jest/globals";
import nekos from "../index.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aaDir = path.resolve(__dirname, "../aa");

let consoleSpy;
beforeEach(() => {
  consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
});
afterEach(() => {
  consoleSpy.mockRestore();
});

describe("Tests for the nekos function", () => {
  test("should log a random ASCII art when called with no options", () => {
    nekos();
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output.length).toBeGreaterThan(0);
  });

  test("should log the specific ASCII art for id: 'first_cat'", () => {
    const expectedArt = fs.readFileSync(
      path.join(aaDir, "first_cat.txt"),
      "utf-8"
    );
    nekos({ id: "first_cat" });
    expect(consoleSpy).toHaveBeenCalledWith(expectedArt);
  });

  test("should log a colored output when colors are provided", () => {
    const plainArt = fs.readFileSync(
      path.join(aaDir, "first_cat.txt"),
      "utf-8"
    );
    nekos({ id: "first_cat", colors: ["blue", "pink"] });
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).not.toBe(plainArt);
    expect(output).toContain("\u001b");
  });

  test('should apply a single random color when colors is "RANDOM"', () => {
    nekos({ colors: "RANDOM" });
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toContain("\u001b");
  });

  test('should apply a rainbow gradient when colors is "RAINBOW"', () => {
    nekos({ colors: "RAINBOW" });
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toContain("\u001b");
  });

  test('should apply random colors for "RANDOM" keywords in an array', () => {
    nekos({ colors: ["#FFFFFF", "RANDOM"] });
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output).toContain("\u001b");
  });

  test("should fall back to a random cat if a non-existent ID is provided", () => {
    nekos({ id: "non_existent_cat" });
    expect(consoleSpy).toHaveBeenCalled();
    const output = consoleSpy.mock.calls[0][0];
    expect(output.length).toBeGreaterThan(0);
  });
});
