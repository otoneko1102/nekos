# How to Contribute

**English** | [日本語](./CONTRIBUTING-ja.md)

We welcome contributions! If you want to add a new ASCII art, please follow these rules.

## Required Process

### Setup

```bash
npm install
```

### Test

```bash
npm run build
npm run test
```

## Adding New ASCII Art

You can add new cat ASCII art to the `aa/` directory. A pull request is required to add a file.

> [!Warning]  
> Do not send a pull request for ASCII art to `requests` or `dev` branch. Please send to `main` branch.

### Contribution Rules

Our system will automatically check your pull request to ensure it follows these rules:

1.  **Do not modify or delete** existing files in the `aa/` directory.
2.  The filename must be **unique** and end with the `.txt` extension.
3.  The filename (without the extension) can only contain **lowercase letters (a-z)**, **numbers (0-9)**, **underscores (_)**, and **hyphens (-)**.

Thank you for your contribution! 🐱
