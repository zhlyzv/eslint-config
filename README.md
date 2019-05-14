# My Eslint and Prettier Setup

## What this does

- Lints JavaScript based on latest standards
- Lints and Fixes React
- Fixes code formatting issues with Prettier

## Installation

This config can be used both globally and locally per project.

Global installation is useful so linting can happen on smaller JS projects as well.

## Local install

1. Run `npx install-peerdeps -D eslint-config-zhlyzv` to install dependencies
2. Create an `.eslintrc.js` file in the root of the project directory
3. Add the following:
   ```json
   {
     "extends": ["zhlyzv"]
   }
   ```

## Global install

1. Run `npx install-peerdeps -g eslint-config-zhlyzv` to install dependencies
2. Create a global `.eslintrc` file

   This should be located in:

   - `~/.eslintrc` for Linux/Mac
   - `%userprofile%\.eslintrc` for Windows

3. Add the following:
   ```json
   {
     "extends": ["zhlyzv"]
   }
   ```

## VS Code setup

Do this after completing the above setup.

1. Install the [ESlint package]('https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint') for VS Code
2. Set the following under `File` -> `Preferences` -> `Settings`

```json
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
"eslint.autoFixOnSave": true,
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```
