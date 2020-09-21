---
id: troubleshooting
title: Troubleshooting
---

## Error "␣ is undefined" when pressing SPC SPC

When pressing `SPC SPC` quickly on macOS, which-key doesn't recognize the second `SPC` somtimes, and the error "␣ is undefined" is displayed on the status bar.

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

## Known Issues:
- File browser (bound to `<spc> f f`) doesn't have a button to open local file with VSCode Remote
- The easy motion jump bound to `<spc> j` menu doesn't work if leader key of VSCode Vim is customized and may require overrides.
