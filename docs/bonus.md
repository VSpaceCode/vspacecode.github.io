---
id: bonus
title: Bonus
---

This section contains additional config that might be helpful beyond the default bindings.

## Quick Window Navigation

To navigate all the windows including slide and bottom pane with `Ctrl-h/j/k/l`,
you can merge the following config system's key bindings to your `keybindings.json` file.

:::caution
This config might be in conflict with "Easy List Navigation" below.
:::

`keybindings.json`:

```json
[
	{
		"key": "ctrl+h",
		"command": "workbench.action.navigateLeft",
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible && !isInDiffEditor"
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
		"when": "!inQuickOpen && !suggestWidgetVisible && !parameterHintsVisible && !isInDiffEditor"
    },
    // Quick Navigation for diff view
    {
		"key": "ctrl+h",
		"command": "workbench.action.compareEditor.focusSecondarySide",
		"when": "isInDiffEditor && !isInDiffLeftEditor"
	},
	{
		"key": "ctrl+h",
		"command": "workbench.action.navigateLeft",
		"when": "isInDiffEditor && isInDiffLeftEditor"
	},
	{
		"key": "ctrl+l",
		"command": "workbench.action.compareEditor.focusPrimarySide",
		"when": "isInDiffEditor && isInDiffLeftEditor"
	},
	{
		"key": "ctrl+l",
		"command": "workbench.action.navigateRight",
		"when": "isInDiffEditor && !isInDiffLeftEditor"
	},
]
```

## Easy List Navigation

Although [VSCode Vim already bound](https://github.com/VSCodeVim/Vim/blob/v1.14.5/package.json#L124-L152)
these to `h/j/k/l`, however, they might not work in all lists like in the problem pane.
You can merge the following keybindings to `keybindings.json` to bind `ctrl+h/l/j/k` for those situations.

:::caution
This config might be in conflict with "Quick Window Navigation" above.
:::

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

File browser, which is bound to `<spc> f f` by default, binds `ctrl+a` to open an action menu;
however, `ctrl+a` can be used move the text cursor to the front.
Your can merge the following example keybindings to `keybindings.json` to use `ctrl+o` instead of
`ctrl+a` in the file browser to open an action menu.

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

## Execute key combination or vim command

You can execute a vim command (e.g. `:noh`) or a key combination (e.g. `y y`) from the which-key menu by using the `vim.remap` command from [VSCodeVim](https://github.com/VSCodeVim/Vim).
The argument of `vim.remap` is specified by the `"args"` field.

### Execute vim key combination

If the `"args"` field contains the `after` key, the vim key combination specified in the value will be executed.

The following example json overrides `<spc> y` to execute vim keys of `y y`.

```json
"vspacecode.bindingOverrides": [
    {
        "keys": ["y"],
        "name": "yank",
        "type": "command",
        "command": "vim.remap",
        "args": {
            "after": ["y", "y"]
        }
    }
]
```

### Execute vim command

If the `"args"` field contains the `commands` key, the vim and vscode commands specified in the array will be executed.

The following example json overrides `<spc> c` to execute the vim command `:noh` and the
vscode command `editor.action.codeAction` with `{ "kind": "refactor.extract" }` as argument.

```json
"vspacecode.bindingOverrides": [
    {
        "keys": ["c"],
        "name": "Custom cmd",
        "type": "command",
        "command": "vim.remap",
        "args": {
            "commands":[
                { "command": ":noh" },
                {
                    "command": "editor.action.codeAction",
                    "args": { "kind": "refactor.extract" }
                }
            ]
        }
    }
]
```

## Colorize pair brackets

VScode 1.60 added built-in support for colorizing pair brackets.
See [High Performance Bracket Pair Colorization](https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization).

> ![Side by side comparison with bracket pair colorization on and off](https://code.visualstudio.com/assets/updates/1_60/bracket-pair-colorization-on-off.drawio.png)
> Bracket pair colorization can be enabled by setting `"editor.bracketPairColorization.enabled": true`.
> All colors are themeable and up to six colors can be configured.

## Use non-character keys

See in [Which Key](./whichkey/extra#use-non-character-keys)

## Display menu with a delay

See in [Which Key](./whichkey/extra#display-menu-with-a-delay)

## Style the menu with Customize UI

See in [Which Key](./whichkey/extra#style-the-menu-with-customize-ui)
