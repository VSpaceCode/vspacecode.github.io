---
id: conventions
title: Conventions
---

Key bindings name adopts spacemacs/emacs convention. Here you can find the
corresponding terms in VSCode:

| Emacs  | VSCode       |
| ------ | ------------ |
| buffer | editor       |
| window | editor group |
| frame  | window       |

## Common Major Mode Key Bindings

The following formatting bindings should be offered in all major modes that uses language server protocol.

### Formatting

| Key Binding | Name                            | Command                                  |
| ----------- | ------------------------------- | ---------------------------------------- |
| `m = =`     | Format region or buffer         | `editor.action.format`                   |
| `m = b`     | Format buffer                   | `editor.action.formatDocument`           |
| `m = B`     | Format buffer with formatter    | `editor.action.formatDocument.multiple`  |
| `m = c`     | Format changes                  | `editor.action.formatChanges`            |
| `m = s`     | Format selection                | `editor.action.formatSelection`          |
| `m = S`     | Format selection with formatter | `editor.action.formatSelection.multiple` |

### Actions

| Key Binding | Name                    | Command                      |
| ----------- | ----------------------- | ---------------------------- |
| `m a a`     | Execute code action     | `editor.action.codeAction`   |
| `m a f`     | Execute fix action      | `editor.action.quickFix`     |
| `m a r`     | Execute refactor action | `editor.action.refactor`     |
| `m a s`     | Execute source action   | `editor.action.sourceAction` |

### Go to

| Key Binding | Name                      | Command                             |
| ----------- | ------------------------- | ----------------------------------- |
| `m g d`     | Go to definition          | `editor.action.revealDefinition`    |
| `m g h`     | Show call hierarchy       | `references-view.showCallHierarchy` |
| `m g i`     | Go to implementation      | `editor.action.goToImplementation`  |
| `m g r`     | Find references           | `references-view.findReferences`    |
| `m g s`     | Go to symbol in buffer    | `workbench.action.gotoSymbol`       |
| `m g t`     | Go to type definition     | `editor.action.goToTypeDefinition`  |
| `m g S`     | Go to symbol in workspace | `workbench.action.showAllSymbols`   |

### Peek

| Key Binding | Name                 | Command                                 |
| ----------- | -------------------- | --------------------------------------- |
| `m G d`     | Peek definition      | `editor.action.peekDefinition`          |
| `m G h`     | Peek call hierarchy  | `editor.showCallHierarchy`              |
| `m G i`     | Peek implementation  | `editor.action.peekImplementation`      |
| `m G r`     | Peek references      | `editor.action.referenceSearch.trigger` |
| `m G t`     | Peek type definition | `editor.action.peekTypeDefinition`      |
