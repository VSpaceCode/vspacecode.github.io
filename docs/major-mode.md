---
id: major-mode
title: Major Mode
---

In the Visual Studio Code status bar, on the right, you can find the currently active language mode:

![major mode position](/img/docs/major_mode.png)

In order to follow emacs terminology, we call it major mode.

You can access key bindings specific to the current major mode by pressing `<spc m>`.
For example, you can press `<spc> m x b` to make the text bold in a markdown buffer.

The vast majority of major mode specific key bindings will require the installation of additional extensions
in order to work properly.

The table below lists all the extensions required by each language in the major mode.

| Language | Extension Required                                                                                    |
| -------- | ----------------------------------------------------------------------------------------------------- |
| markdown | [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) |
