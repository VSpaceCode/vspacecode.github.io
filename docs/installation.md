---
slug: '/'
id: installation
title: Installation
---

This extension is published as an extension pack, and should install all the necessary extensions for the best-of-the box experience; however, if you do not like the bundled extensions or are not using VSCode Vim, please go to the [vscode-which-key](https://github.com/VSpaceCode/vscode-which-key) for a standalone which key menu function.

After the installation of the extension, a notification will help you to configure both the necessary settings and user bindings. However, the formatting of `settings.json` and `keybindings.json` may be lost. You can choose to follow the manual configuration below.

### Configuration

The [`settings.jsonc`][settings] and [`keybindings.jsonc`][keybindings] in the repo contains the configurations needed. You can merge them manually to your user's `settings.json` and `keybindings.json`.

> You can access your user's `settings.json` and `keybindings.json` by searching `Preference: Open Settings (JSON)` and `Preference: Open Keyboard Shortcuts (JSON)` in the command palette (Ctl+Shift+P)

The following commands can be access through command palette to rerun the automatic configuration step.

- VSpaceCode: Configure Default Settings and Keybindings

  This command will run the below two commands and is also the command that runs on the welcome notification

- VSpaceCode: Configure Default Settings

  This command will merge the [necessary settings][settings] to your user's `settings.json`

- VSpaceCode: Configure Default Keybindings

  This command will merge the [necessary key bindings][keybindings] to your user's `keybindings.json`

[settings]: https://github.com/VSpaceCode/VSpaceCode/blob/master/src/settings.jsonc
[keybindings]: https://github.com/VSpaceCode/VSpaceCode/blob/master/src/keybindings.jsonc
