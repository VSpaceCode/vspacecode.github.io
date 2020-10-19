---
id: major-mode
title: Major Mode
---

Major mode offers dynamic menu and functions based on the active buffer. You can access key bindings specific to the current major mode by pressing `<spc> m` or `,` if you want to save one keystroke.

For example, you can press `<spc> m x b` to make the text bold in a markdown buffer.

To find the active language mode of your current buffer, you can look at the bottom right of the status bar.

![major mode position](/img/docs/major_mode.png)

The major mode is using which-key's conditional bindings. If you want to modify the default bindings, check out the conditional bindings [docs](./extra#conditional-bindings-experimental).

The vast majority of major mode specific key bindings will require the installation of additional extensions in order to work properly. The section below lists all the extensions required by each major mode.

In the following you can see all the currently available major modes.
If your favorite one is missing, please [contribute](https://github.com/VSpaceCode/VSpaceCode/blob/master/CONTRIBUTING.md)!

## Markdown

Required extensions:
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
