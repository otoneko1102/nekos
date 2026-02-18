## nekos 🐱 (日本語)

[![npm version](https://badge.fury.io/js/nekos.svg)](https://badge.fury.io/js/nekos)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Validate AA Contribution](https://github.com/otoneko1102/nekos/actions/workflows/validate-aa.yml/badge.svg)](https://github.com/otoneko110/nekos/actions/workflows/validate-aa.yml)

<a href="https://www.buymeacoffee.com/devuloper" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

<a href='https://ko-fi.com/E1E41LY2C9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

[English](./README.md) | **日本語**

コンソールに猫のアスキーアートを表示する、シンプルな CLI ツールです。

![sample](img/sample.png)

## インストール

```bash
npm install nekos
```

## 使い方

```javascript
// ESM
import nekos from "nekos";
// CJS
const nekos = require("nekos").default;

// ランダムな猫を表示
nekos();

// IDを指定して特定の猫を表示
nekos({ id: "my_cat" });

// 虹色のグラデーションで猫を表示
nekos({ colors: "RAINBOW" });

// ランダムな単色で猫を表示
nekos({ colors: "RANDOM" });

// カスタムグラデーションで猫を表示
nekos({ colors: ["#ff00ff", "#00ffff"] });

// IDを指定した猫に、2色のランダムなグラデーションを適用
nekos({ id: "sad_cat", colors: ["RANDOM", "RANDOM"] });
```

[ESM Example - demo.js](test/demo.js)  
[CJS Example - demo.cjs](test/demo.cjs)

---

## コマンドラインでの使い方

コマンドラインで使うには、パッケージをグローバルインストールするか、`npx`を利用します。

```bash
# グローバルインストール
npm install -g nekos
```

### 実行例

```bash
# ランダムな猫を表示
nekos

# IDを指定して特定の猫を表示
nekos --id my_cat
nekos -i

# 虹色のグラデーションで猫を表示
nekos --colors RAINBOW
nekos -c RAINBOW

# 2色のランダムなグラデーションで猫を表示
nekos --colors RANDOM RANDOM
nekos -c RANDOM RANDOM

# IDを指定した猫にカスタムグラデーションを適用
nekos --id sad_cat --colors "#ff00ff" "#00ffff"
nekos -i sad_cat -c "#ff00ff" "#00ffff"

# グローバルインストールなしでnpxを使っても実行できます
npx nekos --colors "#ff00ff #00ffff"
npx nekos -c "#ff00ff" "#00ffff"

# 現在のバージョンを確認
nekos --version
nekos -v
```

---

## API

`nekos(options)`

### options

型: `object`

#### id

型: `string`

表示したいアスキーアートの ID（`.txt`を除いたファイル名）。指定しない場合は、ランダムな猫が表示されます。

#### colors

型: `string | string[]`

アスキーアートの色を指定します。

- **文字列キーワード:**
  - `'RANDOM'`: ランダムな単色を適用します。
  - `'RAINBOW'`: 虹色のグラデーションを適用します。
- **文字列配列:** カスタムグラデーションを作成するための色の配列（例: HEX コード、色名）。

## コントリビューション

コントリビューションを歓迎します！詳細は[コントリビューションガイドライン](CONTRIBUTING.md)をご覧ください。

# 貢献者

[![Contributors](https://contrib.rocks/image?repo=otoneko1102/nekos)](https://github.com/otoneko1102/nekos/graphs/contributors)
