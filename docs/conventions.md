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



### Formatting in Major Mode
The following formatting bindings should be offered in a major mode `<spc> m`:

| Key Binding | Name                            | Command                                |
| ----------- | ------------------------------- | -------------------------------------- |
| `m = =`     | Format region or buffer         | `editor.action.format`                   |
| `m = b`     | Format buffer                   | `editor.action.formatDocument`           |
| `m = c`     | Format changes                  | `editor.action.formatChanges`            |
| `m = s`     | Format selection                | `editor.action.formatSelection`          |
| `m = B`     | Format buffer with formatter    | `editor.action.formatDocument.multiple`  |
| `m = S`     | Format selection with formatter | `editor.action.formatSelection.multiple` |