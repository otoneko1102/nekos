type SingleColorKeyword = "RAINBOW";
type ColorKeyword = "RANDOM";
type HexColor = `#${string}`;
type ColorValue = ColorKeyword | HexColor;
interface NekosOptions {
    id?: string;
    colors?: SingleColorKeyword | ColorValue | ColorValue[];
}
/**
 * Logs a cat ASCII art to the console.
 * @param {NekosOptions} [options={}] - The options object.
 */
declare function nekos(options?: NekosOptions): void;
export default nekos;
