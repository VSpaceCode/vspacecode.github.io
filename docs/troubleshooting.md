---
id: troubleshooting
title: Troubleshooting
---

## Error "␣ is undefined" when pressing SPC SPC

When pressing `SPC SPC` quickly on macOS, which-key doesn't recognize the second `SPC` sometimes, and the error "␣ is undefined" is displayed on the status bar.

This problem is due to a keyboard settings on macOS that add a period with double-space.

![Mac keyboard preferences](/img/docs/mac_double_space.png)

If you don't use this feature, disabling it should fix this issue. Otherwise, add the following overrides to your `settings.json` as a workaround:

```json
"vspacecode.bindingOverrides": [
    {
        "keys": ["."],
        "name": "Commands...",
        "type": "command",
        "command": "workbench.action.showCommands"
    }
],
```

## Unresponsive menu activation

If you press `<spc>` on a buffer and the which-key menu doesn't appear immediately, you might have one of the following problems.

### Conflicting vim binding

If in your `settings.json` file you have a vim binding that starts with `<spc>`, vim will wait for the second input when `<spc>` is pressed.

Example:

```json
"vim.normalModeKeyBindingsNonRecursive": [
  {
    "before": [" ", "d"],
    "after": ["d", "d"]
  },
  {
    "before": ["<space>"],
    "commands": ["vspacecode.space"]
  }
]
```

In order to solve it, remove the conflicting vim bindings from your `settings.json` completely, or use the VSpaceCode's [overrides](./menu-customization#addreplace) instead.

### Virtual Machine or slow hardware

If you are working on limiting resources consider using [VSCode remote](https://code.visualstudio.com/docs/remote/remote-overview)

### Other conflicts

Try to remove all the extensions except the ones installed by VSpaceCode, and clean your `settings.json` and `keybindings.json` files in order to spot some weird conflicts.

## Known Issues

- File browser (bound to `<spc> f f`) doesn't have a button to open local file with VSCode Remote
