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
The input box of which-key menu for key input is not displayed some delay after the `<spc>` is pressed on a buffer. This is likly due to conflicting vim binding that starts with `<spc>`. For example, the vim binding of `[" ", "d"]` in the following `settings.json` example is causing the delay becuase vim is waiting for the second input  when `<spc>` is pressed.

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
You can remove the conflicting vim bindings from your `settings.json` completely, or use the VSpaceCode's [overrides](./menu-customization#addreplace) instead


## Known Issues

- File browser (bound to `<spc> f f`) doesn't have a button to open local file with VSCode Remote
- The easy motion jump bound to `<spc> j` menu doesn't work if leader key of VSCode Vim is customized and may require overrides.
