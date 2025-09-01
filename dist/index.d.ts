type ColorKeyword = "RANDOM" | "RAINBOW";
type HexColor = `#${string}`;
type ColorValue = ColorKeyword | HexColor;
interface NekosOptions {
    id?: string;
    colors?: ColorValue | ColorValue[];
}
/**
 * Logs a cat ASCII art to the console.
 * @param {NekosOptions} [options={}] - The options object.
 */
declare function nekos(options?: NekosOptions): void;
export default nekos;
