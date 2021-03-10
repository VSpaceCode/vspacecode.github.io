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

The following formatting bindings should be offered in all major modes, i.e. `<spc> m`:

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
