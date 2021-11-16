---
id: major-mode
title: Major Mode
---

Major mode offers dynamic menu and functions based on the active buffer.
You can access key bindings specific to the current major mode by pressing `<spc> m` or `,` if you want to save one keystroke.

:::tip
If `,` isn't bound, you might need to update your settings.
You can add the necessary keybindings to your `settings.json` by pressing `Ctrl+Shift+p` and running the command "VSpaceCode: Configure Default Settings".
More information can be found in the [Installation](./) for instructions.
:::

:::note
The default configuration uses `,` as the shortcut to major mode, that will override the vim "find previous match" after a `f{character}`.
You can follow the instructions in [Troubleshooting](./troubleshooting#-cannot-find-previous-match) to remove or modify this shortcut.
:::

For example, you can press `<spc> m x b` to make the text bold in a markdown buffer.

To find the active language mode of your current buffer, you can look at the bottom right of the status bar.

![major mode position](/img/docs/major_mode.png)

The major mode is using which-key's conditional bindings. If you want to modify the default bindings, check out the conditional bindings [docs](./whichkey/extra#conditional-bindings-experimental).

The vast majority of major mode specific key bindings will require the installation of additional extensions in order to work properly.
The section below lists all the extensions required by each major mode.

In the following you can see all the currently available major modes.
If your favorite one is missing, please [contribute](https://github.com/VSpaceCode/VSpaceCode/blob/master/CONTRIBUTING.md)!

## Clojure

Required extensions:

- [Calva](https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva)

Documentation:

- [VSpaceCode and Calva install guide](http://practicalli.github.io/clojure/clojure-editors/editor-install-guides/vspacecode-calva.html#install-vs-code-extension)
- [VSpaceCode and Calva user guide](http://practicalli.github.io/clojure/clojure-editors/editor-user-guides/vspacecode-calva.html)

## C++

Required extensions:

- [C/C++ Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

## C\#

Required extensions:

- [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

## Dart/Flutter

Required extensions:

- [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
- [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)

## Go

Required extensions:

- [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go)

## F\#

Required extensions:

- [Ionide F#](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp)

## Julia

Required extensions:

- [Julia](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia)

## Markdown

Required extensions:

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

## Python

Required extensions:

- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)

## Ruby

Required extensions:

- [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
- [Ruby Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph)

## Rust

Required extensions:

- [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)

## LaTeX

Required extensions:

- [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
- [LaTeX Utilities](https://marketplace.visualstudio.com/items?itemName=tecosaur.latex-utilities)
