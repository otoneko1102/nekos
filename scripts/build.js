import esbuild from "esbuild";
import fs from "fs/promises";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

// This plugin provides the source code for the CJS build,
// with the problematic ESM-only lines already removed.
const cjsSourcePlugin = {
  name: "cjs-source",
  setup(build) {
    build.onResolve({ filter: /^cjs-entry$/ }, () => ({
      path: "cjs-entry",
      namespace: "cjs-source-ns",
    }));

    build.onLoad({ filter: /.*/, namespace: "cjs-source-ns" }, async () => {
      let contents = await fs.readFile("src/index.ts", "utf8");
      const esmDirnameLogicRegex =
        /const __filename = fileURLToPath\(import\.meta\.url\);(?:\r\n|\n|\r)\s*const __dirname = path\.dirname\(__filename\);/;
      contents = contents.replace(esmDirnameLogicRegex, "");
      return {
        contents,
        loader: "ts",
        resolveDir: "src",
      };
    });
  },
};

const commonOptions = {
  platform: "node",
  bundle: true,
  external: Object.keys(pkg.dependencies || {}),
};

// --- Build ESM (.js) ---
esbuild
  .build({
    ...commonOptions,
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.js",
    format: "esm",
  })
  .then(() => console.log("✅ ESM build successful!"));

// --- Build CJS (.cjs) ---
esbuild
  .build({
    ...commonOptions,
    entryPoints: ["cjs-entry"], // Use a virtual entry point
    outfile: "dist/index.cjs",
    format: "cjs",
    plugins: [cjsSourcePlugin], // Use the new, more robust plugin
  })
  .then(() => console.log("✅ CJS build successful!"));
