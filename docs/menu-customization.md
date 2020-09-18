---
id: menu-customization
title: Menu Customization
slug: '/'
---

There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control of the customization.

## Default bindings

See [KEYBINDINGS.md](https://github.com/VSpaceCode/VSpaceCode/blob/gh-pages/KEYBINDINGS.md) for default bindings.

> The default menu bindings are subject to change before `1.0.0`. If you find something that you think it should bind to a particular key by default, or you want a particular command, please open an issue as a feature request.

## Incrementally

Using this option will allow to you surgically update the default bindings (`vspacecode.bindings`). The extension will override bindings sequentially base on `vspacecode.bindingOverrides`.

### Add/Replace

The following json will replace `<SPC> g s` in the same position if the binding exists in `vspacecode.bindings`, and append `s` to menu `<SPC> g` if it doesn't exists. This override will only execute if `<SPC> g` menu exists. An optional `position` key can be used to specified index of where the item should be inserted/moved to.

```jsonc
{
  "vspacecode.bindingOverrides": [
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
  "vspacecode.bindingOverrides": [
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

### Removal

Any negative number in position is denoting a removal operation.
In the following example, any item bound to `<SPC> g s` will be remove.

```jsonc
{
  "vspacecode.bindingOverrides": [
    {
      "keys": "g.s",
      "position": -1,
    }
  ]
}
```

## From Scratch

To customize the menu items from scratch, you can override the menu completely by putting your own `vspacecode.bindings` into your `settings.json`. Using this option will prevent any update to your own bindings.

An example of a `settings.json` file that overrides space menu is as follows:

```json
{
  "vspacecode.bindings": [
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

The default value can be found in the `contributes.configuration.vspacecode.bindings.default` section of the `package.json` in this repo. You can use the default value as an example to craft your own custom menu.
