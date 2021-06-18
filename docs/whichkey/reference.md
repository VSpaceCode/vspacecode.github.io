---
id: reference
title: Reference
---

Which-key extension aims to provide a keybinding popup similar to
[emacs-which-key](https://github.com/justbur/emacs-which-key)
by using the [QuickPick](https://code.visualstudio.com/api/references/vscode-api#QuickPick)
API from vscode.
This extension was broken out of [`VSpaceCode`](./../installation.md), which was created to emulate the keybinding of spacemacs in VSCode,
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
A command to register config which-key so a canonical record of the bindings lives in memory.

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

The which-key menu relies on QuickPick's input. Because it is a text input, we cannot capture non-character keys like arrow keys, tab key, and keys with
modifier like `C-x`. We can capture those keys using vscode shortcut with `whichkeyVisible` as `when` clause of the shortcut.
See [Extra](extra#use-non-character-keys) page for more details on usage.
:::

:::note

#### Pass-in when clause

Since vscode doesn't allow extension to read context key-value ([vscode#10471](https://github.com/microsoft/vscode/issues/10471)),
we will have to relied on `when` clause evaluation in vscode shortcut to pass the context to which-key.
See [conditional bindings](./extra.md#when) for more details on the usage.
:::

### Search Bindings

Command: `whichkey.searchBindings`

Description:
This is similar to [helm-descbinds](https://github.com/emacs-helm/helm-descbinds) which can search and execute the binding ([vscode-which-key#12](https://github.com/VSpaceCode/vscode-which-key/issues/12)).
Note that you can only search bindings menu for the currently displayed which-key bindings and their sub-bindings.

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
A command to show a which-key menu with key 1 to 9 to repeat the most recently executed command bindings.

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
This is a command to get around an issue where vscode doesn't provide a single cross platform command to open file.
See [vscode-which-key#26](https://github.com/VSpaceCode/vscode-which-key/issues/26).

## Context

The extension will also set the following context when applicable so it can be used in `when` clause of vscode shortcuts.

- `whichkeyActive` is a boolean that will be set to `true` when whichkey is active which
  includes the time during the command execution with the menu being hidden.
  This is rarely used and in most of the use cases it can be replaced with `whichKeyVisible`.

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
Setting this to positive value will just delay the display of the which-key menu items, while
key input remains functional.

### Show Icons

Key: `whichkey.showIcons`

Type: `boolean`

Default: `true`

Description:
Controls whether to show or hide icons in which-key menu.

### Sort Order

Key: `whichkey.sortOrder`

Type: `"none"` | `"alphabetically"` | `"nonNumberFirst"`

Default: `"none"`

Description:
Controls the sorting order of the which-key menu items.

- `"none"` will not sort the bindings.
- `"alphabetically"` will sort the bindings alphabetically using [`String.prototype.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).
- `"nonNumberFirst"` will sort the bindings alphabetically like `"alphabetically"` but have the bindings with number as key last.

### Which-key Default Bindings

Key: `whichkey.bindings`

Type: `Array<BindingItem>`

Description:
The configuration of the default which-key menu. This contains the array of [`BindingItem`](#bindingitem).

### Transient Bindings

Key: `whichkey.transient`

Type: `object`

Description:
A key-value pair to store default definitions of transient menu for command `whichkey.showTransient` to reference.

## Shortcuts

The whichkey extension contributes the following shortcuts, which means they will work without manually editing your user's `keybindings.json`.

`TAB` when `whichKeyVisible` will execute `whichkey.triggerKey` with `\t` as argument to which-key in order to capture of tab `TAB` key.

`C-h` when `whichKeyVisible` will execute `whichkey.describeBindings`, which will show the describe binding menu for the bindings
(and its sub bindings) which-key currently displayed.

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
- Transient type is similar to bindings type except the menu will not disappear on selection.
The transient type is being deprecated in favor of the separate command `whichkey.showTransient`.
All current definitions of transient type are converted internally at the moment.
- Conditional type is an experimental feature which provides conditional binding behavior. See [Extra](extra/#conditional-bindings-experimental)

### BindingItem

```ts
{
    key: string;
    name: string;
    icon?: string;
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
as a prefix in the menu item
- `type` specifies the type of this binding. see [`bindingtype`](#bindingtype)
- `bindings` is an optional property that is used with binding, transient and conditional type.
- `command` is an optional property used with command binding type.
- `commands` is an optional property used with commands binding type. An array of command string is expected.
- `args` is an optional property that is used to supply arguments to commands for `"command"` or `"commands"`.
When `"command"` is used, the `args` will be passed directly to the command being executed.
When `"commands"` is used, an array of the arguments is expected if argument passing is needed.
`null` can be used to indicate no arguments for a specific position if any subsequent command require an arg.

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
    exit?: boolean;
    command?: string;
    commands?: string[];
    args?: any;
}
```

- `key` is the key such as `k` ot `\t` to trigger the binding.
- `name` is the name of the binding such as `+buffer` or `start debug`.
as a prefix in the menu item
- `exit` is an optional boolean property. When it is set to `true`, the transient menu will exit on selection of this item.
- `command` is an optional property used with command binding type.
- `commands` is an optional property used with commands binding type. An array of command string is expected.
- `args` is an optional property that is used to supply arguments to commands for `"command"` or `"commands"`.
When `"command"` is used, the `args` will be passed directly to the command being executed.
When `"commands"` is used, an array of the arguments is expected if argument passing is needed.
`null` can be used to indicate no arguments for a specific position if any subsequent command require an arg.
