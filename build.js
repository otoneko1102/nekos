import esbuild from "esbuild";
import fs from "fs/promises";

const esmToCjsPlugin = {
  name: "esm-to-cjs-shim",
  setup(build) {
    build.onLoad({ filter: /index\.js$/ }, async (args) => {
      let contents = await fs.readFile(args.path, "utf8");

      // Use a Regular Expression for a more robust replacement that handles
      // different line endings (like \n on Mac/Linux vs \r\n on Windows).
      const esmDirnameLogicRegex =
        /const __filename = fileURLToPath\(import\.meta\.url\);(?:\r\n|\n|\r)\s*const __dirname = path\.dirname\(__filename\);/;
      contents = contents.replace(esmDirnameLogicRegex, "");

      return {
        contents: contents,
        loader: "js",
      };
    });
  },
};

// CommonJS (CJS) build configuration
esbuild
  .build({
    entryPoints: ["index.js"],
    outfile: "index.cjs",
    bundle: true,
    platform: "node",
    format: "cjs",
    plugins: [esmToCjsPlugin],
  })
  .then((result) => {
    // Check for warnings and log them, but don't fail the build for now
    if (result.warnings.length > 0) {
      console.warn("⚠️ Build finished with warnings:", result.warnings);
    }
    console.log("✅ CJS build successful!");
  })
  .catch((e) => {
    console.error("❌ CJS build failed:", e);
    process.exit(1);
  });
