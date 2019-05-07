# My Eslint and Prettier Setup

## What this does

* Lints JavaScript based on latest standards
* Lints and Fixes React
* Fixes code formatting issues with Prettier

___
## Installation
This config can be used both globally and locally per project.

Global installation is useful so linting can happen on smaller JS projects as well.

___
## Local install

1. Run `npx install-peerdeps --dev @zhlyzv/eslint-config` to install dependencies
2. Create an `.eslintrc.js` file in the root of the project directory
3. Add the following to use the config from my package:
    ```js
    {
        'extends': [
            'zhlyzv'
        ]
    }
    ```

___
## Global install
1. Run `npx install-peerdeps --dev @zhlyzv/eslint-config` to install dependencies
2. Create a global `.eslintrc.js` file

    This should be located in:
    * `~/.eslintrc.js` for Linux/Mac
    * `C:\Users\username\.eslintrc.js` for Windows

3. Add the following to use the config from my package:
    ```js
    {
        'extends': [
            'zhlyzv'
        ]
    }
    ```

___
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
