---
id: reference
title: Reference
---

The which-key extension aims to provide a keybinding popup similar to
[emacs-which-key](https://github.com/justbur/emacs-which-key)
by using the [QuickPick](https://code.visualstudio.com/api/references/vscode-api#QuickPick)
API from vscode.
This extension was born from [`VSpaceCode`](./../installation.md), which was created to emulate the keybinding of spacemacs in VSCode,
to decouple the core and the definition of the bindings.

## Commands

Commands are the main way to interact with which-key.

### Show

Command: `whichkey.show`

Args: `string`, `Array<BindingItem>`, `undefined`

Description:
A command to show which-key menu.

- `string` is the key of the [registered](#register) bindings that will be used to display a which-key menu.
- `Array<BindingItem>` is an array of [`BindingItem`](#bindingitem) that will be used directly to display a which-key menu.
- `undefined` means the default bindings defined at `whichkey.bindings` in the configuration will be used to display a which-key menu.

### Register

Command: `whichkey.register`

Args:

```ts
{
    bindings: string;
    overrides?: string;
    title?: string;
}
```

Description:
A command to register config which-key, so a canonical record of the bindings lives in memory.

- `bindings` is the configuration location of the bindings. e.g. `vspacecode.bindings`.
- `overrides` is the configuration location of the overrides. e.g. `vspacecode.overrides`.
- `title` is the title of the which-key menu to display on the top-level.

### Trigger Key

Command: `whichkey.triggerKey`

Args: `string`, `{ key: string, when?: string }`

Description:
A command used primarily for accepting non-characters key in which-key menu and pass in `when` clause via vscode shortcut.

:::note

#### Non-character key

The which-key menu relies on QuickPick's input. We cannot capture non-character keys like arrow keys, the tab key, and keys with
modifiers like `C-x`, because they are not text input. We can capture those keys using vscode shortcuts with `whichkeyVisible` in
the `when` clause of the shortcuts.
See [Extra](extra#use-non-character-keys) page for more details on usage.
:::

:::note

#### Pass-in when clause

Since vscode doesn't allow an extension to read context key-values ([vscode#10471](https://github.com/microsoft/vscode/issues/10471)),
we have to rely on the `when` clause evaluation in a vscode shortcut to pass the context to which-key.
See [conditional bindings](./extra.md#when) for more details on the usage.
:::

### Search Bindings

Command: `whichkey.searchBindings`

Description:
This is similar to [helm-descbinds](https://github.com/emacs-helm/helm-descbinds) which can search and execute the binding ([vscode-which-key#12](https://github.com/VSpaceCode/vscode-which-key/issues/12)).
Note that you can only search the bindings menu for the currently displayed which-key bindings and their sub-bindings.

### Show Transient

Command: `whichkey.showTransient`

Args: [`TransientMenuConfig`](#transientmenuconfig) | `string`

Description:
Show a transient menu with the definition in the argument.

- an object of [`TransientMenuConfig`](#transientmenuconfig)
- a `string` referencing the location of in the configuration to get `TransientMenuConfig`

### Repeat Recent

Command: `whichkey.repeatRecent`

Description:
A command to show a which-key menu with keys 1 to 9 to repeat the most recently executed command bindings.

### Recent Most Recent

Command: `whichkey.repeatMostRecent`

Description:
A command to repeat the command binding most recently executed on which-key.

### Toggle Zen Mode

Command: `whichkey.toggleZenMode`

Description:
A command to toggle zen mode for transient menu, which will show/hide all the menu items to save screen real estate.

### Open File

Command: `whichkey.openFile`

Description:
A command to get around an issue where vscode doesn't provide a single cross-platform command to open files.
See [vscode-which-key#26](https://github.com/VSpaceCode/vscode-which-key/issues/26).

## Context

The extension will also set the following context when applicable to be used in the `when` clause of vscode shortcuts.

- `whichkeyActive` is a boolean that will be set to `true` when whichkey is active which
  includes the time during the command execution with the menu being hidden.
  This is rarely used, and in most of the use cases, it can be replaced with `whichKeyVisible`.

- `whichkeyVisible` is a boolean that will be set to `true` when the whichkey menu is visible.
  Note that this will be `false` when the transient menu is visible.

- `transientVisible` is a boolean that will be set to `true` when the transient menu is visible.

## Config

The extension uses the following configurations.

### Delay

Key: `whichkey.delay`

Type: `number`

Default: `0`

Description:
Delay (in milliseconds) for the which-key menu items to be displayed.
Setting this to a positive value will only delay showing the which-key menu items while
key inputs remain functional.

### Show Icons

Key: `whichkey.showIcons`

Type: `boolean`

Default: `true`

Description:
This option controls whether to show or hide icons in the which-key menu.

### Sort Order

Key: `whichkey.sortOrder`

Type: `"none"` | `"custom"` | `"customNonNumberFirst"` | `"typeThenCustom"` | `"alphabetically"` | `"nonNumberFirst"`

Default: `"none"`

Description:
This option controls the sorting order of the which-key menu items.

- `"none"` will not sort the bindings.
- `"custom"` will sort menu items by the key in the following 'categories' then by a custom order within each 'category'.
  The category order:
  1. Single key (a, z, SPC, TAB, etc)
  2. Function key (f11, F11, etc)
  3. Modifier key (C-z, etc)
  4. Others

  For the non-function key, the sort order of each character of the key:
  1. SPC
  2. Non-printable characters
  3. DEL
  4. ASCII symbols
  5. Number
  6. a-z
  7. A-Z
  8. Non-ASCII

  For function key, bindings will be sorted by the numeric order (e.g. F1, F2, F11, 12).
- `"customNonNumberFirst"` will sort the menu items by bindings with non-number key first then by custom order.
- `"typeThenCustom"` will sort the menu items by the binding type first then by custom order.
- `"alphabetically"` will sort the menu items by the key in alphabetical order using [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).
- `"nonNumberFirst"` will sort menu items by bindings with non-number key first then by alphabetical order.

### Which-key Default Bindings

Key: `whichkey.bindings`

Type: `Array<BindingItem>`

Description:
This contains the default which-key menu and is an array of [`BindingItem`](#bindingitem).

### Transient Bindings

Key: `whichkey.transient`

Type: `object`

Description:
A key-value pair to store default definitions of the transient menu for the `whichkey.showTransient` command to reference.

## Shortcuts

The whichkey extension contributes the following shortcuts, which means they will work without manually editing your user's `keybindings.json`.

`TAB` when `whichKeyVisible` will execute `whichkey.triggerKey` with `\t` as argument to which-key in order to capture of tab `TAB` key.

`C-h` when `whichKeyVisible` will execute `whichkey.describeBindings`, which will show the describe binding menu for the bindings
(and its sub bindings) which-key currently displays.

## Types

### BindingType

```ts
{
    Command = "command",
    Commands = "commands",
    Bindings = "bindings",
    Transient = "transient",
    Conditional = "conditional"
}
```

- Command type indicates a single command will be executed on selection.
- Commands type indicates multiple commands will be executed on selection.
- Bindings type indicates that another sub-menu with the supplied bindings will be displayed upon menu item selection.
- Transient type is similar to the bindings type, except the menu will not disappear on selection.
The transient type is being deprecated in favor of the separate command `whichkey.showTransient`.
All current definitions of transient type are converted internally at the moment.
- Conditional type is an experimental feature that provides conditional binding behavior. See [Extra](extra/#conditional-bindings-experimental)

### DisplayOption

```ts
{
    Hidden = "hidden"
}
```

This type contains all the possible way to display a `BindingItem` or `TransientBindingItem`.

- Hidden type indicates the binding is not shown in the menu UI.

### BindingItem

```ts
{
    key: string;
    name: string;
    icon?: string;
    display?: DisplayOption;
    type: BindingType;
    bindings?: BindingItem[];
    command?: string;
    commands?: string[];
    args?: any;
}
```

- `key` is the key such as `k` ot `\t` to trigger the binding.
- `name` is the name of the binding such as `+buffer` or `start debug`.
- `icon` is an optional string property (e.g. `rocket`) used for the display of vscode [product icons](https://code.visualstudio.com/api/references/icons-in-labels)
- `display` is an optional `DisplayOption` that controls how the binding item is displayed.
as a prefix in the menu item
- `type` specifies the type of this binding. see [`bindingtype`](#bindingtype)
- `bindings` is an optional property that is used with binding transient and conditional types.
- `command` is an optional property used with command binding type.
- `commands` is an optional property used with commands binding type. An array of command strings is expected.
- `args` is an optional property that is used to supply arguments to commands for `"command"` or `"commands"`.
When `"command"` is used, the `args` will be passed directly to the command being executed.
When `"commands"` is used, an array of the arguments is expected if argument passing is needed.
`null` can be used to indicate no arguments for a specific position if any subsequent command requires an arg.

### TransientMenuConfig

```ts
{
    title?: string;
    bindings: Array<TransientBindingItem>
}
```

- `title` is an optional property for the title of the transient menu.
- `bindings` is the array of [`TransientBindingItem`](#transientbindingitem).

### TransientBindingItem

```ts
{
    key: string;
    name: string;
    icon?: string;
    display?: DisplayOption;
    exit?: boolean;
    command?: string;
    commands?: string[];
    args?: any;
}
```

- `key` is the key such as `k` ot `\t` to trigger the binding.
- `name` is the name of the binding such as `+buffer` or `start debug`.
as a prefix in the menu item
- `icon` is an optional string property (e.g. `rocket`) used for the display of vscode [product icons](https://code.visualstudio.com/api/references/icons-in-labels)
- `display` is an optional `DisplayOption` that control how the binding item should be displayed.
- `exit` is an optional boolean property. When it is set to `true`, the transient menu will exit on selection of this item.
- `command` is an optional property used with command binding type.
- `commands` is an optional property used with commands binding type. An array of command strings is expected.
- `args` is an optional property that is used to supply arguments to commands for `"command"` or `"commands"`.
When `"command"` is used, the `args` will be passed directly to the command being executed.
When `"commands"` is used, an array of the arguments is expected if argument passing is needed.
`null` can be used to indicate no arguments for a specific position if any subsequent command requires an arg.
