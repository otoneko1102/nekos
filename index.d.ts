type HexChar =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";

type HexColor = `#${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}${HexChar}`;

type ColorKeyword = "RANDOM" | "RAINBOW";

type ColorValue = ColorKeyword | HexColor;

/**
 * An object of options for the nekos function.
 */
interface NekosOptions {
  /**
   * The ID (filename without .txt) of a specific ASCII art file to display.
   */
  id?: string;

  /**
   * A 6-digit hex color code, a keyword ("RANDOM", "RAINBOW"), or an array of these values for a gradient.
   */
  colors?: ColorValue | ColorValue[];
}

/**
 * Logs a cat ASCII art to the console.
 * @param options The options object.
 *
 * @example
 * import nekos from 'nekos';
 *
 * // Log a cat with a specific hex color
 * nekos({ colors: '#a4c8e1' });
 */
declare function nekos(options?: NekosOptions): void;

export default nekos;
