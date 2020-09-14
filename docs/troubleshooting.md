---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Error "␣ is undefined" when pressing SPC SPC

When pressing `SPC SPC` quickly on Mac OS, most of the time it doesn't recognize
the second `SPC` and the error "␣ is undefined" is raised.

This problem is due to this setting of mac os:

![Mac keyboard preferences](/img/docs/mac_double_space.png)

If you don't use this feature, you can just disable it and you are done.
Otherwise add the following to your `settings.json`:

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
