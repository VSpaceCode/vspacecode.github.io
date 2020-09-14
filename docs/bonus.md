---
id: bonus
title: Bonus
sidebar_label: Bonus
---

This section contains additional config that might be helpful beyond the default bindings.

## Quick Window Navigation

To navigate all the windows including slide and bottom pane with `Ctrl-h/j/k/l`, you can merge the following config system's key bindings to your `keybindings.json` file.

> This config might be in conflict with "Easy List Navigation" below.

`keybindings.json`:

```json
[
	{
		"key": "ctrl+h",
		"command": "workbench.action.navigateLeft",
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"
	},
	{
		"key": "ctrl+j",
		"command": "workbench.action.navigateDown",
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"
	},
	{
		"key": "ctrl+k",
		"command": "workbench.action.navigateUp",
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"
	},
	{
		"key": "ctrl+l",
		"command": "workbench.action.navigateRight",
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible"
  }
]
```

## Easy List Navigation

Although [VSCode Vim already bound](https://github.com/VSCodeVim/Vim/blob/v1.14.5/package.json#L124-L152) these to `h/j/k/l`, however, they might not work in all lists like in the problem pane. You can merge the following keybindings to `keybindings.json` to bind `ctrl+h/l/j/k` for those situations.

> This config might be in conflict with "Quick Window Navigation" above.

`keybindings.json`

```json
[
    {
        "key": "ctrl+h",
        "command": "list.collapse",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+l",
        "command": "list.expand",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+j",
        "command": "list.focusDown",
        "when": "listFocus && !inputFocus"
    },
    {
        "key": "ctrl+k",
        "command": "list.focusUp",
        "when": "listFocus && !inputFocus"
    }
]
```

## Rebind action menu for file-browser

File browser, which is bound to `<spc> f f` by default, binds `ctrl+a` to open an action menu; however, `ctrl+a` can be used move the text cursor to the front. Your can merge the following example keybindings to `keybindings.json` to use `ctrl+o` instead of `ctrl+a` in the file browser to open an action menu.

`keybindings.json`:

```json
[
    {
        "key": "ctrl+a",
        "command": "-file-browser.actions",
        "when": "inFileBrowser"
    },
    {
        "key": "ctrl+o",
        "command": "file-browser.actions",
        "when": "inFileBrowser"
    }
]
```

## Use non-character keys

See in [vscode-which-key](https://github.com/VSpaceCode/vscode-which-key#use-non-character-keys)

## Display menu with a delay

See in [vscode-which-key](https://github.com/VSpaceCode/vscode-which-key#display-menu-with-a-delay)
