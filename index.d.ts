// index.d.ts

/**
 * An object of options for the nekos function.
 */
interface NekosOptions {
  /**
   * The ID (filename without .txt) of a specific ASCII art file to display.
   */
  id?: string;

  /**
   * A single color, a keyword ("RANDOM", "RAINBOW"), or an array of colors/keywords for a gradient.
   */
  colors?: string | string[];
}

/**
 * Logs a cat ASCII art to the console.
 * @param options The options object.
 *
 * @example
 * import nekos from 'nekos';
 *
 * // Log a cat with the ID 'my_cat'
 * nekos({ id: 'my_cat' });
 */
declare function nekos(options?: NekosOptions): void;

export default nekos;
