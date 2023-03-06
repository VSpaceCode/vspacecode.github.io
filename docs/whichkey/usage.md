---
id: usage
title: Usage
slug: '/whichkey'
---

The [Which Key extension](https://marketplace.visualstudio.com/items?itemName=VSpaceCode.whichkey) can be used by itself or be called by other extensions.

## Standalone

This extension comes with a default that didn't have any third-party dependencies.

### Setup: I am using VSCode Vim

If you want a better default behavior design for VSCode Vim, checkout [VSpaceCode](https://github.com/VSpaceCode/VSpaceCode).

Add the menu key as follows in `settings.json`. The following example is to let VSCode Vim to
capture the `space` key and trigger the action menu in normal mode and visual mode.

:::tip
To access `settings.json`, you can search `Setting` in the command list with `Ctl+Shift+P` or `Cmd+Shift+P` and select `Preference: Open Settings (JSON)`.
:::

:::caution
If you have existing config for `vim.normalModeKeyBindingsNonRecursive` or `vim.visualModeKeyBindingsNonRecursive`,
make sure you are adding to the array instead of replacing them.
:::

```jsonc
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>"],
    "commands": ["whichkey.show"]
  }
],
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>"],
    "commands": ["whichkey.show"]
  }
]
```

You can also bind a customize menu with Vim directly

```javascript
"vim.visualModeKeyBindingsNonRecursive": [
  {
    "before": ["<space>"],
    "commands": ["whichkey.show"],
  }
]
```

### Setup: I am *not* using VSCode Vim

Add the command as follows in `keybindings.json`. The following json is an example to bind `alt+space` to the action menu when a text editor is in focus.

:::tip
To access `keybindings.json`, you can search `Keyboard` in the command list with `Ctl+Shift+P` or `Cmd+Shift+P`
and select `Preference: Open Keyboard Shortcuts (JSON)`.
:::

```jsonc
{
  "key": "alt+space",
  "command": "whichkey.show",
  "when": "editorTextFocus"
},
```

### Menu Customization

There are two ways to customize the menu: incrementally, and from scratch.
Incrementally is great for when you only need to modify a few bindings from the default.
Customizing from scratch is great for total control and customization.

:::note
The default bindings are subject to change before `1.0.0`.
If you find something you think should be bound to a particular key by default
or you want a particular command, please open an issue as a feature request.
:::

#### Incrementally

Using this option will allow to you surgically update the default bindings (`whichkey.bindings`).
The extension will override bindings sequentially base on `whichkey.bindingOverrides`.

#### Add/Replace

The following json will replace `<SPC> g s` in the same position if the binding exists in `whichkey.bindings`,
and append `s` to menu `<SPC> g` if it doesn't exist. This override will only execute if `<SPC> g` menu exists.
An optional `position` key can be used to specify the index of where the item should be inserted/moved to.

```jsonc
{
  "whichkey.bindingOverrides": [
    {
      "keys": "g.s",
      "name": "Go to line",
      "type": "command",
      "command":"workbench.action.gotoLine",
    }
  ]
}
```

The following example will replace/append the whole `<SPC> g` menu with one binding `s` in it.

```jsonc
{
  "whichkey.bindingOverrides": [
    {
      "keys": "g",
      "name": "Go...",
      "type": "bindings",
      "bindings": [
        {
          "key": "s",
          "name": "Go to",
          "type": "command",
          "command": "workbench.action.gotoLine",
        }
      ]
    }
  ]
}
```

If the key binding's key uses character `.` like `<SPC> e .`, you can target that by using an array in the keys like `"keys": ["e", "."]`.

#### Removal

Any negative number in `position` denotes a removal operation. In the following example, any item bound to `<SPC> g s` will be removed.

```jsonc
{
  "whichkey.bindingOverrides": [
    {
      "keys": "g.s",
      "position": -1,
    }
  ]
}
```

#### From Scratch

To customize the menu items from scratch, you can override the menu completely by putting your own `whichkey.bindings` into your `settings.json`.
Using this option will prevent any update to your own bindings.

An example of a `settings.json` file that overrides the space menu is as follows:

```jsonc
{
  "whichkey.bindings": [
    {
      "key": "f",
      "name": "File...",
      "type": "bindings",
      "bindings": [
        {
          "key": "f",
          "name": "Open file",
          "type": "command",
          "command": "workbench.action.files.openFileFolder"
        },
        {
          "key": "i",
          "name": "Indentation...",
          "type": "bindings",
          "bindings": [
            {
              "key": "i",
              "name": "Change indentation",
              "type": "command",
              "command": "changeEditorIndentation"
            },
            {
              "key": "d",
              "name": "Detect indentation",
              "type": "command",
              "command": "editor.action.detectIndentation"
            }
          ]
        }
      ]
    }
  ]
}
```

The default value can be found in the `contributes.configuration.whichkey.bindings.default` section of the `package.json` in this repo.
You can use the default value as an example to craft your own custom menu.

### Multiple Menus

Only a single global menu is supported natively. 
However, it is possible to simulate several menus by executing a `whichkey.triggerKey` command right after `whichkey.show` to select a submenu. 
Here's an example submenu keybinding using [ryuta46.multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command) extension:

```json
{
    "key": "alt+s",
    "command": "extension.multiCommand.execute",
    "args": { 
        "sequence": [
            "whichkey.show",
            { "command": "whichkey.triggerKey", "args": "s" },
        ]
    }
}
```

## With extension

If you are writing an extension and want to have which key functionality, you can bundle it with the extension pack feature of vscode.
There are two modes of operation.

To bundle `which-key` to your extension, you can add `VSpaceCode.whichkey` to the `extensionDependencies` of your `package.json`.
This will install `which-key` upon installation of your extension and make sure `which-key` is activated before your extension.

### Read from config

This mode will let `which-key` mange the reading of the config from the user's `settings.json`.
`which-key` will load the specified config portion and update when the config is updated.
This is suitable for a large menu that might take a bit of time to load.

1. Register to the location of the config

    The following code will tell `which-key` about the bindings living in `myExtension.bindings`,
    which have an optional override config in `myExtension.bindingOverrides`, and have a title of `My Menu`.
    Note that overrides and title are optional.

    ```javascript
    commands.executeCommand("whichkey.register", {
      bindings: ["myExtension", "bindings"],
      overrides: ["myExtension", "bindingOveArrides"],
      title: "My menu"
    });
    ```

2. Launch the menu

    Once you registered the config location, the menu will be loaded, so the launch of the menu can be as quick as possible.
    The following code is an example that launches a registered menu.

    ```javascript
    commands.executeCommand("whichkey.show", "myExtension.bindings");
    ```

### Show directly

This is a simpler operating mode.
In your extension, you can pass a `BindingItem` array when calling `whichkey.show`.
However, this might not suitable for large bindings because of the load time.

```javascript
commands.executeCommand("whichkey.show", [
  {
    "key": "f",
    "name": "File...",
    "type": "bindings",
    "bindings": [
      {
        "key": "f",
        "name": "Open file",
        "type": "command",
        "command": "workbench.action.files.openFileFolder"
      },
      {
        "key": "i",
        "name": "Indentation...",
        "type": "bindings",
        "bindings": [
          {
            "key": "i",
            "name": "Change indentation",
            "type": "command",
            "command": "changeEditorIndentation"
          },
          {
            "key": "d",
            "name": "Detect indentation",
            "type": "command",
            "command": "editor.action.detectIndentation"
          }
        ]
      }
    ]
  }
]);
```
