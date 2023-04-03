# Visual Studio Code Extensions

**Table of Contents:**

* [Links](#links)
* [Commands](#commands)
* [Installation](#installation)

## Links

* [Extension Anatomy](https://code.visualstudio.com/api/get-started/extension-anatomy)
* [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
* [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
* [UX Guidelines](https://code.visualstudio.com/api/ux-guidelines/overview)
* [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)

## Commands

```bash
# setup for developing
npm install -g yo generator-code

# create new project
yo code

# setup for publishing
npm install -g @vscode/vsce

# generate *.vsix package
vsce package

# publish extension
vsce publish

# further help
vsce --help
```

## Installation

Run command "Extensions: Install from VSIX..." in Visual Studio Code.
