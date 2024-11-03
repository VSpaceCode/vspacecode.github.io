---
id: default-keybindings
title: Default Keybindings
---

<!-- AUTO GENERATED. DO NOT MODIFY MANUALLY -->

# VSpaceCode

Key Binding: <code>␣</code>

Type: <code>bindings</code>

| Key Binding      | Name                             | Type                                    | Command(s)                                                                                                           |
| ---------------- | -------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <code>␣ ␣</code> | Commands                         | command                                 | `workbench.action.showCommands`                                                                                      |
| <code>␣ ↹</code> | Last buffer                      | commands                                | `workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup`<br />`list.select`                                     |
| <code>␣ !</code> | Show terminal                    | command                                 | `workbench.action.terminal.focus`                                                                                    |
| <code>␣ "</code> | Open new external terminal       | command                                 | `workbench.action.terminal.openNativeConsole`                                                                        |
| <code>␣ $</code> | Run Recent Command in Terminal   | command                                 | `workbench.action.terminal.runRecentCommand`                                                                         |
| <code>␣ '</code> | Show terminal                    | command                                 | `workbench.action.terminal.focus`                                                                                    |
| <code>␣ *</code> | Search in project with selection | commands                                | `editor.action.addSelectionToNextFindMatch`<br />`workbench.action.findInFiles`<br />`search.action.focusSearchList` |
| <code>␣ .</code> | Repeat most recent action        | command                                 | `whichkey.repeatMostRecent`                                                                                          |
| <code>␣ /</code> | Search in project                | command                                 | `workbench.action.findInFiles`                                                                                       |
| <code>␣ 0</code> | Focus on files explorer          | command                                 | `workbench.files.action.focusFilesExplorer`                                                                          |
| <code>␣ 1</code> | Focus 1st window                 | command                                 | `workbench.action.focusFirstEditorGroup`                                                                             |
| <code>␣ 2</code> | Focus 2nd window                 | command                                 | `workbench.action.focusSecondEditorGroup`                                                                            |
| <code>␣ 3</code> | Focus 3rd window                 | command                                 | `workbench.action.focusThirdEditorGroup`                                                                             |
| <code>␣ 4</code> | Focus 4th window                 | command                                 | `workbench.action.focusFourthEditorGroup`                                                                            |
| <code>␣ 5</code> | Focus 5th window                 | command                                 | `workbench.action.focusFifthEditorGroup`                                                                             |
| <code>␣ 6</code> | Focus 6th window                 | command                                 | `workbench.action.focusSixthEditorGroup`                                                                             |
| <code>␣ 7</code> | Focus 7th window                 | command                                 | `workbench.action.focusSeventhEditorGroup`                                                                           |
| <code>␣ 8</code> | Focus 8th window                 | command                                 | `workbench.action.focusEighthEditorGroup`                                                                            |
| <code>␣ ;</code> | Toggle comment                   | command                                 | `editor.action.commentLine`                                                                                          |
| <code>␣ ?</code> | Search keybindings               | command                                 | `whichkey.searchBindings`                                                                                            |
| <code>␣ v</code> | Smart select/expand region       | [transient](#smart-selectexpand-region) | `editor.action.smartSelect.grow`                                                                                     |
| <code>␣ :</code> | +Tasks                           | [bindings](#tasks)                      | N/A                                                                                                                  |
| <code>␣ b</code> | +Buffers                         | [bindings](#buffers)                    | N/A                                                                                                                  |
| <code>␣ c</code> | +Compile/Comments                | [bindings](#compilecomments)            | N/A                                                                                                                  |
| <code>␣ d</code> | +Debug                           | [bindings](#debug)                      | N/A                                                                                                                  |
| <code>␣ e</code> | +Errors                          | [bindings](#errors)                     | N/A                                                                                                                  |
| <code>␣ f</code> | +File                            | [bindings](#file)                       | N/A                                                                                                                  |
| <code>␣ g</code> | +Git                             | [bindings](#git)                        | N/A                                                                                                                  |
| <code>␣ h</code> | +Help                            | [bindings](#help)                       | N/A                                                                                                                  |
| <code>␣ i</code> | +Insert                          | [bindings](#insert)                     | N/A                                                                                                                  |
| <code>␣ j</code> | +Jump/Join/Split                 | [bindings](#jumpjoinsplit)              | N/A                                                                                                                  |
| <code>␣ l</code> | +Layouts                         | [bindings](#layouts)                    | N/A                                                                                                                  |
| <code>␣ m</code> | +Major                           | [conditional](#major)                   | N/A                                                                                                                  |
| <code>␣ p</code> | +Project                         | [bindings](#project)                    | N/A                                                                                                                  |
| <code>␣ q</code> | +Quit                            | [bindings](#quit)                       | N/A                                                                                                                  |
| <code>␣ r</code> | +Resume/Repeat                   | [bindings](#resumerepeat)               | N/A                                                                                                                  |
| <code>␣ s</code> | +Search/Symbol                   | [bindings](#searchsymbol)               | N/A                                                                                                                  |
| <code>␣ t</code> | +Toggles                         | [bindings](#toggles)                    | N/A                                                                                                                  |
| <code>␣ w</code> | +Window                          | [bindings](#window)                     | N/A                                                                                                                  |
| <code>␣ x</code> | +Text                            | [bindings](#text)                       | N/A                                                                                                                  |
| <code>␣ z</code> | +Zoom/Fold                       | [bindings](#zoomfold)                   | N/A                                                                                                                  |
| <code>␣ D</code> | +Diff/Compare                    | [bindings](#diffcompare)                | N/A                                                                                                                  |
| <code>␣ F</code> | +Frame                           | [bindings](#frame)                      | N/A                                                                                                                  |
| <code>␣ S</code> | +Show                            | [bindings](#show)                       | N/A                                                                                                                  |
| <code>␣ T</code> | +UI toggles                      | [bindings](#ui-toggles)                 | N/A                                                                                                                  |

# Smart select/expand region

Key Binding: <code>␣ v</code>

Type: <code>transient</code>

| Key Binding    | Name             | Type    | Command(s)                         |
| -------------- | ---------------- | ------- | ---------------------------------- |
| <code>v</code> | Grow selection   | command | `editor.action.smartSelect.grow`   |
| <code>V</code> | Shrink selection | command | `editor.action.smartSelect.shrink` |

# +Tasks

Key Binding: <code>␣ :</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type    | Command(s)                                   |
| ------------------ | --------------------- | ------- | -------------------------------------------- |
| <code>␣ : .</code> | Rerun last task       | command | `workbench.action.tasks.reRunTask`           |
| <code>␣ : :</code> | Run task              | command | `workbench.action.tasks.runTask`             |
| <code>␣ : b</code> | Run build tasks       | command | `workbench.action.tasks.build`               |
| <code>␣ : c</code> | Configure task runner | command | `workbench.action.tasks.configureTaskRunner` |
| <code>␣ : g</code> | Show running tasks    | command | `workbench.action.tasks.showTasks`           |
| <code>␣ : l</code> | Show task log         | command | `workbench.action.tasks.showLog`             |
| <code>␣ : t</code> | Run test task         | command | `workbench.action.tasks.test`                |
| <code>␣ : x</code> | Terminate task        | command | `workbench.action.tasks.terminate`           |
| <code>␣ : R</code> | Restart running task  | command | `workbench.action.tasks.restartTask`         |

# +Buffers

Key Binding: <code>␣ b</code>

Type: <code>bindings</code>

| Key Binding        | Name                              | Type                    | Command(s)                                                          |
| ------------------ | --------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| <code>␣ b 0</code> | Last buffer in window             | command                 | `workbench.action.lastEditorInGroup`                                |
| <code>␣ b 1</code> | First buffer in window            | command                 | `workbench.action.openEditorAtIndex1`                               |
| <code>␣ b 2</code> | 2nd buffer in window              | command                 | `workbench.action.openEditorAtIndex2`                               |
| <code>␣ b 3</code> | 3rd buffer in window              | command                 | `workbench.action.openEditorAtIndex3`                               |
| <code>␣ b 4</code> | 4th buffer in window              | command                 | `workbench.action.openEditorAtIndex4`                               |
| <code>␣ b 5</code> | 5th buffer in window              | command                 | `workbench.action.openEditorAtIndex5`                               |
| <code>␣ b 6</code> | 6th buffer in window              | command                 | `workbench.action.openEditorAtIndex6`                               |
| <code>␣ b 7</code> | 7th buffer in window              | command                 | `workbench.action.openEditorAtIndex7`                               |
| <code>␣ b 8</code> | 8th buffer in window              | command                 | `workbench.action.openEditorAtIndex8`                               |
| <code>␣ b 9</code> | 9th buffer in window              | command                 | `workbench.action.openEditorAtIndex9`                               |
| <code>␣ b b</code> | Show all buffers                  | command                 | `workbench.action.showAllEditorsByMostRecentlyUsed`                 |
| <code>␣ b d</code> | Close active buffer               | command                 | `workbench.action.closeActiveEditor`                                |
| <code>␣ b h</code> | Move buffer into left window      | command                 | `workbench.action.moveEditorToLeftGroup`                            |
| <code>␣ b j</code> | Move buffer into below window     | command                 | `workbench.action.moveEditorToBelowGroup`                           |
| <code>␣ b k</code> | Move buffer into above window     | command                 | `workbench.action.moveEditorToAboveGroup`                           |
| <code>␣ b l</code> | Move buffer into right window     | command                 | `workbench.action.moveEditorToRightGroup`                           |
| <code>␣ b n</code> | Next buffer                       | command                 | `workbench.action.nextEditor`                                       |
| <code>␣ b p</code> | Previous buffer                   | command                 | `workbench.action.previousEditor`                                   |
| <code>␣ b s</code> | Scratch buffer                    | command                 | `workbench.action.files.newUntitledFile`                            |
| <code>␣ b t</code> | Pin buffer                        | command                 | `workbench.action.pinEditor`                                        |
| <code>␣ b u</code> | Reopen closed buffer              | command                 | `workbench.action.reopenClosedEditor`                               |
| <code>␣ b B</code> | Show all buffers in active window | command                 | `workbench.action.showEditorsInActiveGroup`                         |
| <code>␣ b H</code> | Move buffer into left window      | command                 | `workbench.action.moveEditorToLeftGroup`                            |
| <code>␣ b J</code> | Move buffer into below window     | command                 | `workbench.action.moveEditorToBelowGroup`                           |
| <code>␣ b K</code> | Move buffer into above window     | command                 | `workbench.action.moveEditorToAboveGroup`                           |
| <code>␣ b L</code> | Move buffer into right window     | command                 | `workbench.action.moveEditorToRightGroup`                           |
| <code>␣ b M</code> | Close other buffers               | command                 | `workbench.action.closeOtherEditors`                                |
| <code>␣ b P</code> | Paste clipboard to buffer         | commands                | `editor.action.selectAll`<br />`editor.action.clipboardPasteAction` |
| <code>␣ b R</code> | Revert the current buffer         | command                 | `workbench.action.files.revert`                                     |
| <code>␣ b T</code> | Unpin buffer                      | command                 | `workbench.action.unpinEditor`                                      |
| <code>␣ b Y</code> | Copy buffer to clipboard          | command                 | `vspacecode.copyWholeBuffer`                                        |
| <code>␣ b N</code> | +New Buffer                       | [bindings](#new-buffer) | N/A                                                                 |

# +Compile/Comments

Key Binding: <code>␣ c</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type    | Command(s)                         |
| ------------------ | ------------------- | ------- | ---------------------------------- |
| <code>␣ c c</code> | Compile project     | command | `workbench.action.tasks.build`     |
| <code>␣ c l</code> | Toggle line comment | command | `editor.action.commentLine`        |
| <code>␣ c n</code> | Next error          | command | `editor.action.marker.nextInFiles` |
| <code>␣ c N</code> | Previous error      | command | `editor.action.marker.prevInFiles` |

# +Debug

Key Binding: <code>␣ d</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type                    | Command(s)                              |
| ------------------ | --------------------- | ----------------------- | --------------------------------------- |
| <code>␣ d c</code> | Continue debug        | command                 | `workbench.action.debug.continue`       |
| <code>␣ d d</code> | Start debug           | command                 | `workbench.action.debug.start`          |
| <code>␣ d i</code> | Step into             | command                 | `workbench.action.debug.stepInto`       |
| <code>␣ d j</code> | Jump to cursor        | command                 | `debug.jumpToCursor`                    |
| <code>␣ d o</code> | Step out              | command                 | `workbench.action.debug.stepOut`        |
| <code>␣ d p</code> | Pause debug           | command                 | `workbench.action.debug.pause`          |
| <code>␣ d s</code> | Step over             | command                 | `workbench.action.debug.stepOver`       |
| <code>␣ d v</code> | REPL                  | command                 | `workbench.debug.action.toggleRepl`     |
| <code>␣ d w</code> | Focus on watch window | command                 | `workbench.debug.action.focusWatchView` |
| <code>␣ d C</code> | Continue to cursor    | command                 | `editor.debug.action.runToCursor`       |
| <code>␣ d D</code> | Run without debugging | command                 | `workbench.action.debug.run`            |
| <code>␣ d R</code> | Restart debug         | command                 | `workbench.action.debug.restart`        |
| <code>␣ d S</code> | Stop debug            | command                 | `workbench.action.debug.stop`           |
| <code>␣ d W</code> | Add to watch          | command                 | `editor.debug.action.selectionToWatch`  |
| <code>␣ d b</code> | +Breakpoint           | [bindings](#breakpoint) | N/A                                     |

# +Errors

Key Binding: <code>␣ e</code>

Type: <code>bindings</code>

| Key Binding        | Name            | Type                          | Command(s)                         |
| ------------------ | --------------- | ----------------------------- | ---------------------------------- |
| <code>␣ e .</code> | Error transient | [transient](#error-transient) | N/A                                |
| <code>␣ e e</code> | Show error      | command                       | `editor.action.showHover`          |
| <code>␣ e f</code> | Fix error       | command                       | `editor.action.quickFix`           |
| <code>␣ e l</code> | List errors     | command                       | `workbench.actions.view.problems`  |
| <code>␣ e n</code> | Next error      | command                       | `editor.action.marker.nextInFiles` |
| <code>␣ e p</code> | Previous error  | command                       | `editor.action.marker.prevInFiles` |
| <code>␣ e N</code> | Previous error  | command                       | `editor.action.marker.prevInFiles` |

# +File

Key Binding: <code>␣ f</code>

Type: <code>bindings</code>

| Key Binding        | Name                                   | Type                                     | Command(s)                                                          |
| ------------------ | -------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| <code>␣ f f</code> | Open file/folder                       | command                                  | `file-browser.open`                                                 |
| <code>␣ f l</code> | Change file language                   | command                                  | `workbench.action.editor.changeLanguageMode`                        |
| <code>␣ f n</code> | New file                               | command                                  | `explorer.newFile`                                                  |
| <code>␣ f o</code> | +Open with                             | command                                  | `explorer.openWith`                                                 |
| <code>␣ f r</code> | +Open recent                           | command                                  | `workbench.action.openRecent`                                       |
| <code>␣ f s</code> | Save file                              | command                                  | `workbench.action.files.save`                                       |
| <code>␣ f t</code> | Toggle tree/explorer view              | [conditional](#toggle-treeexplorer-view) | N/A                                                                 |
| <code>␣ f w</code> | Open active in new window              | command                                  | `workbench.action.files.showOpenedFileInNewWindow`                  |
| <code>␣ f D</code> | Delete current file                    | commands                                 | `workbench.files.action.showActiveFileInExplorer`<br />`deleteFile` |
| <code>␣ f L</code> | Locate file                            | command                                  | `revealFileInOS`                                                    |
| <code>␣ f R</code> | Rename file                            | commands                                 | `revealInExplorer`<br />`renameFile`                                |
| <code>␣ f S</code> | Save all files                         | command                                  | `workbench.action.files.saveAll`                                    |
| <code>␣ f T</code> | Show active file in tree/explorer view | command                                  | `workbench.files.action.showActiveFileInExplorer`                   |
| <code>␣ f e</code> | +Emacs/VSpaceCode                      | [bindings](#emacsvspacecode)             | N/A                                                                 |
| <code>␣ f i</code> | +Indentation                           | [bindings](#indentation)                 | N/A                                                                 |
| <code>␣ f y</code> | +Yank                                  | [bindings](#yank)                        | N/A                                                                 |

# +Git

Key Binding: <code>␣ g</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type              | Command(s)           |
| ------------------ | --------------------- | ----------------- | -------------------- |
| <code>␣ g b</code> | Blame file            | command           | `magit.blame-file`   |
| <code>␣ g c</code> | Clone                 | command           | `git.clone`          |
| <code>␣ g i</code> | Initialize repository | command           | `git.init`           |
| <code>␣ g m</code> | Magit dispatch        | command           | `magit.dispatch`     |
| <code>␣ g s</code> | Status                | command           | `magit.status`       |
| <code>␣ g S</code> | Stage file            | command           | `magit.stage-file`   |
| <code>␣ g U</code> | Unstage file          | command           | `magit.unstage-file` |
| <code>␣ g f</code> | +File                 | [bindings](#file) | N/A                  |

# +Help

Key Binding: <code>␣ h</code>

Type: <code>bindings</code>

| Key Binding        | Name                          | Type    | Command(s)                                   |
| ------------------ | ----------------------------- | ------- | -------------------------------------------- |
| <code>␣ h d</code> | Open VSCode Documentation     | command | `workbench.action.openDocumentationUrl`      |
| <code>␣ h k</code> | Open global key bindings      | command | `workbench.action.openGlobalKeybindings`     |
| <code>␣ h D</code> | Open VSpaceCode Documentation | command | `vspacecode.openDocumentationUrl`            |
| <code>␣ h I</code> | Report VSCode Issue           | command | `workbench.action.openIssueReporter`         |
| <code>␣ h T</code> | Open VSCode Tutorial          | command | `workbench.action.showInteractivePlayground` |

# +Insert

Key Binding: <code>␣ i</code>

Type: <code>bindings</code>

| Key Binding        | Name              | Type    | Command(s)                       |
| ------------------ | ----------------- | ------- | -------------------------------- |
| <code>␣ i j</code> | Insert line below | command | `editor.action.insertLineAfter`  |
| <code>␣ i k</code> | Insert line above | command | `editor.action.insertLineBefore` |
| <code>␣ i s</code> | Insert snippet    | command | `editor.action.insertSnippet`    |

# +Jump/Join/Split

Key Binding: <code>␣ j</code>

Type: <code>bindings</code>

| Key Binding        | Name                      | Type    | Command(s)                               |
| ------------------ | ------------------------- | ------- | ---------------------------------------- |
| <code>␣ j +</code> | Format buffer             | command | `editor.action.formatDocument`           |
| <code>␣ j =</code> | Format region or buffer   | command | `editor.action.format`                   |
| <code>␣ j c</code> | Jump to previous change   | command | `workbench.action.editor.previousChange` |
| <code>␣ j i</code> | Jump to symbol in buffer  | command | `workbench.action.gotoSymbol`            |
| <code>␣ j j</code> | Jump to character         | command | `vim.remap`                              |
| <code>␣ j l</code> | Jump to line              | command | `vim.remap`                              |
| <code>␣ j n</code> | Split new line            | command | `lineBreakInsert`                        |
| <code>␣ j v</code> | Jump to outline/variables | command | `breadcrumbs.focusAndSelect`             |
| <code>␣ j w</code> | Jump to word              | command | `vim.remap`                              |
| <code>␣ j C</code> | Jump to next change       | command | `workbench.action.editor.nextChange`     |
| <code>␣ j I</code> | Jump to symbol in project | command | `workbench.action.showAllSymbols`        |

# +Layouts

Key Binding: <code>␣ l</code>

Type: <code>bindings</code>

| Key Binding        | Name            | Type    | Command(s)                     |
| ------------------ | --------------- | ------- | ------------------------------ |
| <code>␣ l d</code> | Close workspace | command | `workbench.action.closeFolder` |

# +Major

Key Binding: <code>␣ m</code>

Type: <code>conditional</code>

| Condition                            | Name         | Type                      | Command(s) |
| ------------------------------------ | ------------ | ------------------------- | ---------- |
| <code>languageId:agda</code>         | Agda         | [bindings](#agda)         | N/A        |
| <code>languageId:clojure</code>      | Clojure      | [bindings](#clojure)      | N/A        |
| <code>languageId:c</code>            | C            | [bindings](#c)            | N/A        |
| <code>languageId:coq</code>          | coq          | [bindings](#coq)          | N/A        |
| <code>languageId:cpp</code>          | C++          | [bindings](#c)            | N/A        |
| <code>languageId:csharp</code>       | C#           | [bindings](#c)            | N/A        |
| <code>languageId:dart</code>         | Dart/Flutter | [bindings](#dartflutter)  | N/A        |
| <code>languageId:elixir</code>       | Elixir       | [bindings](#elixir)       | N/A        |
| <code>languageId:fsharp</code>       | F#           | [bindings](#f)            | N/A        |
| <code>languageId:go</code>           | Go           | [bindings](#go)           | N/A        |
| <code>languageId:java</code>         | Java         | [bindings](#java)         | N/A        |
| <code>languageId:javascript</code>   | JavaScript   | [bindings](#javascript)   | N/A        |
| <code>languageId:julia</code>        | Julia        | [bindings](#julia)        | N/A        |
| <code>languageId:latex</code>        | LaTeX        | [bindings](#latex)        | N/A        |
| <code>languageId:markdown</code>     | Markdown     | [bindings](#markdown)     | N/A        |
| <code>languageId:objectpascal</code> | ObjectPascal | [bindings](#objectpascal) | N/A        |
| <code>languageId:php</code>          | PHP          | [bindings](#php)          | N/A        |
| <code>languageId:python</code>       | Python       | [bindings](#python)       | N/A        |
| <code>languageId:quarto</code>       | quarto       | [bindings](#quarto)       | N/A        |
| <code>languageId:r</code>            | R            | [bindings](#r)            | N/A        |
| <code>languageId:ruby</code>         | Ruby         | [bindings](#ruby)         | N/A        |
| <code>languageId:rust</code>         | Rust         | [bindings](#rust)         | N/A        |
| <code>languageId:typescript</code>   | TypeScript   | [bindings](#typescript)   | N/A        |
| <code>languageId:cuda-cpp</code>     | CUDA-C++     | [bindings](#cudac)        | N/A        |

# +Project

Key Binding: <code>␣ p</code>

Type: <code>bindings</code>

| Key Binding        | Name                    | Type    | Command(s)                        |
| ------------------ | ----------------------- | ------- | --------------------------------- |
| <code>␣ p c</code> | Compile project         | command | `workbench.action.tasks.build`    |
| <code>␣ p f</code> | +Find file in project   | command | `workbench.action.quickOpen`      |
| <code>␣ p l</code> | +Switch project         | command | `workbench.action.openRecent`     |
| <code>␣ p p</code> | +Switch project         | command | `workbench.action.openRecent`     |
| <code>␣ p t</code> | Show tree/explorer view | command | `workbench.view.explorer`         |
| <code>␣ p R</code> | +Replace in files       | command | `workbench.action.replaceInFiles` |
| <code>␣ p T</code> | Test project            | command | `workbench.action.tasks.test`     |

# +Quit

Key Binding: <code>␣ q</code>

Type: <code>bindings</code>

| Key Binding        | Name                                  | Type     | Command(s)                                                           |
| ------------------ | ------------------------------------- | -------- | -------------------------------------------------------------------- |
| <code>␣ q f</code> | Close frame                           | command  | `workbench.action.closeWindow`                                       |
| <code>␣ q q</code> | Close frame                           | command  | `workbench.action.closeWindow`                                       |
| <code>␣ q r</code> | Reload frame                          | command  | `workbench.action.reloadWindow`                                      |
| <code>␣ q s</code> | Save all and close frame              | commands | `workbench.action.files.saveAll`<br />`workbench.action.closeWindow` |
| <code>␣ q Q</code> | Quit application                      | command  | `workbench.action.quit`                                              |
| <code>␣ q R</code> | Reload frame with extensions disabled | command  | `workbench.action.reloadWindowWithExtensionsDisabled`                |

# +Resume/Repeat

Key Binding: <code>␣ r</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type    | Command(s)                                          |
| ------------------ | --------------------- | ------- | --------------------------------------------------- |
| <code>␣ r .</code> | Repeat recent actions | command | `whichkey.repeatRecent`                             |
| <code>␣ r b</code> | Recent buffers        | command | `workbench.action.showAllEditorsByMostRecentlyUsed` |
| <code>␣ r s</code> | Search in project     | command | `workbench.action.findInFiles`                      |

# +Search/Symbol

Key Binding: <code>␣ s</code>

Type: <code>bindings</code>

| Key Binding        | Name                                          | Type                           | Command(s)                                                                                          |
| ------------------ | --------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------- |
| <code>␣ s c</code> | Clear highlight                               | command                        | `vim.remap`                                                                                         |
| <code>␣ s e</code> | Edit symbol                                   | command                        | `editor.action.rename`                                                                              |
| <code>␣ s h</code> | Highlight symbol                              | [transient](#highlight-symbol) | `editor.action.wordHighlight.trigger`                                                               |
| <code>␣ s j</code> | Jump to symbol in buffer                      | command                        | `workbench.action.gotoSymbol`                                                                       |
| <code>␣ s p</code> | Search in project                             | command                        | `workbench.action.findInFiles`                                                                      |
| <code>␣ s r</code> | Search all references                         | command                        | `editor.action.referenceSearch.trigger`                                                             |
| <code>␣ s s</code> | Fuzzy search in current buffer                | command                        | `fuzzySearch.activeTextEditorWithCurrentSelection`                                                  |
| <code>␣ s J</code> | Jump to symbol in project                     | command                        | `workbench.action.showAllSymbols`                                                                   |
| <code>␣ s P</code> | Search in project with selection              | commands                       | `editor.action.addSelectionToNextFindMatch`<br />`workbench.action.findInFiles`                     |
| <code>␣ s R</code> | Search all references in side bar             | command                        | `references-view.find`                                                                              |
| <code>␣ s S</code> | Fuzzy search with selection in current buffer | commands                       | `editor.action.addSelectionToNextFindMatch`<br />`fuzzySearch.activeTextEditorWithCurrentSelection` |

# +Toggles

Key Binding: <code>␣ t</code>

Type: <code>bindings</code>

| Key Binding        | Name                       | Type    | Command(s)                             |
| ------------------ | -------------------------- | ------- | -------------------------------------- |
| <code>␣ t c</code> | Toggle find case sensitive | command | `toggleFindCaseSensitive`              |
| <code>␣ t l</code> | Toggle word wrap           | command | `editor.action.toggleWordWrap`         |
| <code>␣ t w</code> | Toggle render whitespace   | command | `editor.action.toggleRenderWhitespace` |

# +Window

Key Binding: <code>␣ w</code>

Type: <code>bindings</code>

| Key Binding        | Name                                  | Type                         | Command(s)                                    |
| ------------------ | ------------------------------------- | ---------------------------- | --------------------------------------------- |
| <code>␣ w -</code> | Split window below                    | command                      | `workbench.action.splitEditorDown`            |
| <code>␣ w /</code> | Split window right                    | command                      | `workbench.action.splitEditor`                |
| <code>␣ w 1</code> | Single column window layout           | command                      | `workbench.action.editorLayoutSingle`         |
| <code>␣ w 2</code> | Double column window layout           | command                      | `workbench.action.editorLayoutTwoColumns`     |
| <code>␣ w 3</code> | Triple column window layout           | command                      | `workbench.action.editorLayoutThreeColumns`   |
| <code>␣ w 4</code> | Grid window layout                    | command                      | `workbench.action.editorLayoutTwoByTwoGrid`   |
| <code>␣ w =</code> | Reset window sizes                    | command                      | `workbench.action.evenEditorWidths`           |
| <code>␣ w [</code> | Shrink window                         | [transient](#shrink-window)  | `workbench.action.decreaseViewSize`           |
| <code>␣ w ]</code> | Enlarge window                        | [transient](#enlarge-window) | `workbench.action.increaseViewSize`           |
| <code>␣ w d</code> | Close window                          | command                      | `workbench.action.closeEditorsInGroup`        |
| <code>␣ w h</code> | Focus window left                     | command                      | `workbench.action.navigateLeft`               |
| <code>␣ w j</code> | Focus window down                     | command                      | `workbench.action.navigateDown`               |
| <code>␣ w k</code> | Focus window up                       | command                      | `workbench.action.navigateUp`                 |
| <code>␣ w l</code> | Focus window right                    | command                      | `workbench.action.navigateRight`              |
| <code>␣ w m</code> | Maximize window                       | command                      | `workbench.action.toggleMaximizeEditorGroup`  |
| <code>␣ w o</code> | Switch frame                          | command                      | `workbench.action.quickSwitchWindow`          |
| <code>␣ w s</code> | Split window below                    | command                      | `workbench.action.splitEditorDown`            |
| <code>␣ w v</code> | Split window right                    | command                      | `workbench.action.splitEditor`                |
| <code>␣ w w</code> | Focus next window                     | command                      | `workbench.action.focusNextGroup`             |
| <code>␣ w x</code> | Close all windows                     | command                      | `workbench.action.closeAllGroups`             |
| <code>␣ w z</code> | Combine all buffers                   | command                      | `workbench.action.joinAllGroups`              |
| <code>␣ w D</code> | Close all other windows               | command                      | `workbench.action.closeEditorsInOtherGroups`  |
| <code>␣ w F</code> | Open new empty frame                  | command                      | `workbench.action.newWindow`                  |
| <code>␣ w H</code> | Move window left                      | command                      | `workbench.action.moveActiveEditorGroupLeft`  |
| <code>␣ w J</code> | Move window down                      | command                      | `workbench.action.moveActiveEditorGroupDown`  |
| <code>␣ w K</code> | Move window up                        | command                      | `workbench.action.moveActiveEditorGroupUp`    |
| <code>␣ w L</code> | Move window right                     | command                      | `workbench.action.moveActiveEditorGroupRight` |
| <code>␣ w M</code> | Maximize window without hiding others | command                      | `workbench.action.toggleEditorWidths`         |
| <code>␣ w W</code> | Focus previous window                 | command                      | `workbench.action.focusPreviousGroup`         |

# +Text

Key Binding: <code>␣ x</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type                          | Command(s)                              |
| ------------------ | ------------------- | ----------------------------- | --------------------------------------- |
| <code>␣ x .</code> | Quick fix           | command                       | `editor.action.quickFix`                |
| <code>␣ x a</code> | Find all references | command                       | `editor.action.referenceSearch.trigger` |
| <code>␣ x i</code> | Organize Imports    | command                       | `editor.action.organizeImports`         |
| <code>␣ x o</code> | Open link           | command                       | `editor.action.openLink`                |
| <code>␣ x r</code> | Rename symbol       | command                       | `editor.action.rename`                  |
| <code>␣ x u</code> | To lower case       | command                       | `editor.action.transformToLowercase`    |
| <code>␣ x J</code> | Move lines down     | [transient](#move-lines-down) | `editor.action.moveLinesDownAction`     |
| <code>␣ x K</code> | Move lines up       | [transient](#move-lines-up)   | `editor.action.moveLinesUpAction`       |
| <code>␣ x R</code> | Refactor            | command                       | `editor.action.refactor`                |
| <code>␣ x U</code> | To upper case       | command                       | `editor.action.transformToUppercase`    |
| <code>␣ x d</code> | +Delete             | [bindings](#delete)           | N/A                                     |
| <code>␣ x l</code> | +Lines              | [bindings](#lines)            | N/A                                     |
| <code>␣ x m</code> | +Merge conflict     | [bindings](#merge-conflict)   | N/A                                     |

# +Zoom/Fold

Key Binding: <code>␣ z</code>

Type: <code>bindings</code>

| Key Binding        | Name           | Type                        | Command(s) |
| ------------------ | -------------- | --------------------------- | ---------- |
| <code>␣ z f</code> | +Frame         | [transient](#frame)         | N/A        |
| <code>␣ z i</code> | +Image preview | [transient](#image-preview) | N/A        |
| <code>␣ z x</code> | +Font          | [transient](#font)          | N/A        |
| <code>␣ z .</code> | +Fold          | [bindings](#fold)           | N/A        |

# +Diff/Compare

Key Binding: <code>␣ D</code>

Type: <code>bindings</code>

| Key Binding        | Name                               | Type    | Command(s)                                    |
| ------------------ | ---------------------------------- | ------- | --------------------------------------------- |
| <code>␣ D c</code> | Compare active file with clipboard | command | `workbench.files.action.compareWithClipboard` |
| <code>␣ D m</code> | Compare current merge conflict     | command | `merge-conflict.compare`                      |
| <code>␣ D s</code> | Compare active file with saved     | command | `workbench.files.action.compareWithSaved`     |
| <code>␣ D w</code> | Toggle ignore trim whitespace      | command | `toggle.diff.ignoreTrimWhitespace`            |
| <code>␣ D D</code> | +Compare active file with          | command | `workbench.files.action.compareFileWith`      |

# +Frame

Key Binding: <code>␣ F</code>

Type: <code>bindings</code>

| Key Binding        | Name                             | Type    | Command(s)                                       |
| ------------------ | -------------------------------- | ------- | ------------------------------------------------ |
| <code>␣ F n</code> | Duplicate workspace in new frame | command | `workbench.action.duplicateWorkspaceInNewWindow` |
| <code>␣ F o</code> | Switch frame                     | command | `workbench.action.quickSwitchWindow`             |
| <code>␣ F N</code> | Open new empty frame             | command | `workbench.action.newWindow`                     |

# +Show

Key Binding: <code>␣ S</code>

Type: <code>bindings</code>

| Key Binding        | Name                 | Type    | Command(s)                             |
| ------------------ | -------------------- | ------- | -------------------------------------- |
| <code>␣ S d</code> | Show debug console   | command | `workbench.debug.action.toggleRepl`    |
| <code>␣ S e</code> | Show explorer        | command | `workbench.view.explorer`              |
| <code>␣ S g</code> | Show source control  | command | `workbench.view.scm`                   |
| <code>␣ S n</code> | Show notification    | command | `notifications.toggleList`             |
| <code>␣ S o</code> | Show output          | command | `workbench.action.output.toggleOutput` |
| <code>␣ S p</code> | Show problem         | command | `workbench.actions.view.problems`      |
| <code>␣ S r</code> | Show remote explorer | command | `workbench.view.remote`                |
| <code>␣ S s</code> | Show search          | command | `workbench.view.search`                |
| <code>␣ S t</code> | Show test            | command | `workbench.view.extension.test`        |
| <code>␣ S x</code> | Show extensions      | command | `workbench.view.extensions`            |

# +UI toggles

Key Binding: <code>␣ T</code>

Type: <code>bindings</code>

| Key Binding        | Name                                | Type    | Command(s)                                     |
| ------------------ | ----------------------------------- | ------- | ---------------------------------------------- |
| <code>␣ T b</code> | Toggle side bar visibility          | command | `workbench.action.toggleSidebarVisibility`     |
| <code>␣ T c</code> | Toggle centered layout              | command | `workbench.action.toggleCenteredLayout`        |
| <code>␣ T i</code> | Select icon theme                   | command | `workbench.action.selectIconTheme`             |
| <code>␣ T j</code> | Toggle panel visibility             | command | `workbench.action.togglePanel`                 |
| <code>␣ T m</code> | Toggle maximized panel              | command | `workbench.action.toggleMaximizedPanel`        |
| <code>␣ T s</code> | Select theme                        | command | `workbench.action.selectTheme`                 |
| <code>␣ T t</code> | Toggle tool/activity bar visibility | command | `workbench.action.toggleActivityBarVisibility` |
| <code>␣ T z</code> | Toggle zen mode                     | command | `workbench.action.toggleZenMode`               |
| <code>␣ T F</code> | Toggle full screen                  | command | `workbench.action.toggleFullScreen`            |
| <code>␣ T M</code> | Toggle minimap                      | command | `editor.action.toggleMinimap`                  |
| <code>␣ T T</code> | Toggle tab visibility               | command | `workbench.action.toggleTabsVisibility`        |

# +New Buffer

Key Binding: <code>␣ b N</code>

Type: <code>bindings</code>

| Key Binding          | Name                              | Type     | Command(s)                                                                                                                  |
| -------------------- | --------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| <code>␣ b N h</code> | New untitled buffer (split left)  | commands | `workbench.action.splitEditorLeft`<br />`workbench.action.files.newUntitledFile`<br />`workbench.action.closeOtherEditors`  |
| <code>␣ b N j</code> | New untitled buffer (split down)  | commands | `workbench.action.splitEditorDown`<br />`workbench.action.files.newUntitledFile`<br />`workbench.action.closeOtherEditors`  |
| <code>␣ b N k</code> | New untitled buffer (split up)    | commands | `workbench.action.splitEditorUp`<br />`workbench.action.files.newUntitledFile`<br />`workbench.action.closeOtherEditors`    |
| <code>␣ b N l</code> | New untitled buffer (split right) | commands | `workbench.action.splitEditorRight`<br />`workbench.action.files.newUntitledFile`<br />`workbench.action.closeOtherEditors` |
| <code>␣ b N n</code> | New untitled buffer               | command  | `workbench.action.files.newUntitledFile`                                                                                    |

# +Breakpoint

Key Binding: <code>␣ d b</code>

Type: <code>bindings</code>

| Key Binding          | Name                       | Type                              | Command(s)                                                   |
| -------------------- | -------------------------- | --------------------------------- | ------------------------------------------------------------ |
| <code>␣ d b b</code> | Toggle breakpoint          | command                           | `editor.debug.action.toggleBreakpoint`                       |
| <code>␣ d b c</code> | Add conditional breakpoint | command                           | `editor.debug.action.conditionalBreakpoint`                  |
| <code>␣ d b d</code> | Delete breakpoint          | command                           | `debug.removeBreakpoint`                                     |
| <code>␣ d b e</code> | Enable breakpoint          | command                           | `debug.enableOrDisableBreakpoint`                            |
| <code>␣ d b f</code> | Add function breakpoint    | command                           | `workbench.debug.viewlet.action.addFunctionBreakpointAction` |
| <code>␣ d b i</code> | Toggle inline breakpoint   | command                           | `editor.debug.action.toggleInlineBreakpoint`                 |
| <code>␣ d b n</code> | Next breakpoint            | [transient](#next-breakpoint)     | `editor.debug.action.goToNextBreakpoint`                     |
| <code>␣ d b p</code> | Previous breakpoint        | [transient](#previous-breakpoint) | `editor.debug.action.goToPreviousBreakpoint`                 |
| <code>␣ d b s</code> | Disable breakpoint         | command                           | `debug.enableOrDisableBreakpoint`                            |
| <code>␣ d b D</code> | Delete all breakpoints     | command                           | `workbench.debug.viewlet.action.removeAllBreakpoints`        |
| <code>␣ d b E</code> | Enable all breakpoints     | command                           | `workbench.debug.viewlet.action.enableAllBreakpoints`        |
| <code>␣ d b S</code> | Disable all breakpoints    | command                           | `workbench.debug.viewlet.action.disableAllBreakpoints`       |

# Error transient

Key Binding: <code>␣ e .</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    | Command(s)                         |
| -------------- | -------------- | ------- | ---------------------------------- |
| <code>f</code> | Fix error      | command | `editor.action.quickFix`           |
| <code>n</code> | Next error     | command | `editor.action.marker.nextInFiles` |
| <code>p</code> | Previous error | command | `editor.action.marker.prevInFiles` |
| <code>N</code> | Previous error | command | `editor.action.marker.prevInFiles` |

# Toggle tree/explorer view

Key Binding: <code>␣ f t</code>

Type: <code>conditional</code>

| Condition                                                  | Name               | Type    | Command(s)                                 |
| ---------------------------------------------------------- | ------------------ | ------- | ------------------------------------------ |
|                                                            | Show explorer view | command | `workbench.view.explorer`                  |
| <code>when:sideBarVisible && explorerViewletVisible</code> | Hide side bar      | command | `workbench.action.toggleSidebarVisibility` |

# +Emacs/VSpaceCode

Key Binding: <code>␣ f e</code>

Type: <code>bindings</code>

| Key Binding          | Name                          | Type    | Command(s)                                        |
| -------------------- | ----------------------------- | ------- | ------------------------------------------------- |
| <code>␣ f e d</code> | Open settings                 | command | `workbench.action.openGlobalSettings`             |
| <code>␣ f e k</code> | Open global key bindings      | command | `workbench.action.openGlobalKeybindings`          |
| <code>␣ f e l</code> | Open language settings        | command | `workbench.action.configureLanguageBasedSettings` |
| <code>␣ f e s</code> | Configure user snippets       | command | `workbench.action.openSnippets`                   |
| <code>␣ f e w</code> | Open workspace settings       | command | `workbench.action.openWorkspaceSettings`          |
| <code>␣ f e D</code> | Open settings JSON            | command | `workbench.action.openSettingsJson`               |
| <code>␣ f e K</code> | Open global key bindings JSON | command | `workbench.action.openGlobalKeybindingsFile`      |
| <code>␣ f e W</code> | Open workspace settings JSON  | command | `workbench.action.openWorkspaceSettingsFile`      |

# +Indentation

Key Binding: <code>␣ f i</code>

Type: <code>bindings</code>

| Key Binding          | Name                          | Type    | Command(s)                            |
| -------------------- | ----------------------------- | ------- | ------------------------------------- |
| <code>␣ f i d</code> | Detect indentation            | command | `editor.action.detectIndentation`     |
| <code>␣ f i i</code> | Change indentation            | command | `changeEditorIndentation`             |
| <code>␣ f i r</code> | Reindent                      | command | `editor.action.reindentlines`         |
| <code>␣ f i s</code> | Convert indentation to spaces | command | `editor.action.indentationToSpaces`   |
| <code>␣ f i t</code> | Convert indentation to tabs   | command | `editor.action.indentationToTabs`     |
| <code>␣ f i R</code> | Reindent selected             | command | `editor.action.reindentselectedlines` |

# +Yank

Key Binding: <code>␣ f y</code>

Type: <code>bindings</code>

| Key Binding          | Name                                                   | Type    | Command(s)                                  |
| -------------------- | ------------------------------------------------------ | ------- | ------------------------------------------- |
| <code>␣ f y c</code> | Copy path of active file with line and column          | command | `vspacecode.copyPathWithLineColumn`         |
| <code>␣ f y d</code> | Copy directory path of the active file                 | command | `vspacecode.copyDirectoryPath`              |
| <code>␣ f y l</code> | Copy path of active file with line                     | command | `vspacecode.copyPathWithLine`               |
| <code>␣ f y n</code> | Copy filename of active file                           | command | `vspacecode.copyFilename`                   |
| <code>␣ f y y</code> | Copy path of active file                               | command | `vspacecode.copyPath`                       |
| <code>␣ f y C</code> | Copy relative path of active file with line and column | command | `vspacecode.copyRelativePathWithLineColumn` |
| <code>␣ f y D</code> | Copy relative directory path of the active file        | command | `vspacecode.copyRelativeDirectoryPath`      |
| <code>␣ f y L</code> | Copy relative path of active file with line            | command | `vspacecode.copyRelativePathWithLine`       |
| <code>␣ f y N</code> | Copy filename without extension of active file         | command | `vspacecode.copyFilenameBase`               |
| <code>␣ f y Y</code> | Copy relative path of active file                      | command | `vspacecode.copyRelativePath`               |

# +File

Key Binding: <code>␣ g f</code>

Type: <code>bindings</code>

| Key Binding          | Name              | Type    | Command(s)        |
| -------------------- | ----------------- | ------- | ----------------- |
| <code>␣ g f d</code> | Diff              | command | `magit.diff-file` |
| <code>␣ g f l</code> | Show log/timeline | command | `timeline.focus`  |

# Agda

Key Binding: <code>␣ m languageId:agda</code>

Type: <code>bindings</code>

| Key Binding                        | Name                                                   | Type                 | Command(s)                                                  |
| ---------------------------------- | ------------------------------------------------------ | -------------------- | ----------------------------------------------------------- |
| <code>␣ m languageId:agda ,</code> | Show goal type and context (simplified)                | command              | `agda-mode.goal-type-and-context[Simplified]`               |
| <code>␣ m languageId:agda .</code> | Show goal type, context and inferred type (simplified) | command              | `agda-mode.goal-type-context-and-inferred-type[Simplified]` |
| <code>␣ m languageId:agda =</code> | Show constraints                                       | command              | `agda-mode.show-constraints`                                |
| <code>␣ m languageId:agda ?</code> | Show all goals                                         | command              | `agda-mode.show-goals`                                      |
| <code>␣ m languageId:agda a</code> | Automatic proof search                                 | command              | `agda-mode.auto`                                            |
| <code>␣ m languageId:agda b</code> | Move to previous goal                                  | command              | `agda-mode.previous-goal`                                   |
| <code>␣ m languageId:agda c</code> | Case split                                             | command              | `agda-mode.case`                                            |
| <code>␣ m languageId:agda d</code> | Infer type (simplified)                                | command              | `agda-mode.infer-type[Simplified]`                          |
| <code>␣ m languageId:agda e</code> | Show context (simplified)                              | command              | `agda-mode.context[Simplified]`                             |
| <code>␣ m languageId:agda f</code> | Move to next goal                                      | command              | `agda-mode.next-goal`                                       |
| <code>␣ m languageId:agda h</code> | Show helper function type (simplified)                 | command              | `agda-mode.helper-function-type[Simplified]`                |
| <code>␣ m languageId:agda l</code> | Load file                                              | command              | `agda-mode.load`                                            |
| <code>␣ m languageId:agda n</code> | Compute normal form (simplified)                       | command              | `agda-mode.compute-normal-form[DefaultCompute]`             |
| <code>␣ m languageId:agda r</code> | Refine                                                 | command              | `agda-mode.refine`                                          |
| <code>␣ m languageId:agda s</code> | Solve constraints (simplified)                         | command              | `agda-mode.solve-constraints[Simplified]`                   |
| <code>␣ m languageId:agda t</code> | Show goal type (simplified)                            | command              | `agda-mode.goal-type[Simplified]`                           |
| <code>␣ m languageId:agda w</code> | Why in scope                                           | bindings             | `agda-mode.why-in-scope`                                    |
| <code>␣ m languageId:agda x</code> | +Backend                                               | [bindings](#backend) | N/A                                                         |

# Clojure

Key Binding: <code>␣ m languageId:clojure</code>

Type: <code>bindings</code>

| Key Binding                           | Name                 | Type                             | Command(s)              |
| ------------------------------------- | -------------------- | -------------------------------- | ----------------------- |
| <code>␣ m languageId:clojure !</code> | Disconnect from REPL | command                          | `calva.disconnect`      |
| <code>␣ m languageId:clojure "</code> | Jack-in to REPL      | command                          | `calva.jackIn`          |
| <code>␣ m languageId:clojure '</code> | Connect to REPL      | command                          | `calva.connect`         |
| <code>␣ m languageId:clojure .</code> | Connect or jack-in   | command                          | `calva.jackInOrConnect` |
| <code>␣ m languageId:clojure =</code> | +Format              | [bindings](#format)              | N/A                     |
| <code>␣ m languageId:clojure d</code> | +Debug               | [bindings](#debug)               | N/A                     |
| <code>␣ m languageId:clojure e</code> | +Evaluate            | [bindings](#evaluate)            | N/A                     |
| <code>␣ m languageId:clojure k</code> | +Structural editing  | [bindings](#structural-editing)  | N/A                     |
| <code>␣ m languageId:clojure m</code> | +Manage REPL session | [bindings](#manage-repl-session) | N/A                     |
| <code>␣ m languageId:clojure r</code> | +Refactor            | [bindings](#refactor)            | N/A                     |
| <code>␣ m languageId:clojure t</code> | +Tests               | [bindings](#tests)               | N/A                     |
| <code>␣ m languageId:clojure T</code> | +Toggle              | [bindings](#toggle)              | N/A                     |

# C

Key Binding: <code>␣ m languageId:c</code>

Type: <code>bindings</code>

| Key Binding                     | Name      | Type                  | Command(s) |
| ------------------------------- | --------- | --------------------- | ---------- |
| <code>␣ m languageId:c =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:c b</code> | +Backend  | [bindings](#backend)  | N/A        |
| <code>␣ m languageId:c g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:c r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:c G</code> | +Peek     | [bindings](#peek)     | N/A        |

# coq

Key Binding: <code>␣ m languageId:coq</code>

Type: <code>bindings</code>

| Key Binding                       | Name                                        | Type                                           | Command(s)                            |
| --------------------------------- | ------------------------------------------- | ---------------------------------------------- | ------------------------------------- |
| <code>␣ m languageId:coq .</code> | Proof goto current point                    | command                                        | `extension.coq.interpretToPoint`      |
| <code>␣ m languageId:coq b</code> | Proof step back                             | command                                        | `extension.coq.stepBackward`          |
| <code>␣ m languageId:coq f</code> | Proof step forward                          | command                                        | `extension.coq.stepForward`           |
| <code>␣ m languageId:coq g</code> | Go to the current focus location            | command                                        | `extension.coq.moveCursorToFocus`     |
| <code>␣ m languageId:coq o</code> | Open proof view                             | command                                        | `extension.coq.proofView.open`        |
| <code>␣ m languageId:coq v</code> | View the proof-state at the cursor position | command                                        | `extension.coq.proofView.viewStateAt` |
| <code>␣ m languageId:coq G</code> | Proof goto end                              | command                                        | `extension.coq.interpretToEnd`        |
| <code>␣ m languageId:coq a</code> | Ask prover                                  | [bindings](#ask-prover)                        | N/A                                   |
| <code>␣ m languageId:coq p</code> | Send command to prover                      | [bindings](#send-command-to-prover)            | N/A                                   |
| <code>␣ m languageId:coq q</code> | Query prover about foucsed symbol           | [bindings](#query-prover-about-foucsed-symbol) | N/A                                   |
| <code>␣ m languageId:coq T</code> | UI toggle                                   | [bindings](#ui-toggle)                         | N/A                                   |

# C++

Key Binding: <code>␣ m languageId:cpp</code>

Type: <code>bindings</code>

| Key Binding                       | Name      | Type                  | Command(s) |
| --------------------------------- | --------- | --------------------- | ---------- |
| <code>␣ m languageId:cpp =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:cpp b</code> | +Backend  | [bindings](#backend)  | N/A        |
| <code>␣ m languageId:cpp g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:cpp r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:cpp G</code> | +Peek     | [bindings](#peek)     | N/A        |

# C#

Key Binding: <code>␣ m languageId:csharp</code>

Type: <code>bindings</code>

| Key Binding                          | Name               | Type                          | Command(s) |
| ------------------------------------ | ------------------ | ----------------------------- | ---------- |
| <code>␣ m languageId:csharp =</code> | +Format            | [bindings](#format)           | N/A        |
| <code>␣ m languageId:csharp b</code> | +Backend/OmniSharp | [bindings](#backendomnisharp) | N/A        |
| <code>␣ m languageId:csharp d</code> | +Debug             | [bindings](#debug)            | N/A        |
| <code>␣ m languageId:csharp g</code> | +Go to             | [bindings](#go-to)            | N/A        |
| <code>␣ m languageId:csharp p</code> | +Project           | [bindings](#project)          | N/A        |
| <code>␣ m languageId:csharp r</code> | +Refactor          | [bindings](#refactor)         | N/A        |
| <code>␣ m languageId:csharp t</code> | +Test              | [bindings](#test)             | N/A        |
| <code>␣ m languageId:csharp G</code> | +Peek              | [bindings](#peek)             | N/A        |

# Dart/Flutter

Key Binding: <code>␣ m languageId:dart</code>

Type: <code>bindings</code>

| Key Binding                        | Name                   | Type                         | Command(s)                  |
| ---------------------------------- | ---------------------- | ---------------------------- | --------------------------- |
| <code>␣ m languageId:dart ;</code> | Toggle Dartdoc comment | command                      | `dart.toggleDartdocComment` |
| <code>␣ m languageId:dart a</code> | Attach                 | command                      | `flutter.attach`            |
| <code>␣ m languageId:dart c</code> | Clean                  | command                      | `flutter.clean`             |
| <code>␣ m languageId:dart i</code> | Inspect widget         | command                      | `flutter.inspectWidget`     |
| <code>␣ m languageId:dart m</code> | Sort members           | command                      | `dart.sortMembers`          |
| <code>␣ m languageId:dart r</code> | Hot reload             | command                      | `flutter.hotReload`         |
| <code>␣ m languageId:dart s</code> | Select device          | command                      | `flutter.selectDevice`      |
| <code>␣ m languageId:dart u</code> | Flutter upgrade        | command                      | `flutter.upgrade`           |
| <code>␣ m languageId:dart A</code> | Attach to process      | command                      | `flutter.attachProcess`     |
| <code>␣ m languageId:dart D</code> | Flutter doctor         | command                      | `flutter.doctor`            |
| <code>␣ m languageId:dart E</code> | Launch emulator        | command                      | `flutter.launchEmulator`    |
| <code>␣ m languageId:dart P</code> | Profile app            | command                      | `flutter.runProfileMode`    |
| <code>␣ m languageId:dart R</code> | Hot restart            | command                      | `flutter.hotRestart`        |
| <code>␣ m languageId:dart S</code> | Screenshot             | command                      | `flutter.screenshot`        |
| <code>␣ m languageId:dart =</code> | +Format                | [bindings](#format)          | N/A                         |
| <code>␣ m languageId:dart g</code> | +Go to                 | [bindings](#go-to)           | N/A                         |
| <code>␣ m languageId:dart l</code> | +Logging               | [bindings](#logging)         | N/A                         |
| <code>␣ m languageId:dart o</code> | +Open                  | [bindings](#open)            | N/A                         |
| <code>␣ m languageId:dart p</code> | +Project/Packages      | [bindings](#projectpackages) | N/A                         |
| <code>␣ m languageId:dart r</code> | +Refactor              | [bindings](#refactor)        | N/A                         |
| <code>␣ m languageId:dart t</code> | +Test                  | [bindings](#test)            | N/A                         |
| <code>␣ m languageId:dart G</code> | +Peek                  | [bindings](#peek)            | N/A                         |
| <code>␣ m languageId:dart T</code> | +Toggle                | [bindings](#toggle)          | N/A                         |

# Elixir

Key Binding: <code>␣ m languageId:elixir</code>

Type: <code>bindings</code>

| Key Binding                          | Name                  | Type                  | Command(s)              |
| ------------------------------------ | --------------------- | --------------------- | ----------------------- |
| <code>␣ m languageId:elixir o</code> | Expand selected macro | command               | `extension.expandMacro` |
| <code>␣ m languageId:elixir =</code> | +Format               | [bindings](#format)   | N/A                     |
| <code>␣ m languageId:elixir g</code> | +Go to                | [bindings](#go-to)    | N/A                     |
| <code>␣ m languageId:elixir r</code> | +Refactor             | [bindings](#refactor) | N/A                     |
| <code>␣ m languageId:elixir G</code> | +Peek                 | [bindings](#peek)     | N/A                     |

# F#

Key Binding: <code>␣ m languageId:fsharp</code>

Type: <code>bindings</code>

| Key Binding                          | Name      | Type                  | Command(s) |
| ------------------------------------ | --------- | --------------------- | ---------- |
| <code>␣ m languageId:fsharp =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:fsharp c</code> | +Compile  | [bindings](#compile)  | N/A        |
| <code>␣ m languageId:fsharp g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:fsharp r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:fsharp s</code> | +FSI REPL | [bindings](#fsi-repl) | N/A        |
| <code>␣ m languageId:fsharp G</code> | +Peek     | [bindings](#peek)     | N/A        |

# Go

Key Binding: <code>␣ m languageId:go</code>

Type: <code>bindings</code>

| Key Binding                      | Name                 | Type                            | Command(s)         |
| -------------------------------- | -------------------- | ------------------------------- | ------------------ |
| <code>␣ m languageId:go ␣</code> | Show all commands    | command                         | `go.show.commands` |
| <code>␣ m languageId:go =</code> | +Format              | [bindings](#format)             | N/A                |
| <code>␣ m languageId:go a</code> | +Actions             | [bindings](#actions)            | N/A                |
| <code>␣ m languageId:go b</code> | +Backend/environment | [bindings](#backendenvironment) | N/A                |
| <code>␣ m languageId:go g</code> | +Go to               | [bindings](#go-to)              | N/A                |
| <code>␣ m languageId:go i</code> | +Insert/remove       | [bindings](#insertremove)       | N/A                |
| <code>␣ m languageId:go r</code> | +Refactor            | [bindings](#refactor)           | N/A                |
| <code>␣ m languageId:go t</code> | +Test                | [bindings](#test)               | N/A                |
| <code>␣ m languageId:go G</code> | +Peek                | [bindings](#peek)               | N/A                |

# Java

Key Binding: <code>␣ m languageId:java</code>

Type: <code>bindings</code>

| Key Binding                        | Name                    | Type                      | Command(s)                 |
| ---------------------------------- | ----------------------- | ------------------------- | -------------------------- |
| <code>␣ m languageId:java h</code> | Describe thing at point | command                   | `editor.action.showHover`  |
| <code>␣ m languageId:java D</code> | Debug Java file         | command                   | `java.debug.debugJavaFile` |
| <code>␣ m languageId:java R</code> | Run Java file           | command                   | `java.debug.runJavaFile`   |
| <code>␣ m languageId:java =</code> | +Format                 | [bindings](#format)       | N/A                        |
| <code>␣ m languageId:java a</code> | +Code actions           | [bindings](#code-actions) | N/A                        |
| <code>␣ m languageId:java g</code> | +Go to                  | [bindings](#go-to)        | N/A                        |
| <code>␣ m languageId:java r</code> | +Refactor               | [bindings](#refactor)     | N/A                        |
| <code>␣ m languageId:java t</code> | +Test                   | [bindings](#test)         | N/A                        |
| <code>␣ m languageId:java G</code> | +Peek                   | [bindings](#peek)         | N/A                        |

# JavaScript

Key Binding: <code>␣ m languageId:javascript</code>

Type: <code>bindings</code>

| Key Binding                              | Name    | Type                | Command(s) |
| ---------------------------------------- | ------- | ------------------- | ---------- |
| <code>␣ m languageId:javascript =</code> | +Format | [bindings](#format) | N/A        |
| <code>␣ m languageId:javascript g</code> | +Go to  | [bindings](#go-to)  | N/A        |
| <code>␣ m languageId:javascript G</code> | +Peek   | [bindings](#peek)   | N/A        |

# Julia

Key Binding: <code>␣ m languageId:julia</code>

Type: <code>bindings</code>

| Key Binding                         | Name                    | Type                            | Command(s)                              |
| ----------------------------------- | ----------------------- | ------------------------------- | --------------------------------------- |
| <code>␣ m languageId:julia ,</code> | Execute code in REPL    | command                         | `language-julia.executeJuliaCodeInREPL` |
| <code>␣ m languageId:julia d</code> | Show documentation      | command                         | `language-julia.show-documentation`     |
| <code>␣ m languageId:julia p</code> | Show plots              | command                         | `language-julia.show-plotpane`          |
| <code>␣ m languageId:julia w</code> | Focus on workspace view | command                         | `REPLVariables.focus`                   |
| <code>␣ m languageId:julia =</code> | +Format                 | [bindings](#format)             | N/A                                     |
| <code>␣ m languageId:julia b</code> | +Backend                | [bindings](#backend)            | N/A                                     |
| <code>␣ m languageId:julia c</code> | +Compile/debug          | [bindings](#compiledebug)       | N/A                                     |
| <code>␣ m languageId:julia c</code> | +Clear                  | [bindings](#clear)              | N/A                                     |
| <code>␣ m languageId:julia e</code> | +Environment/package    | [bindings](#environmentpackage) | N/A                                     |
| <code>␣ m languageId:julia g</code> | +Go to                  | [bindings](#go-to)              | N/A                                     |
| <code>␣ m languageId:julia s</code> | +Send/REPL              | [bindings](#sendrepl)           | N/A                                     |

# LaTeX

Key Binding: <code>␣ m languageId:latex</code>

Type: <code>bindings</code>

| Key Binding                         | Name     | Type                 | Command(s) |
| ----------------------------------- | -------- | -------------------- | ---------- |
| <code>␣ m languageId:latex =</code> | +Format  | [bindings](#format)  | N/A        |
| <code>␣ m languageId:latex b</code> | +Backend | [bindings](#backend) | N/A        |
| <code>␣ m languageId:latex c</code> | +Build   | [bindings](#build)   | N/A        |
| <code>␣ m languageId:latex g</code> | +Go to   | [bindings](#go-to)   | N/A        |
| <code>␣ m languageId:latex i</code> | +Insert  | [bindings](#insert)  | N/A        |
| <code>␣ m languageId:latex l</code> | +Bibtex  | [bindings](#bibtex)  | N/A        |
| <code>␣ m languageId:latex p</code> | +Preview | [bindings](#preview) | N/A        |
| <code>␣ m languageId:latex x</code> | +Text    | [bindings](#text)    | N/A        |

# Markdown

Key Binding: <code>␣ m languageId:markdown</code>

Type: <code>bindings</code>

| Key Binding                            | Name               | Type                           | Command(s) |
| -------------------------------------- | ------------------ | ------------------------------ | ---------- |
| <code>␣ m languageId:markdown c</code> | +Buffer commands   | [bindings](#buffer-commands)   | N/A        |
| <code>␣ m languageId:markdown t</code> | +Table of Contents | [bindings](#table-of-contents) | N/A        |
| <code>␣ m languageId:markdown x</code> | +Text              | [bindings](#text)              | N/A        |

# ObjectPascal

Key Binding: <code>␣ m languageId:objectpascal</code>

Type: <code>bindings</code>

| Key Binding                                | Name      | Type                  | Command(s) |
| ------------------------------------------ | --------- | --------------------- | ---------- |
| <code>␣ m languageId:objectpascal =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:objectpascal g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:objectpascal r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:objectpascal G</code> | +Peek     | [bindings](#peek)     | N/A        |

# PHP

Key Binding: <code>␣ m languageId:php</code>

Type: <code>bindings</code>

| Key Binding                       | Name      | Type                  | Command(s) |
| --------------------------------- | --------- | --------------------- | ---------- |
| <code>␣ m languageId:php =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:php g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:php r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:php G</code> | +Peek     | [bindings](#peek)     | N/A        |

# Python

Key Binding: <code>␣ m languageId:python</code>

Type: <code>bindings</code>

| Key Binding                          | Name        | Type                  | Command(s)              |
| ------------------------------------ | ----------- | --------------------- | ----------------------- |
| <code>␣ m languageId:python v</code> | +Virtualenv | command               | `python.setInterpreter` |
| <code>␣ m languageId:python =</code> | +Format     | [bindings](#format)   | N/A                     |
| <code>␣ m languageId:python b</code> | +Backend    | [bindings](#backend)  | N/A                     |
| <code>␣ m languageId:python c</code> | +Execute    | [bindings](#execute)  | N/A                     |
| <code>␣ m languageId:python g</code> | +Go to      | [bindings](#go-to)    | N/A                     |
| <code>␣ m languageId:python r</code> | +Refactor   | [bindings](#refactor) | N/A                     |
| <code>␣ m languageId:python s</code> | +REPL       | [bindings](#repl)     | N/A                     |
| <code>␣ m languageId:python t</code> | +Test       | [bindings](#test)     | N/A                     |
| <code>␣ m languageId:python G</code> | +Peek       | [bindings](#peek)     | N/A                     |

# quarto

Key Binding: <code>␣ m languageId:quarto</code>

Type: <code>bindings</code>

| Key Binding                          | Name                   | Type                      | Command(s)                        |
| ------------------------------------ | ---------------------- | ------------------------- | --------------------------------- |
| <code>␣ m languageId:quarto '</code> | Create R Terminal      | command                   | `r.createRTerm`                   |
| <code>␣ m languageId:quarto d</code> | Debugonce R            | command                   | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:quarto h</code> | Help R                 | command                   | `r.helpPanel.openForSelection`    |
| <code>␣ m languageId:quarto i</code> | Insert cell            | command                   | `quarto.insertCodeCell`           |
| <code>␣ m languageId:quarto m</code> | Create R Terminal      | command                   | `r.createRTerm`                   |
| <code>␣ m languageId:quarto o</code> | Objects in workspace R | command                   | `r.runCommand`                    |
| <code>␣ m languageId:quarto p</code> | Render                 | command                   | `quarto.renderDocument`           |
| <code>␣ m languageId:quarto s</code> | Run selection          | command                   | `quarto.runSelection`             |
| <code>␣ m languageId:quarto R</code> | Restart R              | command                   | `r.runCommand`                    |
| <code>␣ m languageId:quarto S</code> | Run current cell       | command                   | `quarto.runCurrentCell`           |
| <code>␣ m languageId:quarto =</code> | +Format                | [bindings](#format)       | N/A                               |
| <code>␣ m languageId:quarto a</code> | +Code actions          | [bindings](#code-actions) | N/A                               |
| <code>␣ m languageId:quarto f</code> | +Fold                  | [bindings](#fold)         | N/A                               |
| <code>␣ m languageId:quarto g</code> | +Go to                 | [bindings](#go-to)        | N/A                               |
| <code>␣ m languageId:quarto r</code> | +Refactor              | [bindings](#refactor)     | N/A                               |
| <code>␣ m languageId:quarto v</code> | +View R                | [bindings](#view-r)       | N/A                               |
| <code>␣ m languageId:quarto G</code> | +Peek                  | [bindings](#peek)         | N/A                               |

# R

Key Binding: <code>␣ m languageId:r</code>

Type: <code>bindings</code>

| Key Binding                     | Name                   | Type                      | Command(s)                        |
| ------------------------------- | ---------------------- | ------------------------- | --------------------------------- |
| <code>␣ m languageId:r '</code> | Create R Terminal      | command                   | `r.createRTerm`                   |
| <code>␣ m languageId:r d</code> | Debugonce              | command                   | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:r h</code> | Help                   | command                   | `r.helpPanel.openForSelection`    |
| <code>␣ m languageId:r m</code> | Create R Terminal      | command                   | `r.createRTerm`                   |
| <code>␣ m languageId:r o</code> | Objects in workspace R | command                   | `r.runCommand`                    |
| <code>␣ m languageId:r s</code> | Run selection          | command                   | `r.runSelection`                  |
| <code>␣ m languageId:r R</code> | Restart R              | command                   | `r.runCommand`                    |
| <code>␣ m languageId:r =</code> | +Format                | [bindings](#format)       | N/A                               |
| <code>␣ m languageId:r a</code> | +Code actions          | [bindings](#code-actions) | N/A                               |
| <code>␣ m languageId:r g</code> | +Go to                 | [bindings](#go-to)        | N/A                               |
| <code>␣ m languageId:r p</code> | +Package               | [bindings](#package)      | N/A                               |
| <code>␣ m languageId:r r</code> | +Refactor              | [bindings](#refactor)     | N/A                               |
| <code>␣ m languageId:r v</code> | +View                  | [bindings](#view)         | N/A                               |
| <code>␣ m languageId:r G</code> | +Peek                  | [bindings](#peek)         | N/A                               |

# Ruby

Key Binding: <code>␣ m languageId:ruby</code>

Type: <code>bindings</code>

| Key Binding                        | Name      | Type                  | Command(s) |
| ---------------------------------- | --------- | --------------------- | ---------- |
| <code>␣ m languageId:ruby =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:ruby g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:ruby r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:ruby G</code> | +Peek     | [bindings](#peek)     | N/A        |

# Rust

Key Binding: <code>␣ m languageId:rust</code>

Type: <code>bindings</code>

| Key Binding                        | Name               | Type                  | Command(s)                       |
| ---------------------------------- | ------------------ | --------------------- | -------------------------------- |
| <code>␣ m languageId:rust T</code> | Toggle inlay hints | command               | `rust-analyzer.toggleInlayHints` |
| <code>␣ m languageId:rust =</code> | +Format            | [bindings](#format)   | N/A                              |
| <code>␣ m languageId:rust a</code> | +Actions           | [bindings](#actions)  | N/A                              |
| <code>␣ m languageId:rust b</code> | +Backend           | [bindings](#backend)  | N/A                              |
| <code>␣ m languageId:rust g</code> | +Goto              | [bindings](#goto)     | N/A                              |
| <code>␣ m languageId:rust r</code> | +Refactor          | [bindings](#refactor) | N/A                              |
| <code>␣ m languageId:rust G</code> | +Peek              | [bindings](#peek)     | N/A                              |

# TypeScript

Key Binding: <code>␣ m languageId:typescript</code>

Type: <code>bindings</code>

| Key Binding                              | Name    | Type                | Command(s) |
| ---------------------------------------- | ------- | ------------------- | ---------- |
| <code>␣ m languageId:typescript =</code> | +Format | [bindings](#format) | N/A        |
| <code>␣ m languageId:typescript g</code> | +Go to  | [bindings](#go-to)  | N/A        |
| <code>␣ m languageId:typescript G</code> | +Peek   | [bindings](#peek)   | N/A        |

# CUDA-C++

Key Binding: <code>␣ m languageId:cuda-cpp</code>

Type: <code>bindings</code>

| Key Binding                            | Name      | Type                  | Command(s) |
| -------------------------------------- | --------- | --------------------- | ---------- |
| <code>␣ m languageId:cuda-cpp =</code> | +Format   | [bindings](#format)   | N/A        |
| <code>␣ m languageId:cuda-cpp b</code> | +Backend  | [bindings](#backend)  | N/A        |
| <code>␣ m languageId:cuda-cpp d</code> | +Debug    | [bindings](#debug)    | N/A        |
| <code>␣ m languageId:cuda-cpp g</code> | +Go to    | [bindings](#go-to)    | N/A        |
| <code>␣ m languageId:cuda-cpp r</code> | +Refactor | [bindings](#refactor) | N/A        |
| <code>␣ m languageId:cuda-cpp G</code> | +Peek     | [bindings](#peek)     | N/A        |

# Highlight symbol

Key Binding: <code>␣ s h</code>

Type: <code>transient</code>

| Key Binding    | Name                             | Type     | Command(s)                                                                      |
| -------------- | -------------------------------- | -------- | ------------------------------------------------------------------------------- |
| <code>/</code> | Search in project with selection | commands | `editor.action.addSelectionToNextFindMatch`<br />`workbench.action.findInFiles` |
| <code>n</code> | Next occurrence                  | command  | `editor.action.wordHighlight.next`                                              |
| <code>p</code> | Previous occurrence              | command  | `editor.action.wordHighlight.prev`                                              |
| <code>N</code> | Previous occurrence              | command  | `editor.action.wordHighlight.prev`                                              |

# Shrink window

Key Binding: <code>␣ w [</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    | Command(s)                          |
| -------------- | -------------- | ------- | ----------------------------------- |
| <code>[</code> | Shrink window  | command | `workbench.action.decreaseViewSize` |
| <code>]</code> | Enlarge window | command | `workbench.action.increaseViewSize` |

# Enlarge window

Key Binding: <code>␣ w ]</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    | Command(s)                          |
| -------------- | -------------- | ------- | ----------------------------------- |
| <code>[</code> | Shrink window  | command | `workbench.action.decreaseViewSize` |
| <code>]</code> | Enlarge window | command | `workbench.action.increaseViewSize` |

# Move lines down

Key Binding: <code>␣ x J</code>

Type: <code>transient</code>

| Key Binding    | Name            | Type    | Command(s)                          |
| -------------- | --------------- | ------- | ----------------------------------- |
| <code>J</code> | Move lines down | command | `editor.action.moveLinesDownAction` |
| <code>K</code> | Move lines up   | command | `editor.action.moveLinesUpAction`   |

# Move lines up

Key Binding: <code>␣ x K</code>

Type: <code>transient</code>

| Key Binding    | Name            | Type    | Command(s)                          |
| -------------- | --------------- | ------- | ----------------------------------- |
| <code>J</code> | Move lines down | command | `editor.action.moveLinesDownAction` |
| <code>K</code> | Move lines up   | command | `editor.action.moveLinesUpAction`   |

# +Delete

Key Binding: <code>␣ x d</code>

Type: <code>bindings</code>

| Key Binding          | Name                       | Type    | Command(s)                             |
| -------------------- | -------------------------- | ------- | -------------------------------------- |
| <code>␣ x d w</code> | Delete trailing whitespace | command | `editor.action.trimTrailingWhitespace` |

# +Lines

Key Binding: <code>␣ x l</code>

Type: <code>bindings</code>

| Key Binding          | Name                           | Type    | Command(s)                          |
| -------------------- | ------------------------------ | ------- | ----------------------------------- |
| <code>␣ x l d</code> | Duplicate lines down           | command | `editor.action.copyLinesDownAction` |
| <code>␣ x l s</code> | Sort lines in ascending order  | command | `editor.action.sortLinesAscending`  |
| <code>␣ x l D</code> | Duplicate lines up             | command | `editor.action.copyLinesUpAction`   |
| <code>␣ x l S</code> | Sort lines in descending order | command | `editor.action.sortLinesDescending` |

# +Merge conflict

Key Binding: <code>␣ x m</code>

Type: <code>bindings</code>

| Key Binding          | Name                     | Type    | Command(s)                           |
| -------------------- | ------------------------ | ------- | ------------------------------------ |
| <code>␣ x m b</code> | Accept both              | command | `merge-conflict.accept.both`         |
| <code>␣ x m c</code> | Accept current           | command | `merge-conflict.accept.current`      |
| <code>␣ x m i</code> | Accept incoming          | command | `merge-conflict.accept.incoming`     |
| <code>␣ x m k</code> | Compare current conflict | command | `merge-conflict.compare`             |
| <code>␣ x m n</code> | Next Conflict            | command | `merge-conflict.next`                |
| <code>␣ x m s</code> | Accept selection         | command | `merge-conflict.accept.selection`    |
| <code>␣ x m B</code> | Accept all both          | command | `merge-conflict.accept.all-both`     |
| <code>␣ x m C</code> | Accept all current       | command | `merge-conflict.accept.all-current`  |
| <code>␣ x m I</code> | Accept all incoming      | command | `merge-conflict.accept.all-incoming` |
| <code>␣ x m N</code> | Previous Conflict        | command | `merge-conflict.previous`            |

# +Frame

Key Binding: <code>␣ z f</code>

Type: <code>transient</code>

| Key Binding    | Name       | Type    | Command(s)                   |
| -------------- | ---------- | ------- | ---------------------------- |
| <code>+</code> | Zoom in    | command | `workbench.action.zoomIn`    |
| <code>-</code> | Zoom out   | command | `workbench.action.zoomOut`   |
| <code>0</code> | Reset zoom | command | `workbench.action.zoomReset` |
| <code>=</code> | Zoom in    | command | `workbench.action.zoomIn`    |
| <code>j</code> | Zoom out   | command | `workbench.action.zoomOut`   |
| <code>k</code> | Zoom in    | command | `workbench.action.zoomIn`    |

# +Image preview

Key Binding: <code>␣ z i</code>

Type: <code>transient</code>

| Key Binding    | Name     | Type    | Command(s)             |
| -------------- | -------- | ------- | ---------------------- |
| <code>+</code> | Zoom in  | command | `imagePreview.zoomIn`  |
| <code>-</code> | Zoom out | command | `imagePreview.zoomOut` |
| <code>=</code> | Zoom in  | command | `imagePreview.zoomIn`  |

# +Font

Key Binding: <code>␣ z x</code>

Type: <code>transient</code>

| Key Binding    | Name       | Type    | Command(s)                    |
| -------------- | ---------- | ------- | ----------------------------- |
| <code>+</code> | Zoom in    | command | `editor.action.fontZoomIn`    |
| <code>-</code> | Zoom out   | command | `editor.action.fontZoomOut`   |
| <code>0</code> | Reset zoom | command | `editor.action.fontZoomReset` |
| <code>=</code> | Zoom in    | command | `editor.action.fontZoomIn`    |
| <code>j</code> | Zoom out   | command | `editor.action.fontZoomOut`   |
| <code>k</code> | Zoom in    | command | `editor.action.fontZoomIn`    |

# +Fold

Key Binding: <code>␣ z .</code>

Type: <code>bindings</code>

| Key Binding          | Name                      | Type    | Command(s)                      |
| -------------------- | ------------------------- | ------- | ------------------------------- |
| <code>␣ z . a</code> | Toggle: around a point    | command | `editor.toggleFold`             |
| <code>␣ z . b</code> | Close: all block comments | command | `editor.foldAllBlockComments`   |
| <code>␣ z . c</code> | Close: at a point         | command | `editor.fold`                   |
| <code>␣ z . g</code> | Close: all regions        | command | `editor.foldAllMarkerRegions`   |
| <code>␣ z . m</code> | Close: all                | command | `editor.foldAll`                |
| <code>␣ z . o</code> | Open: at a point          | command | `editor.unfold`                 |
| <code>␣ z . r</code> | Open: all                 | command | `editor.unfoldAll`              |
| <code>␣ z . G</code> | Open: all regions         | command | `editor.unfoldAllMarkerRegions` |
| <code>␣ z . O</code> | Open: recursively         | command | `editor.unfoldRecursively`      |

# Next breakpoint

Key Binding: <code>␣ d b n</code>

Type: <code>transient</code>

| Key Binding    | Name                | Type    | Command(s)                                   |
| -------------- | ------------------- | ------- | -------------------------------------------- |
| <code>n</code> | Next breakpoint     | command | `editor.debug.action.goToNextBreakpoint`     |
| <code>p</code> | Previous breakpoint | command | `editor.debug.action.goToPreviousBreakpoint` |

# Previous breakpoint

Key Binding: <code>␣ d b p</code>

Type: <code>transient</code>

| Key Binding    | Name                | Type    | Command(s)                                   |
| -------------- | ------------------- | ------- | -------------------------------------------- |
| <code>n</code> | Next breakpoint     | command | `editor.debug.action.goToNextBreakpoint`     |
| <code>p</code> | Previous breakpoint | command | `editor.debug.action.goToPreviousBreakpoint` |

# +Backend

Key Binding: <code>␣ m languageId:agda x</code>

Type: <code>bindings</code>

| Key Binding                          | Name                                 | Type    | Command(s)                                       |
| ------------------------------------ | ------------------------------------ | ------- | ------------------------------------------------ |
| <code>␣ m languageId:agda x c</code> | Compile module                       | command | `agda-mode.compile`                              |
| <code>␣ m languageId:agda x h</code> | Toggle display of implicit arguments | command | `agda-mode.toggle-display-of-implicit-arguments` |
| <code>␣ m languageId:agda x q</code> | Quit                                 | command | `agda-mode.quit`                                 |
| <code>␣ m languageId:agda x r</code> | Restart                              | command | `agda-mode.restart`                              |

# +Format

Key Binding: <code>␣ m languageId:clojure =</code>

Type: <code>bindings</code>

| Key Binding                             | Name                | Type    | Command(s)                    |
| --------------------------------------- | ------------------- | ------- | ----------------------------- |
| <code>␣ m languageId:clojure = =</code> | Format current form | command | `calva-fmt.formatCurrentForm` |
| <code>␣ m languageId:clojure = a</code> | Align current form  | command | `calva-fmt.alignCurrentForm`  |
| <code>␣ m languageId:clojure = d</code> | Dedent line         | command | `calva-fmt.tabDedent`         |
| <code>␣ m languageId:clojure = i</code> | Indent line         | command | `calva-fmt.tabIndent`         |

# +Debug

Key Binding: <code>␣ m languageId:clojure d</code>

Type: <code>bindings</code>

| Key Binding                             | Name                    | Type    | Command(s)                  |
| --------------------------------------- | ----------------------- | ------- | --------------------------- |
| <code>␣ m languageId:clojure d i</code> | Last evaluation results | command | `calva.debug.instrument`    |
| <code>␣ m languageId:clojure d r</code> | Last evaluation results | command | `calva.copyLastResults`     |
| <code>␣ m languageId:clojure d s</code> | Last stacktrace         | command | `calva.printLastStacktrace` |

# +Evaluate

Key Binding: <code>␣ m languageId:clojure e</code>

Type: <code>bindings</code>

| Key Binding                             | Name                                | Type    | Command(s)                            |
| --------------------------------------- | ----------------------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:clojure e :</code> | Evaluate current form as comment    | command | `calva.evaluateSelectionAsComment`    |
| <code>␣ m languageId:clojure e ;</code> | Evaluate top-level form as comment  | command | `calva.evaluateTopLevelFormAsComment` |
| <code>␣ m languageId:clojure e e</code> | Evaluate current expression         | command | `calva.evaluateSelection`             |
| <code>␣ m languageId:clojure e f</code> | Evaluate top-level expression       | command | `calva.evaluateCurrentTopLevelForm`   |
| <code>␣ m languageId:clojure e i</code> | Interrupt evaluation                | command | `calva.interruptAllEvaluations`       |
| <code>␣ m languageId:clojure e l</code> | Clear inline evaluation results     | command | `calva.clearInlineResults`            |
| <code>␣ m languageId:clojure e n</code> | Evaluate all code in namespace      | command | `calva.loadFile`                      |
| <code>␣ m languageId:clojure e s</code> | Select expression                   | command | `calva.selectCurrentForm`             |
| <code>␣ m languageId:clojure e t</code> | Clear evaluation results            | command | `calva.requireREPLUtilities`          |
| <code>␣ m languageId:clojure e w</code> | Replace form with evaluation result | command | `calva.evaluateSelectionReplace`      |

# +Structural editing

Key Binding: <code>␣ m languageId:clojure k</code>

Type: <code>bindings</code>

| Key Binding                             | Name                      | Type              | Command(s)                  |
| --------------------------------------- | ------------------------- | ----------------- | --------------------------- |
| <code>␣ m languageId:clojure k .</code> | Toggle paredit mode       | command           | `paredit.togglemode`        |
| <code>␣ m languageId:clojure k b</code> | Barf expression forward   | command           | `paredit.barfSexpForward`   |
| <code>␣ m languageId:clojure k c</code> | Convolute expression      | command           | `paredit.convolute`         |
| <code>␣ m languageId:clojure k h</code> | Backward expression       | command           | `paredit.backwardSexp`      |
| <code>␣ m languageId:clojure k j</code> | Forward down expression   | command           | `paredit.forwardDownSexp`   |
| <code>␣ m languageId:clojure k k</code> | Backward down expression  | command           | `paredit.backwardDownSexp`  |
| <code>␣ m languageId:clojure k l</code> | Forward expression        | command           | `paredit.forwardSexp`       |
| <code>␣ m languageId:clojure k r</code> | Raise expression          | command           | `paredit.raiseSexp`         |
| <code>␣ m languageId:clojure k s</code> | Slurp expression forward  | command           | `paredit.slurpSexpForward`  |
| <code>␣ m languageId:clojure k t</code> | Transpose expression      | command           | `paredit.transpose`         |
| <code>␣ m languageId:clojure k B</code> | Barf expression backward  | command           | `paredit.barfSexpBackward`  |
| <code>␣ m languageId:clojure k H</code> | Backward up expression    | command           | `paredit.backwardUpSexp`    |
| <code>␣ m languageId:clojure k J</code> | Join expression           | command           | `paredit.joinSexp`          |
| <code>␣ m languageId:clojure k L</code> | Forward up expression     | command           | `paredit.forwardUpSexp`     |
| <code>␣ m languageId:clojure k S</code> | Slurp expression backward | command           | `paredit.slurpSexpBackward` |
| <code>␣ m languageId:clojure k w</code> | +Wrap                     | [bindings](#wrap) | N/A                         |

# +Manage REPL session

Key Binding: <code>␣ m languageId:clojure m</code>

Type: <code>bindings</code>

| Key Binding                             | Name                                    | Type    | Command(s)                   |
| --------------------------------------- | --------------------------------------- | ------- | ---------------------------- |
| <code>␣ m languageId:clojure m .</code> | Connect or jack-in                      | command | `calva.jackInOrConnect`      |
| <code>␣ m languageId:clojure m c</code> | Connect to REPL server for project      | command | `calva.connect`              |
| <code>␣ m languageId:clojure m j</code> | Start REPL server for project (jack-in) | command | `calva.jackIn`               |
| <code>␣ m languageId:clojure m q</code> | Disconnect (quit) from REPL server      | command | `calva.disconnect`           |
| <code>␣ m languageId:clojure m r</code> | Refresh changed namespaces              | command | `calva.refresh`              |
| <code>␣ m languageId:clojure m s</code> | Select cljs build connection            | command | `calva.switchCljsBuild`      |
| <code>␣ m languageId:clojure m t</code> | Toggle cljc session (clj, cljs)         | command | `calva.toggleCLJCSession`    |
| <code>␣ m languageId:clojure m C</code> | Run custom REPL command                 | command | `calva.runCustomREPLCommand` |
| <code>␣ m languageId:clojure m R</code> | Refresh all namespaces                  | command | `calva.refreshAll`           |

# +Refactor

Key Binding: <code>␣ m languageId:clojure r</code>

Type: <code>bindings</code>

| Key Binding                             | Name                 | Type                             | Command(s) |
| --------------------------------------- | -------------------- | -------------------------------- | ---------- |
| <code>␣ m languageId:clojure r a</code> | +Add                 | [bindings](#add)                 | N/A        |
| <code>␣ m languageId:clojure r c</code> | +Cycle clean convert | [bindings](#cycle-clean-convert) | N/A        |
| <code>␣ m languageId:clojure r e</code> | +Extract expand      | [bindings](#extract-expand)      | N/A        |
| <code>␣ m languageId:clojure r i</code> | +Introduce inline    | [bindings](#introduce-inline)    | N/A        |
| <code>␣ m languageId:clojure r m</code> | +Move                | [bindings](#move)                | N/A        |
| <code>␣ m languageId:clojure r t</code> | +Thread macros       | [bindings](#thread-macros)       | N/A        |

# +Tests

Key Binding: <code>␣ m languageId:clojure t</code>

Type: <code>bindings</code>

| Key Binding                             | Name                           | Type    | Command(s)                 |
| --------------------------------------- | ------------------------------ | ------- | -------------------------- |
| <code>␣ m languageId:clojure t a</code> | Run all tests                  | command | `calva.runAllTests`        |
| <code>␣ m languageId:clojure t f</code> | Run failing tests              | command | `calva.rerunTests`         |
| <code>␣ m languageId:clojure t n</code> | Run tests in current namespace | command | `calva.runNamespaceTests`  |
| <code>␣ m languageId:clojure t t</code> | Run current test               | command | `calva.runTestUnderCursor` |

# +Toggle

Key Binding: <code>␣ m languageId:clojure T</code>

Type: <code>bindings</code>

| Key Binding                             | Name                        | Type    | Command(s)                |
| --------------------------------------- | --------------------------- | ------- | ------------------------- |
| <code>␣ m languageId:clojure T p</code> | Toggle pretty print results | command | `calva.togglePrettyPrint` |

# +Format

Key Binding: <code>␣ m languageId:c =</code>

Type: <code>bindings</code>

| Key Binding                       | Name                            | Type    | Command(s)                               |
| --------------------------------- | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:c = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:c = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:c = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:c = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:c = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:c = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend

Key Binding: <code>␣ m languageId:c b</code>

Type: <code>bindings</code>

| Key Binding                       | Name             | Type    | Command(s)              |
| --------------------------------- | ---------------- | ------- | ----------------------- |
| <code>␣ m languageId:c b d</code> | Reset Database   | command | `C_Cpp.ResetDatabase`   |
| <code>␣ m languageId:c b w</code> | Rescan Workspace | command | `C_Cpp.RescanWorkspace` |

# +Go to

Key Binding: <code>␣ m languageId:c g</code>

Type: <code>bindings</code>

| Key Binding                       | Name                    | Type    | Command(s)                                        |
| --------------------------------- | ----------------------- | ------- | ------------------------------------------------- |
| <code>␣ m languageId:c g a</code> | Switch Header/Source    | command | `C_Cpp.SwitchHeaderSource`                        |
| <code>␣ m languageId:c g d</code> | Go to declaration       | command | `editor.action.revealDeclaration`                 |
| <code>␣ m languageId:c g e</code> | Go to errors/problems   | command | `workbench.actions.view.problems`                 |
| <code>␣ m languageId:c g f</code> | Go to file in explorer  | command | `workbench.files.action.showActiveFileInExplorer` |
| <code>␣ m languageId:c g g</code> | Go to definition        | command | `editor.action.revealDefinition`                  |
| <code>␣ m languageId:c g r</code> | Go to reference         | command | `editor.action.goToReferences`                    |
| <code>␣ m languageId:c g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`                     |
| <code>␣ m languageId:c g R</code> | Find references         | command | `references-view.findReferences`                  |
| <code>␣ m languageId:c g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`                 |

# +Refactor

Key Binding: <code>␣ m languageId:c r</code>

Type: <code>bindings</code>

| Key Binding                       | Name          | Type    | Command(s)             |
| --------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:c r r</code> | Rename Symbol | command | `editor.action.rename` |

# +Peek

Key Binding: <code>␣ m languageId:c G</code>

Type: <code>bindings</code>

| Key Binding                       | Name             | Type    | Command(s)                              |
| --------------------------------- | ---------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:c G d</code> | Peek declaration | command | `editor.action.peekDeclaration`         |
| <code>␣ m languageId:c G g</code> | Peek definition  | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:c G r</code> | Peek references  | command | `editor.action.referenceSearch.trigger` |

# Ask prover

Key Binding: <code>␣ m languageId:coq a</code>

Type: <code>bindings</code>

| Key Binding                         | Name   | Type    | Command(s)                          |
| ----------------------------------- | ------ | ------- | ----------------------------------- |
| <code>␣ m languageId:coq a a</code> | About  | command | `extension.coq.query.prompt.about`  |
| <code>␣ m languageId:coq a c</code> | Check  | command | `extension.coq.query.prompt.check`  |
| <code>␣ m languageId:coq a f</code> | Find   | command | `extension.coq.query.prompt.search` |
| <code>␣ m languageId:coq a l</code> | Locate | command | `extension.coq.query.prompt.locate` |
| <code>␣ m languageId:coq a p</code> | Print  | command | `extension.coq.query.prompt.print`  |

# Send command to prover

Key Binding: <code>␣ m languageId:coq p</code>

Type: <code>bindings</code>

| Key Binding                         | Name                     | Type    | Command(s)                         |
| ----------------------------------- | ------------------------ | ------- | ---------------------------------- |
| <code>␣ m languageId:coq p f</code> | Finish coq computations  | command | `extension.coq.finishComputations` |
| <code>␣ m languageId:coq p i</code> | Interrupt coqtop backend | command | `extension.coq.interrupt`          |
| <code>␣ m languageId:coq p q</code> | Quit coqtop backend      | command | `extension.coq.quit`               |
| <code>␣ m languageId:coq p r</code> | Reset coqtop backend     | command | `extension.coq.reset`              |

# Query prover about foucsed symbol

Key Binding: <code>␣ m languageId:coq q</code>

Type: <code>bindings</code>

| Key Binding                         | Name   | Type    | Command(s)                   |
| ----------------------------------- | ------ | ------- | ---------------------------- |
| <code>␣ m languageId:coq q a</code> | About  | command | `extension.coq.query.about`  |
| <code>␣ m languageId:coq q c</code> | Check  | command | `extension.coq.query.check`  |
| <code>␣ m languageId:coq q f</code> | Find   | command | `extension.coq.query.search` |
| <code>␣ m languageId:coq q l</code> | Locate | command | `extension.coq.query.locate` |
| <code>␣ m languageId:coq q p</code> | Print  | command | `extension.coq.query.print`  |

# UI toggle

Key Binding: <code>␣ m languageId:coq T</code>

Type: <code>bindings</code>

| Key Binding                         | Name                                             | Type    | Command(s)                                                  |
| ----------------------------------- | ------------------------------------------------ | ------- | ----------------------------------------------------------- |
| <code>␣ m languageId:coq T b</code> | Toggle display of all basic low level contents   | command | `extension.coq.display.toggle.allBasicLowLevelContents`     |
| <code>␣ m languageId:coq T c</code> | Toggle display of coercions                      | command | `extension.coq.display.toggle.coercions`                    |
| <code>␣ m languageId:coq T e</code> | Toggle display of existential variable instances | command | `extension.coq.display.toggle.existentialVariableInstances` |
| <code>␣ m languageId:coq T i</code> | Toggle display of implicit arguments             | command | `extension.coq.display.toggle.implicitArguments`            |
| <code>␣ m languageId:coq T l</code> | Toggle display of all lowLevel contents          | command | `extension.coq.display.toggle.allLowLevelContents`          |
| <code>␣ m languageId:coq T n</code> | Toggle display of notations                      | command | `extension.coq.display.toggle.notations`                    |
| <code>␣ m languageId:coq T r</code> | Toggle display of raw matching expressions       | command | `extension.coq.display.toggle.rawMatchingExpressions`       |
| <code>␣ m languageId:coq T u</code> | Toggle display of universe levels                | command | `extension.coq.display.toggle.universeLevels`               |

# +Format

Key Binding: <code>␣ m languageId:cpp =</code>

Type: <code>bindings</code>

| Key Binding                         | Name                            | Type    | Command(s)                               |
| ----------------------------------- | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:cpp = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:cpp = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:cpp = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:cpp = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:cpp = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:cpp = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend

Key Binding: <code>␣ m languageId:cpp b</code>

Type: <code>bindings</code>

| Key Binding                         | Name             | Type    | Command(s)              |
| ----------------------------------- | ---------------- | ------- | ----------------------- |
| <code>␣ m languageId:cpp b d</code> | Reset Database   | command | `C_Cpp.ResetDatabase`   |
| <code>␣ m languageId:cpp b w</code> | Rescan Workspace | command | `C_Cpp.RescanWorkspace` |

# +Go to

Key Binding: <code>␣ m languageId:cpp g</code>

Type: <code>bindings</code>

| Key Binding                         | Name                    | Type    | Command(s)                                        |
| ----------------------------------- | ----------------------- | ------- | ------------------------------------------------- |
| <code>␣ m languageId:cpp g a</code> | Switch Header/Source    | command | `C_Cpp.SwitchHeaderSource`                        |
| <code>␣ m languageId:cpp g d</code> | Go to declaration       | command | `editor.action.revealDeclaration`                 |
| <code>␣ m languageId:cpp g e</code> | Go to errors/problems   | command | `workbench.actions.view.problems`                 |
| <code>␣ m languageId:cpp g f</code> | Go to file in explorer  | command | `workbench.files.action.showActiveFileInExplorer` |
| <code>␣ m languageId:cpp g g</code> | Go to definition        | command | `editor.action.revealDefinition`                  |
| <code>␣ m languageId:cpp g r</code> | Go to reference         | command | `editor.action.goToReferences`                    |
| <code>␣ m languageId:cpp g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`                     |
| <code>␣ m languageId:cpp g R</code> | Find references         | command | `references-view.findReferences`                  |
| <code>␣ m languageId:cpp g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`                 |

# +Refactor

Key Binding: <code>␣ m languageId:cpp r</code>

Type: <code>bindings</code>

| Key Binding                         | Name          | Type    | Command(s)             |
| ----------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:cpp r r</code> | Rename Symbol | command | `editor.action.rename` |

# +Peek

Key Binding: <code>␣ m languageId:cpp G</code>

Type: <code>bindings</code>

| Key Binding                         | Name             | Type    | Command(s)                              |
| ----------------------------------- | ---------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:cpp G d</code> | Peek declaration | command | `editor.action.peekDeclaration`         |
| <code>␣ m languageId:cpp G g</code> | Peek definition  | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:cpp G r</code> | Peek references  | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:csharp =</code>

Type: <code>bindings</code>

| Key Binding                            | Name                             | Type    | Command(s)                               |
| -------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:csharp = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:csharp = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:csharp = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:csharp = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:csharp = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:csharp = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend/OmniSharp

Key Binding: <code>␣ m languageId:csharp b</code>

Type: <code>bindings</code>

| Key Binding                            | Name                       | Type    | Command(s)              |
| -------------------------------------- | -------------------------- | ------- | ----------------------- |
| <code>␣ m languageId:csharp b o</code> | Show output                | command | `o.showOutput`          |
| <code>␣ m languageId:csharp b r</code> | Restart OmniSharp          | command | `o.restart`             |
| <code>␣ m languageId:csharp b s</code> | Select a project and start | command | `o.pickProjectAndStart` |

# +Debug

Key Binding: <code>␣ m languageId:csharp d</code>

Type: <code>bindings</code>

| Key Binding                            | Name                             | Type    | Command(s)                 |
| -------------------------------------- | -------------------------------- | ------- | -------------------------- |
| <code>␣ m languageId:csharp d l</code> | List process for attach          | command | `csharp.listProcess`       |
| <code>␣ m languageId:csharp d L</code> | List remote processes for attach | command | `csharp.listRemoteProcess` |

# +Go to

Key Binding: <code>␣ m languageId:csharp g</code>

Type: <code>bindings</code>

| Key Binding                            | Name                  | Type    | Command(s)                            |
| -------------------------------------- | --------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:csharp g d</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:csharp g e</code> | Go to errors/problems | command | `workbench.action.problems.focus`     |
| <code>␣ m languageId:csharp g g</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:csharp g i</code> | Go to implementations | command | `editor.action.goToImplementation`    |
| <code>␣ m languageId:csharp g r</code> | Go to references      | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:csharp g I</code> | Find implementations  | command | `references-view.findImplementations` |
| <code>␣ m languageId:csharp g R</code> | Find references       | command | `references-view.findReferences`      |

# +Project

Key Binding: <code>␣ m languageId:csharp p</code>

Type: <code>bindings</code>

| Key Binding                            | Name                 | Type    | Command(s)               |
| -------------------------------------- | -------------------- | ------- | ------------------------ |
| <code>␣ m languageId:csharp p r</code> | Restore project      | command | `dotnet.restore.project` |
| <code>␣ m languageId:csharp p R</code> | Restore all projects | command | `dotnet.restore.all`     |

# +Refactor

Key Binding: <code>␣ m languageId:csharp r</code>

Type: <code>bindings</code>

| Key Binding                            | Name          | Type    | Command(s)               |
| -------------------------------------- | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:csharp r .</code> | Quick fix     | command | `editor.action.quickFix` |
| <code>␣ m languageId:csharp r r</code> | Rename symbol | command | `editor.action.rename`   |

# +Test

Key Binding: <code>␣ m languageId:csharp t</code>

Type: <code>bindings</code>

| Key Binding                            | Name                    | Type    | Command(s)                        |
| -------------------------------------- | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:csharp t d</code> | Debug test under cursor | command | `dotnet.test.debugTestsInContext` |
| <code>␣ m languageId:csharp t t</code> | Run test under cursor   | command | `dotnet.test.runTestsInContext`   |

# +Peek

Key Binding: <code>␣ m languageId:csharp G</code>

Type: <code>bindings</code>

| Key Binding                            | Name                 | Type    | Command(s)                              |
| -------------------------------------- | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:csharp G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:csharp G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:csharp G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:dart =</code>

Type: <code>bindings</code>

| Key Binding                          | Name                             | Type    | Command(s)                               |
| ------------------------------------ | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:dart = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:dart = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:dart = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:dart = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:dart = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:dart = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:dart g</code>

Type: <code>bindings</code>

| Key Binding                          | Name                           | Type    | Command(s)                            |
| ------------------------------------ | ------------------------------ | ------- | ------------------------------------- |
| <code>␣ m languageId:dart g d</code> | Go to definition               | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:dart g e</code> | Go to errors/problems          | command | `workbench.action.problems.focus`     |
| <code>␣ m languageId:dart g g</code> | Go to definition               | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:dart g i</code> | Go to implementations          | command | `editor.action.goToImplementation`    |
| <code>␣ m languageId:dart g r</code> | Go to references               | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:dart g s</code> | Go to super                    | command | `dart.goToSuper`                      |
| <code>␣ m languageId:dart g t</code> | Go to test/implementation file | command | `dart.goToTestOrImplementationFile`   |
| <code>␣ m languageId:dart g I</code> | Find implementations           | command | `references-view.findImplementations` |
| <code>␣ m languageId:dart g R</code> | Find references                | command | `references-view.findReferences`      |
| <code>␣ m languageId:dart g T</code> | Go to tests                    | command | `dart.goToTests`                      |

# +Logging

Key Binding: <code>␣ m languageId:dart l</code>

Type: <code>bindings</code>

| Key Binding                          | Name                          | Type    | Command(s)                        |
| ------------------------------------ | ----------------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:dart l a</code> | Start logging analysis server | command | `dart.startLoggingAnalysisServer` |
| <code>␣ m languageId:dart l d</code> | Start logging debugging       | command | `dart.startLoggingDebugging`      |
| <code>␣ m languageId:dart l e</code> | Start logging extension only  | command | `dart.startLoggingExtensionOnly`  |
| <code>␣ m languageId:dart l s</code> | Start logging                 | command | `dart.startLogging`               |
| <code>␣ m languageId:dart l S</code> | Stop logging                  | command | `dart.stopLogging`                |

# +Open

Key Binding: <code>␣ m languageId:dart o</code>

Type: <code>bindings</code>

| Key Binding                          | Name                  | Type    | Command(s)                     |
| ------------------------------------ | --------------------- | ------- | ------------------------------ |
| <code>␣ m languageId:dart o a</code> | Analyzer diagnostics  | command | `dart.openAnalyzerDiagnostics` |
| <code>␣ m languageId:dart o c</code> | DevTools CPU profiler | command | `dart.startLoggingDebugging`   |
| <code>␣ m languageId:dart o d</code> | Devtools              | command | `flutter.openDevTools`         |
| <code>␣ m languageId:dart o l</code> | DevTools logging      | command | `dart.openDevToolsLogging`     |
| <code>␣ m languageId:dart o m</code> | DevTools memory       | command | `dart.openDevToolsMemory`      |
| <code>␣ m languageId:dart o n</code> | DevTools network      | command | `dart.openDevToolsNetwork`     |

# +Project/Packages

Key Binding: <code>␣ m languageId:dart p</code>

Type: <code>bindings</code>

| Key Binding                          | Name                        | Type                | Command(s)                               |
| ------------------------------------ | --------------------------- | ------------------- | ---------------------------------------- |
| <code>␣ m languageId:dart p d</code> | Add dependency              | command             | `dart.addDependency`                     |
| <code>␣ m languageId:dart p g</code> | Pub get                     | command             | `flutter.packages.get`                   |
| <code>␣ m languageId:dart p o</code> | Pub outdated                | command             | `flutter.packages.outdated`              |
| <code>␣ m languageId:dart p u</code> | Pub upgrade                 | command             | `flutter.packages.upgrade`               |
| <code>␣ m languageId:dart p D</code> | Add dev dependency          | command             | `dart.addDevDependency`                  |
| <code>␣ m languageId:dart p U</code> | Pub upgrade -major versions | command             | `flutter.packages.upgrade.majorVersions` |
| <code>␣ m languageId:dart p c</code> | +Create                     | [bindings](#create) | N/A                                      |

# +Refactor

Key Binding: <code>␣ m languageId:dart r</code>

Type: <code>bindings</code>

| Key Binding                          | Name          | Type    | Command(s)               |
| ------------------------------------ | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:dart r .</code> | Quick fix     | command | `editor.action.quickFix` |
| <code>␣ m languageId:dart r r</code> | Rename symbol | command | `editor.action.rename`   |

# +Test

Key Binding: <code>␣ m languageId:dart t</code>

Type: <code>bindings</code>

| Key Binding                          | Name                 | Type    | Command(s)                  |
| ------------------------------------ | -------------------- | ------- | --------------------------- |
| <code>␣ m languageId:dart t c</code> | Clear test results   | command | `testing.clearTestResults`  |
| <code>␣ m languageId:dart t d</code> | Debug test at cursor | command | `testing.debugTestAtCursor` |
| <code>␣ m languageId:dart t f</code> | Run failed tests     | command | `testing.reRunFailTests`    |
| <code>␣ m languageId:dart t r</code> | Run tests            | command | `testing.runAll`            |
| <code>␣ m languageId:dart t t</code> | Run test at cursor   | command | `testing.runTestAtCursor`   |

# +Peek

Key Binding: <code>␣ m languageId:dart G</code>

Type: <code>bindings</code>

| Key Binding                          | Name                 | Type    | Command(s)                              |
| ------------------------------------ | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:dart G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:dart G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:dart G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |

# +Toggle

Key Binding: <code>␣ m languageId:dart T</code>

Type: <code>bindings</code>

| Key Binding                          | Name                | Type    | Command(s)                         |
| ------------------------------------ | ------------------- | ------- | ---------------------------------- |
| <code>␣ m languageId:dart T b</code> | Brightness          | command | `flutter.toggleBrightness`         |
| <code>␣ m languageId:dart T d</code> | Debug painting      | command | `flutter.toggleDebugPainting`      |
| <code>␣ m languageId:dart T e</code> | Check elevations    | command | `flutter.toggleCheckElevations`    |
| <code>␣ m languageId:dart T o</code> | Performance overlay | command | `flutter.togglePerformanceOverlay` |
| <code>␣ m languageId:dart T p</code> | Paint baselines     | command | `flutter.togglePaintBaselines`     |
| <code>␣ m languageId:dart T r</code> | Repaint rainbow     | command | `flutter.toggleRepaintRainbow`     |
| <code>␣ m languageId:dart T s</code> | Slow animations     | command | `flutter.toggleSlowAnimations`     |
| <code>␣ m languageId:dart T B</code> | Debug mode banner   | command | `flutter.toggleDebugModeBanner`    |

# +Format

Key Binding: <code>␣ m languageId:elixir =</code>

Type: <code>bindings</code>

| Key Binding                            | Name                             | Type    | Command(s)                               |
| -------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:elixir = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:elixir = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:elixir = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:elixir = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:elixir = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:elixir = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:elixir g</code>

Type: <code>bindings</code>

| Key Binding                            | Name                  | Type    | Command(s)                            |
| -------------------------------------- | --------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:elixir g d</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:elixir g e</code> | Go to errors/problems | command | `workbench.action.problems.focus`     |
| <code>␣ m languageId:elixir g g</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:elixir g i</code> | Go to implementations | command | `editor.action.goToImplementation`    |
| <code>␣ m languageId:elixir g r</code> | Go to references      | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:elixir g I</code> | Find implementations  | command | `references-view.findImplementations` |
| <code>␣ m languageId:elixir g R</code> | Find references       | command | `references-view.findReferences`      |

# +Refactor

Key Binding: <code>␣ m languageId:elixir r</code>

Type: <code>bindings</code>

| Key Binding                            | Name                                     | Type    | Command(s)               |
| -------------------------------------- | ---------------------------------------- | ------- | ------------------------ |
| <code>␣ m languageId:elixir r .</code> | Quick fix                                | command | `editor.action.quickFix` |
| <code>␣ m languageId:elixir r p</code> | Transform function call to pipe operator | command | `extension.toPipe`       |
| <code>␣ m languageId:elixir r r</code> | Rename symbol                            | command | `editor.action.rename`   |
| <code>␣ m languageId:elixir r P</code> | Transform pipe operator to function call | command | `extension.fromPipe`     |

# +Peek

Key Binding: <code>␣ m languageId:elixir G</code>

Type: <code>bindings</code>

| Key Binding                            | Name                 | Type    | Command(s)                              |
| -------------------------------------- | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:elixir G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:elixir G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:elixir G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:fsharp =</code>

Type: <code>bindings</code>

| Key Binding                            | Name                             | Type    | Command(s)                               |
| -------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:fsharp = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:fsharp = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:fsharp = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:fsharp = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:fsharp = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:fsharp = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Compile

Key Binding: <code>␣ m languageId:fsharp c</code>

Type: <code>bindings</code>

| Key Binding                            | Name                               | Type    | Command(s)                       |
| -------------------------------------- | ---------------------------------- | ------- | -------------------------------- |
| <code>␣ m languageId:fsharp c c</code> | MSBuild: Build current solution    | command | `MSBuild.buildCurrentSolution`   |
| <code>␣ m languageId:fsharp c d</code> | F#: Run default project            | command | `fsharp.runDefaultProject`       |
| <code>␣ m languageId:fsharp c l</code> | MSBuild: Clean current solution    | command | `MSBuild.cleanCurrentSolution`   |
| <code>␣ m languageId:fsharp c p</code> | MSBuild: Build current project     | command | `MSBuild.buildCurrent`           |
| <code>␣ m languageId:fsharp c r</code> | MSBuild: Re-build current solution | command | `MSBuild.rebuildCurrentSolution` |
| <code>␣ m languageId:fsharp c D</code> | F#: Debug default project          | command | `fsharp.debugDefaultProject`     |
| <code>␣ m languageId:fsharp c L</code> | MSBuild: Clean current project     | command | `MSBuild.cleanCurrent`           |

# +Go to

Key Binding: <code>␣ m languageId:fsharp g</code>

Type: <code>bindings</code>

| Key Binding                            | Name                   | Type    | Command(s)                            |
| -------------------------------------- | ---------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:fsharp g d</code> | Go to definition       | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:fsharp g e</code> | Go to errors/problems  | command | `workbench.action.problems.focus`     |
| <code>␣ m languageId:fsharp g g</code> | Go to definition       | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:fsharp g r</code> | Go to reference        | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:fsharp g s</code> | Go to symbol in buffer | command | `workbench.action.gotoSymbol`         |
| <code>␣ m languageId:fsharp g t</code> | Go to type definition  | command | `editor.action.goToTypeDefinition`    |
| <code>␣ m languageId:fsharp g I</code> | Find implementations   | command | `references-view.findImplementations` |
| <code>␣ m languageId:fsharp g R</code> | Find references        | command | `references-view.findReferences`      |

# +Refactor

Key Binding: <code>␣ m languageId:fsharp r</code>

Type: <code>bindings</code>

| Key Binding                            | Name          | Type    | Command(s)             |
| -------------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:fsharp r r</code> | Rename symbol | command | `editor.action.rename` |

# +FSI REPL

Key Binding: <code>␣ m languageId:fsharp s</code>

Type: <code>bindings</code>

| Key Binding                            | Name                              | Type    | Command(s)                      |
| -------------------------------------- | --------------------------------- | ------- | ------------------------------- |
| <code>␣ m languageId:fsharp s f</code> | FSI: Send file                    | command | `fsi.SendFile`                  |
| <code>␣ m languageId:fsharp s l</code> | FSI: Send line                    | command | `fsi.SendLine`                  |
| <code>␣ m languageId:fsharp s s</code> | FSI: Send selection               | command | `fsi.SendSelection`             |
| <code>␣ m languageId:fsharp s G</code> | FSI: Generate project references  | command | `fsi.GenerateProjectReferences` |
| <code>␣ m languageId:fsharp s L</code> | FSI: Send last selection          | command | `fsi.SendLastSelection`         |
| <code>␣ m languageId:fsharp s P</code> | FSI: Send references from project | command | `fsi.SendProjectReferences`     |
| <code>␣ m languageId:fsharp s S</code> | FSI: Start                        | command | `fsi.Start`                     |

# +Peek

Key Binding: <code>␣ m languageId:fsharp G</code>

Type: <code>bindings</code>

| Key Binding                            | Name                 | Type    | Command(s)                              |
| -------------------------------------- | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:fsharp G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:fsharp G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |
| <code>␣ m languageId:fsharp G t</code> | Peek type definition | command | `editor.action.peekTypeDefinition`      |

# +Format

Key Binding: <code>␣ m languageId:go =</code>

Type: <code>bindings</code>

| Key Binding                        | Name                             | Type    | Command(s)                               |
| ---------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:go = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:go = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:go = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:go = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:go = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:go = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Actions

Key Binding: <code>␣ m languageId:go a</code>

Type: <code>bindings</code>

| Key Binding                        | Name                      | Type                           | Command(s)      |
| ---------------------------------- | ------------------------- | ------------------------------ | --------------- |
| <code>␣ m languageId:go a P</code> | Run code on Go Playground | command                        | `go.playground` |
| <code>␣ m languageId:go a p</code> | +Package actions          | [bindings](#package-actions)   | N/A             |
| <code>␣ m languageId:go a w</code> | +Workspace actions        | [bindings](#workspace-actions) | N/A             |

# +Backend/environment

Key Binding: <code>␣ m languageId:go b</code>

Type: <code>bindings</code>

| Key Binding                        | Name                       | Type    | Command(s)                  |
| ---------------------------------- | -------------------------- | ------- | --------------------------- |
| <code>␣ m languageId:go b e</code> | Choose Go environment      | command | `go.environment.choose`     |
| <code>␣ m languageId:go b g</code> | Show current GOPATH        | command | `go.gopath`                 |
| <code>␣ m languageId:go b i</code> | Install/update tools       | command | `go.tools.install`          |
| <code>␣ m languageId:go b l</code> | Locate configured Go tools | command | `go.locate.tools`           |
| <code>␣ m languageId:go b R</code> | Restart language server    | command | `go.languageserver.restart` |

# +Go to

Key Binding: <code>␣ m languageId:go g</code>

Type: <code>bindings</code>

| Key Binding                        | Name                  | Type    | Command(s)                            |
| ---------------------------------- | --------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:go g d</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:go g e</code> | Go to errors/problems | command | `workbench.action.problems.focus`     |
| <code>␣ m languageId:go g g</code> | Go to definition      | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:go g h</code> | Show call hierarchy   | command | `references-view.showCallHierarchy`   |
| <code>␣ m languageId:go g i</code> | Go to implementations | command | `editor.action.goToImplementation`    |
| <code>␣ m languageId:go g r</code> | Go to references      | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:go g t</code> | Go to type definition | command | `editor.action.goToTypeDefinition`    |
| <code>␣ m languageId:go g I</code> | Find implementations  | command | `references-view.findImplementations` |
| <code>␣ m languageId:go g R</code> | Find references       | command | `references-view.findReferences`      |

# +Insert/remove

Key Binding: <code>␣ m languageId:go i</code>

Type: <code>bindings</code>

| Key Binding                        | Name                           | Type    | Command(s)       |
| ---------------------------------- | ------------------------------ | ------- | ---------------- |
| <code>␣ m languageId:go i f</code> | Fill struct                    | command | `go.fill.struct` |
| <code>␣ m languageId:go i i</code> | Add import                     | command | `go.import.add`  |
| <code>␣ m languageId:go i t</code> | Add tags to struct fields      | command | `go.add.tags`    |
| <code>␣ m languageId:go i I</code> | Generate interface stubs       | command | `go.impl.cursor` |
| <code>␣ m languageId:go i T</code> | Remove tags from struct fields | command | `go.remove.tags` |

# +Refactor

Key Binding: <code>␣ m languageId:go r</code>

Type: <code>bindings</code>

| Key Binding                        | Name                            | Type    | Command(s)                 |
| ---------------------------------- | ------------------------------- | ------- | -------------------------- |
| <code>␣ m languageId:go r .</code> | Quick fix                       | command | `editor.action.quickFix`   |
| <code>␣ m languageId:go r e</code> | Extract to function or variable | command | `editor.action.codeAction` |
| <code>␣ m languageId:go r r</code> | Rename symbol                   | command | `editor.action.rename`     |

# +Test

Key Binding: <code>␣ m languageId:go t</code>

Type: <code>bindings</code>

| Key Binding                        | Name                       | Type                    | Command(s)              |
| ---------------------------------- | -------------------------- | ----------------------- | ----------------------- |
| <code>␣ m languageId:go t c</code> | Cancel running tests       | command                 | `go.test.cancel`        |
| <code>␣ m languageId:go t d</code> | Debug test at cursor       | command                 | `go.debug.cursor`       |
| <code>␣ m languageId:go t f</code> | Test file                  | command                 | `go.test.file`          |
| <code>␣ m languageId:go t l</code> | Test previous              | command                 | `go.test.previous`      |
| <code>␣ m languageId:go t p</code> | Test package               | command                 | `go.test.package`       |
| <code>␣ m languageId:go t s</code> | Subtest at cursor          | command                 | `go.subtest.cursor`     |
| <code>␣ m languageId:go t t</code> | Test function at cursor    | command                 | `go.test.cursor`        |
| <code>␣ m languageId:go t w</code> | Test packages in workspace | command                 | `go.test.workspace`     |
| <code>␣ m languageId:go t P</code> | Apply cover profile        | command                 | `go.apply.coverprofile` |
| <code>␣ m languageId:go t b</code> | +Benchmarks                | [bindings](#benchmarks) | N/A                     |
| <code>␣ m languageId:go t g</code> | +Generate                  | [bindings](#generate)   | N/A                     |
| <code>␣ m languageId:go t T</code> | +Toggle                    | [bindings](#toggle)     | N/A                     |

# +Peek

Key Binding: <code>␣ m languageId:go G</code>

Type: <code>bindings</code>

| Key Binding                        | Name                 | Type    | Command(s)                              |
| ---------------------------------- | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:go G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:go G h</code> | Peek call hierarchy  | command | `editor.showCallHierarchy`              |
| <code>␣ m languageId:go G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:go G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:java =</code>

Type: <code>bindings</code>

| Key Binding                          | Name                            | Type    | Command(s)                               |
| ------------------------------------ | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:java = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:java = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:java = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:java = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:java = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:java = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Code actions

Key Binding: <code>␣ m languageId:java a</code>

Type: <code>bindings</code>

| Key Binding                          | Name                | Type    | Command(s)                   |
| ------------------------------------ | ------------------- | ------- | ---------------------------- |
| <code>␣ m languageId:java a a</code> | Execute code action | command | `editor.action.codeAction`   |
| <code>␣ m languageId:java a f</code> | Execute fix action  | command | `editor.action.quickFix`     |
| <code>␣ m languageId:java a r</code> | Refactor action     | command | `editor.action.refactor`     |
| <code>␣ m languageId:java a s</code> | Source action       | command | `editor.action.sourceAction` |

# +Go to

Key Binding: <code>␣ m languageId:java g</code>

Type: <code>bindings</code>

| Key Binding                          | Name                       | Type    | Command(s)                                  |
| ------------------------------------ | -------------------------- | ------- | ------------------------------------------- |
| <code>␣ m languageId:java g d</code> | Go to definition           | command | `editor.action.revealDefinition`            |
| <code>␣ m languageId:java g e</code> | Go to error list           | command | `workbench.action.showErrorsWarnings`       |
| <code>␣ m languageId:java g h</code> | Show call hierarchy        | command | `references-view.showCallHierarchy`         |
| <code>␣ m languageId:java g i</code> | Go to implementations      | command | `editor.action.goToImplementation`          |
| <code>␣ m languageId:java g o</code> | Go to super implementation | command | `java.action.navigateToSuperImplementation` |
| <code>␣ m languageId:java g r</code> | Go to references           | command | `editor.action.goToReferences`              |
| <code>␣ m languageId:java g s</code> | Go to symbol in buffer     | command | `workbench.action.gotoSymbol`               |
| <code>␣ m languageId:java g t</code> | Go to type definition      | command | `editor.action.goToTypeDefinition`          |
| <code>␣ m languageId:java g u</code> | Go to subtype hierarchy    | command | `java.action.showSubtypeHierarchy`          |
| <code>␣ m languageId:java g H</code> | Go to type hierarchy       | command | `java.action.showTypeHierarchy`             |
| <code>␣ m languageId:java g I</code> | Find implementations       | command | `references-view.findImplementations`       |
| <code>␣ m languageId:java g R</code> | Find references            | command | `references-view.findReferences`            |
| <code>␣ m languageId:java g S</code> | Go to symbol in project    | command | `workbench.action.showAllSymbols`           |
| <code>␣ m languageId:java g T</code> | Go to test                 | command | `java.test.goToTest`                        |
| <code>␣ m languageId:java g U</code> | Go to supertype hierarchy  | command | `java.action.showSupertypeHierarchy`        |

# +Refactor

Key Binding: <code>␣ m languageId:java r</code>

Type: <code>bindings</code>

| Key Binding                          | Name                            | Type    | Command(s)                      |
| ------------------------------------ | ------------------------------- | ------- | ------------------------------- |
| <code>␣ m languageId:java r a</code> | Execute code actions            | command | `editor.action.codeAction`      |
| <code>␣ m languageId:java r e</code> | Extract to function or variable | command | `editor.action.codeAction`      |
| <code>␣ m languageId:java r o</code> | Organize imports                | command | `editor.action.organizeImports` |
| <code>␣ m languageId:java r r</code> | Rename symbol                   | command | `editor.action.rename`          |
| <code>␣ m languageId:java r R</code> | Refactor actions                | command | `editor.action.refactor`        |

# +Test

Key Binding: <code>␣ m languageId:java t</code>

Type: <code>bindings</code>

| Key Binding                          | Name                  | Type    | Command(s)               |
| ------------------------------------ | --------------------- | ------- | ------------------------ |
| <code>␣ m languageId:java t a</code> | Run all tests         | command | `testing.runAll`         |
| <code>␣ m languageId:java t b</code> | Run current test file | command | `testing.runCurrentFile` |
| <code>␣ m languageId:java t r</code> | Re-run failed tests   | command | `testing.reRunFailTests` |
| <code>␣ m languageId:java t t</code> | Select and run test   | command | `testing.runSelected`    |
| <code>␣ m languageId:java t A</code> | Debug all tests       | command | `testing.debugAll`       |
| <code>␣ m languageId:java t T</code> | Select and debug test | command | `testing.debugSelected`  |

# +Peek

Key Binding: <code>␣ m languageId:java G</code>

Type: <code>bindings</code>

| Key Binding                          | Name                 | Type    | Command(s)                              |
| ------------------------------------ | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:java G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:java G h</code> | Peek call hierarchy  | command | `editor.showCallHierarchy`              |
| <code>␣ m languageId:java G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:java G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |
| <code>␣ m languageId:java G t</code> | Peek type definition | command | `editor.action.peekTypeDefinition`      |

# +Format

Key Binding: <code>␣ m languageId:javascript =</code>

Type: <code>bindings</code>

| Key Binding                                | Name                             | Type    | Command(s)                               |
| ------------------------------------------ | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:javascript = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:javascript = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:javascript = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:javascript = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:javascript = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:javascript = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:javascript g</code>

Type: <code>bindings</code>

| Key Binding                                | Name                    | Type    | Command(s)                            |
| ------------------------------------------ | ----------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:javascript g d</code> | Go to definition        | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:javascript g h</code> | Show call hierarchy     | command | `references-view.showCallHierarchy`   |
| <code>␣ m languageId:javascript g r</code> | Go to reference         | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:javascript g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`         |
| <code>␣ m languageId:javascript g t</code> | Go to type definition   | command | `editor.action.goToTypeDefinition`    |
| <code>␣ m languageId:javascript g I</code> | Find implementations    | command | `references-view.findImplementations` |
| <code>␣ m languageId:javascript g R</code> | Find references         | command | `references-view.findReferences`      |
| <code>␣ m languageId:javascript g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`     |

# +Peek

Key Binding: <code>␣ m languageId:javascript G</code>

Type: <code>bindings</code>

| Key Binding                                | Name                 | Type    | Command(s)                              |
| ------------------------------------------ | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:javascript G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:javascript G h</code> | Peek call hierarchy  | command | `editor.showCallHierarchy`              |
| <code>␣ m languageId:javascript G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:javascript G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |
| <code>␣ m languageId:javascript G t</code> | Peek type definition | command | `editor.action.peekTypeDefinition`      |

# +Format

Key Binding: <code>␣ m languageId:julia =</code>

Type: <code>bindings</code>

| Key Binding                           | Name                             | Type    | Command(s)                               |
| ------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:julia = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:julia = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:julia = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:julia = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:julia = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:julia = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend

Key Binding: <code>␣ m languageId:julia b</code>

Type: <code>bindings</code>

| Key Binding                           | Name                           | Type    | Command(s)                             |
| ------------------------------------- | ------------------------------ | ------- | -------------------------------------- |
| <code>␣ m languageId:julia b i</code> | Re-index language server cache | command | `language-julia.refreshLanguageServer` |
| <code>␣ m languageId:julia b l</code> | Toggle linter                  | command | `language-julia.toggleLinter`          |
| <code>␣ m languageId:julia b r</code> | Restart language server        | command | `language-julia.restartLanguageServer` |

# +Compile/debug

Key Binding: <code>␣ m languageId:julia c</code>

Type: <code>bindings</code>

| Key Binding                           | Name                                              | Type    | Command(s)                                       |
| ------------------------------------- | ------------------------------------------------- | ------- | ------------------------------------------------ |
| <code>␣ m languageId:julia c a</code> | Add to compiled modules/functions                 | command | `language-julia.switchToCompiled`                |
| <code>␣ m languageId:julia c c</code> | Switch all to compiled                            | command | `language-julia.switchAllToCompiled`             |
| <code>␣ m languageId:julia c d</code> | Debug file in new process                         | command | `language-julia.debugEditorContents`             |
| <code>␣ m languageId:julia c i</code> | Switch all to interpreted                         | command | `language-julia.switchAllToInterpreted`          |
| <code>␣ m languageId:julia c m</code> | Enable compiled mode for the debugger             | command | `language-julia.enable-compiled-mode`            |
| <code>␣ m languageId:julia c r</code> | Refresh compiled/interpreted pane                 | command | `language-julia.refreshCompiled`                 |
| <code>␣ m languageId:julia c x</code> | Remove from compiled modules/functions            | command | `language-julia.switchToInterpreted`             |
| <code>␣ m languageId:julia c A</code> | Apply default compiled modules/functions          | command | `language-julia.apply-compiled-defaults`         |
| <code>␣ m languageId:julia c D</code> | Clear compiled modules/functions                  | command | `language-julia.reset-compiled`                  |
| <code>␣ m languageId:julia c F</code> | Set current compiled modules/functions as default | command | `language-julia.set-current-as-default-compiled` |
| <code>␣ m languageId:julia c M</code> | Disable compiled mode for the debugger            | command | `language-julia.disable-compiled-mode`           |
| <code>␣ m languageId:julia c R</code> | Restart kernel                                    | command | `language-julia.restartKernel`                   |
| <code>␣ m languageId:julia c S</code> | Stop kernel                                       | command | `language-julia.stopKernel`                      |
| <code>␣ m languageId:julia c Y</code> | Add symbol to compiled modules/functions          | command | `language-julia.set-compiled-for-name`           |

# +Clear

Key Binding: <code>␣ m languageId:julia c</code>

Type: <code>bindings</code>

| Key Binding                           | Name                               | Type    | Command(s)                                     |
| ------------------------------------- | ---------------------------------- | ------- | ---------------------------------------------- |
| <code>␣ m languageId:julia c c</code> | Clear current inline results       | command | `language-julia.clearCurrentInlineResult`      |
| <code>␣ m languageId:julia c C</code> | Clear all inline results           | command | `language-julia.clearAllInlineResults`         |
| <code>␣ m languageId:julia c K</code> | Clear all inline results in editor | command | `language-julia.clearAllInlineResultsInEditor` |

# +Environment/package

Key Binding: <code>␣ m languageId:julia e</code>

Type: <code>bindings</code>

| Key Binding                           | Name                        | Type    | Command(s)                                |
| ------------------------------------- | --------------------------- | ------- | ----------------------------------------- |
| <code>␣ m languageId:julia e a</code> | Activate this environment   | command | `language-julia.changeCurrentEnvironment` |
| <code>␣ m languageId:julia e c</code> | Change current environment  | command | `language-julia.changeCurrentEnvironment` |
| <code>␣ m languageId:julia e m</code> | Choose module               | command | `language-julia.chooseModule`             |
| <code>␣ m languageId:julia e p</code> | Activate parent environment | command | `language-julia.changeCurrentEnvironment` |
| <code>␣ m languageId:julia e t</code> | Tag new package version     | command | `language-julia.tagNewPackageVersion`     |
| <code>␣ m languageId:julia e P</code> | Open package directory      | command | `language-julia.openPackageDirectory`     |

# +Go to

Key Binding: <code>␣ m languageId:julia g</code>

Type: <code>bindings</code>

| Key Binding                           | Name                    | Type    | Command(s)                        |
| ------------------------------------- | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:julia g d</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:julia g e</code> | Go to errors/problems   | command | `workbench.action.problems.focus` |
| <code>␣ m languageId:julia g g</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:julia g r</code> | Go to references        | command | `editor.action.goToReferences`    |
| <code>␣ m languageId:julia g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`     |
| <code>␣ m languageId:julia g R</code> | Find references         | command | `references-view.findReferences`  |
| <code>␣ m languageId:julia g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols` |

# +Send/REPL

Key Binding: <code>␣ m languageId:julia s</code>

Type: <code>bindings</code>

| Key Binding                           | Name                               | Type    | Command(s)                                          |
| ------------------------------------- | ---------------------------------- | ------- | --------------------------------------------------- |
| <code>␣ m languageId:julia s b</code> | Execute block or selection in REPL | command | `language-julia.executeCodeBlockOrSelection`        |
| <code>␣ m languageId:julia s c</code> | Execute code cell in REPL and move | command | `language-julia.executeCellAndMove`                 |
| <code>␣ m languageId:julia s d</code> | Change directory here              | command | `language-julia.cdHere`                             |
| <code>␣ m languageId:julia s f</code> | Execute file in REPL               | command | `language-julia.executeFile`                        |
| <code>␣ m languageId:julia s i</code> | Start REPL                         | command | `language-julia.startREPL`                          |
| <code>␣ m languageId:julia s m</code> | Execute code in REPL and move      | command | `language-julia.executeCodeBlockOrSelectionAndMove` |
| <code>␣ m languageId:julia s s</code> | Execute code in REPL               | command | `language-julia.executeJuliaCodeInREPL`             |
| <code>␣ m languageId:julia s C</code> | Connect external REPL              | command | `language-julia.connectREPL`                        |
| <code>␣ m languageId:julia s D</code> | Stop REPL                          | command | `language-julia.stopREPL`                           |
| <code>␣ m languageId:julia s F</code> | Execute active file in REPL        | command | `language-julia.executeActiveFile`                  |

# +Format

Key Binding: <code>␣ m languageId:latex =</code>

Type: <code>bindings</code>

| Key Binding                           | Name                    | Type    | Command(s)                      |
| ------------------------------------- | ----------------------- | ------- | ------------------------------- |
| <code>␣ m languageId:latex = =</code> | Format region or buffer | command | `editor.action.format`          |
| <code>␣ m languageId:latex = b</code> | Format buffer           | command | `editor.action.formatDocument`  |
| <code>␣ m languageId:latex = c</code> | Format changes          | command | `editor.action.formatChanges`   |
| <code>␣ m languageId:latex = s</code> | Format selection        | command | `editor.action.formatSelection` |

# +Backend

Key Binding: <code>␣ m languageId:latex b</code>

Type: <code>bindings</code>

| Key Binding                           | Name                                   | Type    | Command(s)                         |
| ------------------------------------- | -------------------------------------- | ------- | ---------------------------------- |
| <code>␣ m languageId:latex b l</code> | View Workshop Messages                 | command | `latex-workshop.log`               |
| <code>␣ m languageId:latex b m</code> | Insert root magic comment              | command | `latex-workshop.addtexroot`        |
| <code>␣ m languageId:latex b s</code> | Select the current environment name    | command | `latex-workshop.select-envname`    |
| <code>␣ m languageId:latex b S</code> | Select the current environment content | command | `latex-workshop.select-envcontent` |

# +Build

Key Binding: <code>␣ m languageId:latex c</code>

Type: <code>bindings</code>

| Key Binding                           | Name                     | Type    | Command(s)                            |
| ------------------------------------- | ------------------------ | ------- | ------------------------------------- |
| <code>␣ m languageId:latex c c</code> | Build Project            | command | `latex-workshop.build`                |
| <code>␣ m languageId:latex c i</code> | Show compilation info    | command | `latex-workshop.showCompilationPanel` |
| <code>␣ m languageId:latex c k</code> | Kill compiler process    | command | `latex-workshop.kill`                 |
| <code>␣ m languageId:latex c l</code> | Clean up auxiliary files | command | `latex-workshop.clean`                |
| <code>␣ m languageId:latex c l</code> | View compiler logs       | command | `latex-workshop.compilerlog`          |
| <code>␣ m languageId:latex c r</code> | Build with recipe        | command | `latex-workshop.recipes`              |

# +Go to

Key Binding: <code>␣ m languageId:latex g</code>

Type: <code>bindings</code>

| Key Binding                           | Name                                | Type    | Command(s)                        |
| ------------------------------------- | ----------------------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:latex g e</code> | Navigate to matching begin/end pair | command | `latex-workshop.navigate-envpair` |

# +Insert

Key Binding: <code>␣ m languageId:latex i</code>

Type: <code>bindings</code>

| Key Binding                           | Name                                   | Type    | Command(s)                     |
| ------------------------------------- | -------------------------------------- | ------- | ------------------------------ |
| <code>␣ m languageId:latex i e</code> | Close current environment              | command | `latex-workshop.close-env`     |
| <code>␣ m languageId:latex i i</code> | item                                   | command | `latex-workshop.shortcut.item` |
| <code>␣ m languageId:latex i w</code> | Surround/wrap selection with begin/end | command | `latex-workshop.wrap-env`      |

# +Bibtex

Key Binding: <code>␣ m languageId:latex l</code>

Type: <code>bindings</code>

| Key Binding                           | Name         | Type    | Command(s)                    |
| ------------------------------------- | ------------ | ------- | ----------------------------- |
| <code>␣ m languageId:latex l a</code> | Align        | command | `latex-workshop.bibalign`     |
| <code>␣ m languageId:latex l s</code> | Sort         | command | `latex-workshop.bibsort`      |
| <code>␣ m languageId:latex l S</code> | Sort & Align | command | `latex-workshop.bibalignsort` |

# +Preview

Key Binding: <code>␣ m languageId:latex p</code>

Type: <code>bindings</code>

| Key Binding                           | Name                      | Type    | Command(s)                              |
| ------------------------------------- | ------------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:latex p d</code> | View Document             | command | `latex-workshop.view`                   |
| <code>␣ m languageId:latex p m</code> | Toggle Math Preview Panel | command | `latex-workshop.toggleMathPreviewPanel` |
| <code>␣ m languageId:latex p p</code> | SyncTeX from cursor       | command | `latex-workshop.synctex`                |
| <code>␣ m languageId:latex p r</code> | Refresh all viewers       | command | `latex-workshop.refresh-viewer`         |

# +Text

Key Binding: <code>␣ m languageId:latex x</code>

Type: <code>bindings</code>

| Key Binding                           | Name        | Type                    | Command(s)                           |
| ------------------------------------- | ----------- | ----------------------- | ------------------------------------ |
| <code>␣ m languageId:latex x b</code> | Bold        | command                 | `latex-workshop.shortcut.textbf`     |
| <code>␣ m languageId:latex x c</code> | Small Caps  | command                 | `latex-workshop.shortcut.textsc`     |
| <code>␣ m languageId:latex x e</code> | Emphasis    | command                 | `latex-workshop.shortcut.emph`       |
| <code>␣ m languageId:latex x f</code> | Sans Serif  | command                 | `latex-workshop.shortcut.textsf`     |
| <code>␣ m languageId:latex x i</code> | Italic      | command                 | `latex-workshop.shortcut.textit`     |
| <code>␣ m languageId:latex x n</code> | Normal      | command                 | `latex-workshop.shortcut.textnormal` |
| <code>␣ m languageId:latex x r</code> | Roman       | command                 | `latex-workshop.shortcut.textrm`     |
| <code>␣ m languageId:latex x t</code> | Terminal    | command                 | `latex-workshop.shortcut.texttt`     |
| <code>␣ m languageId:latex x u</code> | Underline   | command                 | `latex-workshop.shortcut.underline`  |
| <code>␣ m languageId:latex x m</code> | +Math Fonts | [bindings](#math-fonts) | N/A                                  |

# +Buffer commands

Key Binding: <code>␣ m languageId:markdown c</code>

Type: <code>bindings</code>

| Key Binding                              | Name                          | Type    | Command(s)                       |
| ---------------------------------------- | ----------------------------- | ------- | -------------------------------- |
| <code>␣ m languageId:markdown c e</code> | Export to HTML                | command | `markdown.extension.printToHtml` |
| <code>␣ m languageId:markdown c p</code> | Open preview to the side      | command | `markdown.showPreviewToSide`     |
| <code>␣ m languageId:markdown c P</code> | Open preview in current group | command | `markdown.showPreview`           |

# +Table of Contents

Key Binding: <code>␣ m languageId:markdown t</code>

Type: <code>bindings</code>

| Key Binding                              | Name                     | Type    | Command(s)                                |
| ---------------------------------------- | ------------------------ | ------- | ----------------------------------------- |
| <code>␣ m languageId:markdown t c</code> | Create Table of Contents | command | `markdown.extension.toc.create`           |
| <code>␣ m languageId:markdown t n</code> | Add section numbers      | command | `markdown.extension.toc.addSecNumbers`    |
| <code>␣ m languageId:markdown t u</code> | Update Table of Contents | command | `markdown.extension.toc.update`           |
| <code>␣ m languageId:markdown t N</code> | Remove section numbers   | command | `markdown.extension.toc.removeSecNumbers` |

# +Text

Key Binding: <code>␣ m languageId:markdown x</code>

Type: <code>bindings</code>

| Key Binding                               | Name                   | Type                                 | Command(s)                                       |
| ----------------------------------------- | ---------------------- | ------------------------------------ | ------------------------------------------------ |
| <code>␣ m languageId:markdown x [</code>  | Decrease Heading level | [transient](#decrease-heading-level) | `markdown.extension.editing.toggleHeadingDown`   |
| <code>␣ m languageId:markdown x ]</code>  | Increase Heading level | [transient](#increase-heading-level) | `markdown.extension.editing.toggleHeadingUp`     |
| <code>␣ m languageId:markdown x \`</code> | Toggle inline code     | command                              | `markdown.extension.editing.toggleCodeSpan`      |
| <code>␣ m languageId:markdown x b</code>  | Toggle bold            | command                              | `markdown.extension.editing.toggleBold`          |
| <code>␣ m languageId:markdown x i</code>  | Toggle italic          | command                              | `markdown.extension.editing.toggleItalic`        |
| <code>␣ m languageId:markdown x l</code>  | Toggle list            | command                              | `markdown.extension.editing.toggleList`          |
| <code>␣ m languageId:markdown x m</code>  | Toggle math            | command                              | `markdown.extension.editing.toggleMath`          |
| <code>␣ m languageId:markdown x s</code>  | Toggle strikethrough   | command                              | `markdown.extension.editing.toggleStrikethrough` |
| <code>␣ m languageId:markdown x ~</code>  | Toggle code block      | command                              | `markdown.extension.editing.toggleCodeBlock`     |

# +Format

Key Binding: <code>␣ m languageId:objectpascal =</code>

Type: <code>bindings</code>

| Key Binding                                  | Name                             | Type    | Command(s)                               |
| -------------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:objectpascal = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:objectpascal = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:objectpascal = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:objectpascal = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:objectpascal = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:objectpascal = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:objectpascal g</code>

Type: <code>bindings</code>

| Key Binding                                  | Name                    | Type    | Command(s)                        |
| -------------------------------------------- | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:objectpascal g d</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:objectpascal g e</code> | Go to errors/problems   | command | `workbench.action.problems.focus` |
| <code>␣ m languageId:objectpascal g g</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:objectpascal g r</code> | Go to references        | command | `editor.action.goToReferences`    |
| <code>␣ m languageId:objectpascal g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`     |
| <code>␣ m languageId:objectpascal g R</code> | Find references         | command | `references-view.findReferences`  |
| <code>␣ m languageId:objectpascal g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols` |

# +Refactor

Key Binding: <code>␣ m languageId:objectpascal r</code>

Type: <code>bindings</code>

| Key Binding                                  | Name          | Type    | Command(s)               |
| -------------------------------------------- | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:objectpascal r .</code> | Quick fix     | command | `editor.action.quickFix` |
| <code>␣ m languageId:objectpascal r r</code> | Rename symbol | command | `editor.action.rename`   |

# +Peek

Key Binding: <code>␣ m languageId:objectpascal G</code>

Type: <code>bindings</code>

| Key Binding                                  | Name            | Type    | Command(s)                              |
| -------------------------------------------- | --------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:objectpascal G d</code> | Peek definition | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:objectpascal G r</code> | Peek references | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:php =</code>

Type: <code>bindings</code>

| Key Binding                         | Name                             | Type    | Command(s)                               |
| ----------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:php = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:php = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:php = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:php = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:php = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:php = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:php g</code>

Type: <code>bindings</code>

| Key Binding                         | Name                    | Type    | Command(s)                        |
| ----------------------------------- | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:php g d</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:php g e</code> | Go to errors/problems   | command | `workbench.action.problems.focus` |
| <code>␣ m languageId:php g g</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:php g r</code> | Go to references        | command | `editor.action.goToReferences`    |
| <code>␣ m languageId:php g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`     |
| <code>␣ m languageId:php g R</code> | Find references         | command | `references-view.findReferences`  |
| <code>␣ m languageId:php g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols` |

# +Refactor

Key Binding: <code>␣ m languageId:php r</code>

Type: <code>bindings</code>

| Key Binding                         | Name          | Type    | Command(s)               |
| ----------------------------------- | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:php r .</code> | Quick fix     | command | `editor.action.quickFix` |
| <code>␣ m languageId:php r r</code> | Rename symbol | command | `editor.action.rename`   |

# +Peek

Key Binding: <code>␣ m languageId:php G</code>

Type: <code>bindings</code>

| Key Binding                         | Name            | Type    | Command(s)                              |
| ----------------------------------- | --------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:php G d</code> | Peek definition | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:php G r</code> | Peek references | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:python =</code>

Type: <code>bindings</code>

| Key Binding                            | Name                             | Type    | Command(s)                               |
| -------------------------------------- | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:python = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:python = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:python = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:python = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:python = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:python = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend

Key Binding: <code>␣ m languageId:python b</code>

Type: <code>bindings</code>

| Key Binding                            | Name            | Type    | Command(s)                              |
| -------------------------------------- | --------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:python b o</code> | Show LSP output | command | `python.viewLanguageServerOutput`       |
| <code>␣ m languageId:python b r</code> | Restart LSP     | command | `python.analysis.restartLanguageServer` |

# +Execute

Key Binding: <code>␣ m languageId:python c</code>

Type: <code>bindings</code>

| Key Binding                            | Name                     | Type    | Command(s)              |
| -------------------------------------- | ------------------------ | ------- | ----------------------- |
| <code>␣ m languageId:python c c</code> | Execute file in terminal | command | `python.execInTerminal` |
| <code>␣ m languageId:python c C</code> | Execute file in terminal | command | `python.execInTerminal` |

# +Go to

Key Binding: <code>␣ m languageId:python g</code>

Type: <code>bindings</code>

| Key Binding                            | Name                    | Type    | Command(s)                        |
| -------------------------------------- | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:python g d</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:python g e</code> | Go to errors/problems   | command | `workbench.action.problems.focus` |
| <code>␣ m languageId:python g g</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:python g r</code> | Go to references        | command | `editor.action.goToReferences`    |
| <code>␣ m languageId:python g s</code> | Go to symbol in file    | command | `workbench.action.gotoSymbol`     |
| <code>␣ m languageId:python g R</code> | Find references         | command | `references-view.findReferences`  |
| <code>␣ m languageId:python g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols` |

# +Refactor

Key Binding: <code>␣ m languageId:python r</code>

Type: <code>bindings</code>

| Key Binding                            | Name          | Type    | Command(s)               |
| -------------------------------------- | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:python r .</code> | Refactor menu | command | `editor.action.refactor` |
| <code>␣ m languageId:python r r</code> | Rename symbol | command | `editor.action.rename`   |
| <code>␣ m languageId:python r I</code> | Sort imports  | command | `python.sortImports`     |

# +REPL

Key Binding: <code>␣ m languageId:python s</code>

Type: <code>bindings</code>

| Key Binding                            | Name                        | Type    | Command(s)                       |
| -------------------------------------- | --------------------------- | ------- | -------------------------------- |
| <code>␣ m languageId:python s i</code> | Start REPL                  | command | `python.startREPL`               |
| <code>␣ m languageId:python s l</code> | Send line/selection to REPL | command | `python.execSelectionInTerminal` |
| <code>␣ m languageId:python s r</code> | Send line/selection to REPL | command | `python.execSelectionInTerminal` |

# +Test

Key Binding: <code>␣ m languageId:python t</code>

Type: <code>bindings</code>

| Key Binding                            | Name                  | Type    | Command(s)               |
| -------------------------------------- | --------------------- | ------- | ------------------------ |
| <code>␣ m languageId:python t a</code> | Run all tests         | command | `testing.runAll`         |
| <code>␣ m languageId:python t b</code> | Run current test file | command | `testing.runCurrentFile` |
| <code>␣ m languageId:python t r</code> | Re-run failed tests   | command | `testing.reRunFailTests` |
| <code>␣ m languageId:python t t</code> | Select and run test   | command | `testing.runSelected`    |
| <code>␣ m languageId:python t A</code> | Debug all tests       | command | `testing.debugAll`       |
| <code>␣ m languageId:python t T</code> | Select and debug test | command | `testing.debugSelected`  |

# +Peek

Key Binding: <code>␣ m languageId:python G</code>

Type: <code>bindings</code>

| Key Binding                            | Name            | Type    | Command(s)                              |
| -------------------------------------- | --------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:python G d</code> | Peek definition | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:python G r</code> | Peek references | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:quarto =</code>

Type: <code>bindings</code>

| Key Binding                            | Name                            | Type    | Command(s)                               |
| -------------------------------------- | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:quarto = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:quarto = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:quarto = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:quarto = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:quarto = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:quarto = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Code actions

Key Binding: <code>␣ m languageId:quarto a</code>

Type: <code>bindings</code>

| Key Binding                            | Name                | Type    | Command(s)                   |
| -------------------------------------- | ------------------- | ------- | ---------------------------- |
| <code>␣ m languageId:quarto a a</code> | Execute code action | command | `editor.action.codeAction`   |
| <code>␣ m languageId:quarto a f</code> | Execute fix action  | command | `editor.action.quickFix`     |
| <code>␣ m languageId:quarto a r</code> | Refactor action     | command | `editor.action.refactor`     |
| <code>␣ m languageId:quarto a s</code> | Source action       | command | `editor.action.sourceAction` |

# +Fold

Key Binding: <code>␣ m languageId:quarto f</code>

Type: <code>bindings</code>

| Key Binding                            | Name             | Type    | Command(s)         |
| -------------------------------------- | ---------------- | ------- | ------------------ |
| <code>␣ m languageId:quarto f f</code> | Fold cell        | command | `editor.fold`      |
| <code>␣ m languageId:quarto f u</code> | Unfold cell      | command | `editor.unfold`    |
| <code>␣ m languageId:quarto f F</code> | Fold all cells   | command | `editor.foldAll`   |
| <code>␣ m languageId:quarto f U</code> | Unfold all cells | command | `editor.unfoldAll` |

# +Go to

Key Binding: <code>␣ m languageId:quarto g</code>

Type: <code>bindings</code>

| Key Binding                            | Name                    | Type    | Command(s)                                        |
| -------------------------------------- | ----------------------- | ------- | ------------------------------------------------- |
| <code>␣ m languageId:quarto g d</code> | Go to declaration       | command | `editor.action.revealDeclaration`                 |
| <code>␣ m languageId:quarto g e</code> | Go to errors/problems   | command | `workbench.actions.view.problems`                 |
| <code>␣ m languageId:quarto g f</code> | Go to file in explorer  | command | `workbench.files.action.showActiveFileInExplorer` |
| <code>␣ m languageId:quarto g g</code> | Go to definition        | command | `editor.action.revealDefinition`                  |
| <code>␣ m languageId:quarto g r</code> | Go to reference         | command | `editor.action.goToReferences`                    |
| <code>␣ m languageId:quarto g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`                     |
| <code>␣ m languageId:quarto g R</code> | Find references         | command | `references-view.findReferences`                  |
| <code>␣ m languageId:quarto g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`                 |

# +Refactor

Key Binding: <code>␣ m languageId:quarto r</code>

Type: <code>bindings</code>

| Key Binding                            | Name          | Type    | Command(s)             |
| -------------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:quarto r r</code> | Rename Symbol | command | `editor.action.rename` |

# +View R

Key Binding: <code>␣ m languageId:quarto v</code>

Type: <code>bindings</code>

| Key Binding                            | Name           | Type    | Command(s)                        |
| -------------------------------------- | -------------- | ------- | --------------------------------- |
| <code>␣ m languageId:quarto v c</code> | Column numbers | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:quarto v h</code> | head           | command | `r.head`                          |
| <code>␣ m languageId:quarto v l</code> | length         | command | `r.length`                        |
| <code>␣ m languageId:quarto v n</code> | Names          | command | `r.names`                         |
| <code>␣ m languageId:quarto v p</code> | print          | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:quarto v r</code> | Row numbers    | command | `r.nrow`                          |
| <code>␣ m languageId:quarto v s</code> | str            | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:quarto v v</code> | View           | command | `r.view`                          |
| <code>␣ m languageId:quarto v C</code> | Column names   | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:quarto v R</code> | Row names      | command | `r.runCommandWithSelectionOrWord` |

# +Peek

Key Binding: <code>␣ m languageId:quarto G</code>

Type: <code>bindings</code>

| Key Binding                            | Name             | Type    | Command(s)                              |
| -------------------------------------- | ---------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:quarto G d</code> | Peek declaration | command | `editor.action.peekDeclaration`         |
| <code>␣ m languageId:quarto G g</code> | Peek definition  | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:quarto G r</code> | Peek references  | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:r =</code>

Type: <code>bindings</code>

| Key Binding                       | Name                            | Type    | Command(s)                               |
| --------------------------------- | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:r = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:r = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:r = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:r = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:r = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:r = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Code actions

Key Binding: <code>␣ m languageId:r a</code>

Type: <code>bindings</code>

| Key Binding                       | Name                | Type    | Command(s)                   |
| --------------------------------- | ------------------- | ------- | ---------------------------- |
| <code>␣ m languageId:r a a</code> | Execute code action | command | `editor.action.codeAction`   |
| <code>␣ m languageId:r a f</code> | Execute fix action  | command | `editor.action.quickFix`     |
| <code>␣ m languageId:r a r</code> | Refactor action     | command | `editor.action.refactor`     |
| <code>␣ m languageId:r a s</code> | Source action       | command | `editor.action.sourceAction` |

# +Go to

Key Binding: <code>␣ m languageId:r g</code>

Type: <code>bindings</code>

| Key Binding                       | Name                    | Type    | Command(s)                                        |
| --------------------------------- | ----------------------- | ------- | ------------------------------------------------- |
| <code>␣ m languageId:r g d</code> | Go to declaration       | command | `editor.action.revealDeclaration`                 |
| <code>␣ m languageId:r g e</code> | Go to errors/problems   | command | `workbench.actions.view.problems`                 |
| <code>␣ m languageId:r g f</code> | Go to file in explorer  | command | `workbench.files.action.showActiveFileInExplorer` |
| <code>␣ m languageId:r g g</code> | Go to definition        | command | `editor.action.revealDefinition`                  |
| <code>␣ m languageId:r g r</code> | Go to reference         | command | `editor.action.goToReferences`                    |
| <code>␣ m languageId:r g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`                     |
| <code>␣ m languageId:r g R</code> | Find references         | command | `references-view.findReferences`                  |
| <code>␣ m languageId:r g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`                 |

# +Package

Key Binding: <code>␣ m languageId:r p</code>

Type: <code>bindings</code>

| Key Binding                       | Name               | Type    | Command(s)     |
| --------------------------------- | ------------------ | ------- | -------------- |
| <code>␣ m languageId:r p c</code> | Check              | command | `r.check`      |
| <code>␣ m languageId:r p d</code> | Document           | command | `r.document`   |
| <code>␣ m languageId:r p l</code> | Load All           | command | `r.loadAll`    |
| <code>␣ m languageId:r p p</code> | pgkdown build site | command | `r.runCommand` |
| <code>␣ m languageId:r p t</code> | Test               | command | `r.test`       |

# +Refactor

Key Binding: <code>␣ m languageId:r r</code>

Type: <code>bindings</code>

| Key Binding                       | Name          | Type    | Command(s)             |
| --------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:r r r</code> | Rename Symbol | command | `editor.action.rename` |

# +View

Key Binding: <code>␣ m languageId:r v</code>

Type: <code>bindings</code>

| Key Binding                       | Name           | Type    | Command(s)                        |
| --------------------------------- | -------------- | ------- | --------------------------------- |
| <code>␣ m languageId:r v c</code> | Column numbers | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:r v h</code> | head           | command | `r.head`                          |
| <code>␣ m languageId:r v l</code> | length         | command | `r.length`                        |
| <code>␣ m languageId:r v n</code> | Names          | command | `r.names`                         |
| <code>␣ m languageId:r v p</code> | print          | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:r v r</code> | Row numbers    | command | `r.nrow`                          |
| <code>␣ m languageId:r v s</code> | str            | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:r v v</code> | View           | command | `r.view`                          |
| <code>␣ m languageId:r v C</code> | Column names   | command | `r.runCommandWithSelectionOrWord` |
| <code>␣ m languageId:r v R</code> | Row names      | command | `r.runCommandWithSelectionOrWord` |

# +Peek

Key Binding: <code>␣ m languageId:r G</code>

Type: <code>bindings</code>

| Key Binding                       | Name             | Type    | Command(s)                              |
| --------------------------------- | ---------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:r G d</code> | Peek declaration | command | `editor.action.peekDeclaration`         |
| <code>␣ m languageId:r G g</code> | Peek definition  | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:r G r</code> | Peek references  | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:ruby =</code>

Type: <code>bindings</code>

| Key Binding                          | Name                             | Type    | Command(s)                               |
| ------------------------------------ | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:ruby = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:ruby = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:ruby = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:ruby = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:ruby = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:ruby = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:ruby g</code>

Type: <code>bindings</code>

| Key Binding                          | Name                    | Type    | Command(s)                        |
| ------------------------------------ | ----------------------- | ------- | --------------------------------- |
| <code>␣ m languageId:ruby g d</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:ruby g e</code> | Go to errors/problems   | command | `workbench.action.problems.focus` |
| <code>␣ m languageId:ruby g g</code> | Go to definition        | command | `editor.action.revealDefinition`  |
| <code>␣ m languageId:ruby g r</code> | Go to references        | command | `editor.action.goToReferences`    |
| <code>␣ m languageId:ruby g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`     |
| <code>␣ m languageId:ruby g R</code> | Find references         | command | `references-view.findReferences`  |
| <code>␣ m languageId:ruby g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols` |

# +Refactor

Key Binding: <code>␣ m languageId:ruby r</code>

Type: <code>bindings</code>

| Key Binding                          | Name          | Type    | Command(s)             |
| ------------------------------------ | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:ruby r r</code> | Rename symbol | command | `editor.action.rename` |

# +Peek

Key Binding: <code>␣ m languageId:ruby G</code>

Type: <code>bindings</code>

| Key Binding                          | Name            | Type    | Command(s)                              |
| ------------------------------------ | --------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:ruby G d</code> | Peek definition | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:ruby G r</code> | Peek references | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:rust =</code>

Type: <code>bindings</code>

| Key Binding                          | Name                    | Type    | Command(s)                     |
| ------------------------------------ | ----------------------- | ------- | ------------------------------ |
| <code>␣ m languageId:rust = =</code> | Format region or buffer | command | `editor.action.format`         |
| <code>␣ m languageId:rust = b</code> | Format buffer           | command | `editor.action.formatDocument` |
| <code>␣ m languageId:rust = s</code> | Format selection        | command | `editor.action.format`         |

# +Actions

Key Binding: <code>␣ m languageId:rust a</code>

Type: <code>bindings</code>

| Key Binding                          | Name                  | Type                  | Command(s)                   |
| ------------------------------------ | --------------------- | --------------------- | ---------------------------- |
| <code>␣ m languageId:rust a a</code> | Execute code action   | command               | `editor.action.codeAction`   |
| <code>␣ m languageId:rust a f</code> | Execute fix action    | command               | `editor.action.quickFix`     |
| <code>␣ m languageId:rust a s</code> | Execute source action | command               | `editor.action.sourceAction` |
| <code>␣ m languageId:rust a r</code> | +Refactor             | [bindings](#refactor) | N/A                          |

# +Backend

Key Binding: <code>␣ m languageId:rust b</code>

Type: <code>bindings</code>

| Key Binding                          | Name                            | Type    | Command(s)                      |
| ------------------------------------ | ------------------------------- | ------- | ------------------------------- |
| <code>␣ m languageId:rust b d</code> | Rust analyzer: describe status  | command | `rust-analyzer.analyzerStatus`  |
| <code>␣ m languageId:rust b r</code> | Rust analyzer: restart server   | command | `rust-analyzer.reload`          |
| <code>␣ m languageId:rust b v</code> | Rust analyzer: Show version     | command | `rust-analyzer.serverVersion`   |
| <code>␣ m languageId:rust b R</code> | Rust analyzer: reload workspace | command | `rust-analyzer.reloadWorkspace` |

# +Goto

Key Binding: <code>␣ m languageId:rust g</code>

Type: <code>bindings</code>

| Key Binding                          | Name                    | Type    | Command(s)                            |
| ------------------------------------ | ----------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:rust g d</code> | Go to definition        | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:rust g h</code> | Show call hierarchy     | command | `references-view.showCallHierarchy`   |
| <code>␣ m languageId:rust g i</code> | Go to implementations   | command | `editor.action.goToImplementation`    |
| <code>␣ m languageId:rust g r</code> | Go to references        | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:rust g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`         |
| <code>␣ m languageId:rust g t</code> | Go to type definition   | command | `editor.action.goToTypeDefinition`    |
| <code>␣ m languageId:rust g I</code> | Find implementations    | command | `references-view.findImplementations` |
| <code>␣ m languageId:rust g R</code> | Find references         | command | `references-view.findReferences`      |
| <code>␣ m languageId:rust g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`     |

# +Refactor

Key Binding: <code>␣ m languageId:rust r</code>

Type: <code>bindings</code>

| Key Binding                          | Name          | Type    | Command(s)               |
| ------------------------------------ | ------------- | ------- | ------------------------ |
| <code>␣ m languageId:rust r .</code> | Refactor menu | command | `editor.action.refactor` |
| <code>␣ m languageId:rust r r</code> | Rename symbol | command | `editor.action.rename`   |

# +Peek

Key Binding: <code>␣ m languageId:rust G</code>

Type: <code>bindings</code>

| Key Binding                          | Name                 | Type    | Command(s)                              |
| ------------------------------------ | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:rust G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:rust G h</code> | Peek call hierarchy  | command | `editor.showCallHierarchy`              |
| <code>␣ m languageId:rust G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:rust G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |

# +Format

Key Binding: <code>␣ m languageId:typescript =</code>

Type: <code>bindings</code>

| Key Binding                                | Name                             | Type    | Command(s)                               |
| ------------------------------------------ | -------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:typescript = =</code> | Format region or buffer          | command | `editor.action.format`                   |
| <code>␣ m languageId:typescript = b</code> | Format buffer                    | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:typescript = c</code> | Format changes                   | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:typescript = s</code> | Format selection                 | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:typescript = B</code> | +Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:typescript = S</code> | +Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Go to

Key Binding: <code>␣ m languageId:typescript g</code>

Type: <code>bindings</code>

| Key Binding                                | Name                    | Type    | Command(s)                            |
| ------------------------------------------ | ----------------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:typescript g d</code> | Go to definition        | command | `editor.action.revealDefinition`      |
| <code>␣ m languageId:typescript g h</code> | Show call hierarchy     | command | `references-view.showCallHierarchy`   |
| <code>␣ m languageId:typescript g r</code> | Go to reference         | command | `editor.action.goToReferences`        |
| <code>␣ m languageId:typescript g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`         |
| <code>␣ m languageId:typescript g t</code> | Go to type definition   | command | `editor.action.goToTypeDefinition`    |
| <code>␣ m languageId:typescript g I</code> | Find implementations    | command | `references-view.findImplementations` |
| <code>␣ m languageId:typescript g R</code> | Find references         | command | `references-view.findReferences`      |
| <code>␣ m languageId:typescript g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`     |

# +Peek

Key Binding: <code>␣ m languageId:typescript G</code>

Type: <code>bindings</code>

| Key Binding                                | Name                 | Type    | Command(s)                              |
| ------------------------------------------ | -------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:typescript G d</code> | Peek definition      | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:typescript G h</code> | Peek call hierarchy  | command | `editor.showCallHierarchy`              |
| <code>␣ m languageId:typescript G i</code> | Peek implementations | command | `editor.action.peekImplementation`      |
| <code>␣ m languageId:typescript G r</code> | Peek references      | command | `editor.action.referenceSearch.trigger` |
| <code>␣ m languageId:typescript G t</code> | Peek type definition | command | `editor.action.peekTypeDefinition`      |

# +Format

Key Binding: <code>␣ m languageId:cuda-cpp =</code>

Type: <code>bindings</code>

| Key Binding                              | Name                            | Type    | Command(s)                               |
| ---------------------------------------- | ------------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:cuda-cpp = =</code> | Format region or buffer         | command | `editor.action.format`                   |
| <code>␣ m languageId:cuda-cpp = b</code> | Format buffer                   | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:cuda-cpp = c</code> | Format changes                  | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:cuda-cpp = s</code> | Format selection                | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:cuda-cpp = B</code> | Format buffer with formatter    | command | `editor.action.formatDocument.multiple`  |
| <code>␣ m languageId:cuda-cpp = S</code> | Format selection with formatter | command | `editor.action.formatSelection.multiple` |

# +Backend

Key Binding: <code>␣ m languageId:cuda-cpp b</code>

Type: <code>bindings</code>

| Key Binding                              | Name             | Type    | Command(s)              |
| ---------------------------------------- | ---------------- | ------- | ----------------------- |
| <code>␣ m languageId:cuda-cpp b d</code> | Reset Database   | command | `C_Cpp.ResetDatabase`   |
| <code>␣ m languageId:cuda-cpp b w</code> | Rescan Workspace | command | `C_Cpp.RescanWorkspace` |

# +Debug

Key Binding: <code>␣ m languageId:cuda-cpp d</code>

Type: <code>bindings</code>

| Key Binding                              | Name               | Type    | Command(s)              |
| ---------------------------------------- | ------------------ | ------- | ----------------------- |
| <code>␣ m languageId:cuda-cpp d f</code> | Change debug focus | command | `cuda.changeDebugFocus` |

# +Go to

Key Binding: <code>␣ m languageId:cuda-cpp g</code>

Type: <code>bindings</code>

| Key Binding                              | Name                    | Type    | Command(s)                                        |
| ---------------------------------------- | ----------------------- | ------- | ------------------------------------------------- |
| <code>␣ m languageId:cuda-cpp g a</code> | Switch Header/Source    | command | `C_Cpp.SwitchHeaderSource`                        |
| <code>␣ m languageId:cuda-cpp g d</code> | Go to declaration       | command | `editor.action.revealDeclaration`                 |
| <code>␣ m languageId:cuda-cpp g e</code> | Go to errors/problems   | command | `workbench.actions.view.problems`                 |
| <code>␣ m languageId:cuda-cpp g f</code> | Go to file in explorer  | command | `workbench.files.action.showActiveFileInExplorer` |
| <code>␣ m languageId:cuda-cpp g g</code> | Go to definition        | command | `editor.action.revealDefinition`                  |
| <code>␣ m languageId:cuda-cpp g r</code> | Go to reference         | command | `editor.action.goToReferences`                    |
| <code>␣ m languageId:cuda-cpp g s</code> | Go to symbol in buffer  | command | `workbench.action.gotoSymbol`                     |
| <code>␣ m languageId:cuda-cpp g R</code> | Find references         | command | `references-view.findReferences`                  |
| <code>␣ m languageId:cuda-cpp g S</code> | Go to symbol in project | command | `workbench.action.showAllSymbols`                 |

# +Refactor

Key Binding: <code>␣ m languageId:cuda-cpp r</code>

Type: <code>bindings</code>

| Key Binding                              | Name          | Type    | Command(s)             |
| ---------------------------------------- | ------------- | ------- | ---------------------- |
| <code>␣ m languageId:cuda-cpp r r</code> | Rename Symbol | command | `editor.action.rename` |

# +Peek

Key Binding: <code>␣ m languageId:cuda-cpp G</code>

Type: <code>bindings</code>

| Key Binding                              | Name             | Type    | Command(s)                              |
| ---------------------------------------- | ---------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:cuda-cpp G d</code> | Peek declaration | command | `editor.action.peekDeclaration`         |
| <code>␣ m languageId:cuda-cpp G g</code> | Peek definition  | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:cuda-cpp G r</code> | Peek references  | command | `editor.action.referenceSearch.trigger` |

# +Wrap

Key Binding: <code>␣ m languageId:clojure k w</code>

Type: <code>bindings</code>

| Key Binding                               | Name           | Type    | Command(s)                 |
| ----------------------------------------- | -------------- | ------- | -------------------------- |
| <code>␣ m languageId:clojure k w "</code> | Wrap around "" | command | `paredit.wrapAroundQuote`  |
| <code>␣ m languageId:clojure k w (</code> | Wrap around () | command | `paredit.wrapAroundParens` |
| <code>␣ m languageId:clojure k w [</code> | Wrap around [] | command | `paredit.wrapAroundSquare` |
| <code>␣ m languageId:clojure k w c</code> | Rewrap {}      | command | `paredit.rewrapCurly`      |
| <code>␣ m languageId:clojure k w p</code> | Rewrap ()      | command | `paredit.rewrapParens`     |
| <code>␣ m languageId:clojure k w q</code> | Rewrap ""      | command | `paredit.rewrapQuote`      |
| <code>␣ m languageId:clojure k w s</code> | Rewrap []      | command | `paredit.rewrapSquare`     |
| <code>␣ m languageId:clojure k w {</code> | Wrap around {} | command | `paredit.wrapAroundCurly`  |

# +Add

Key Binding: <code>␣ m languageId:clojure r a</code>

Type: <code>bindings</code>

| Key Binding                               | Name                              | Type    | Command(s)                              |
| ----------------------------------------- | --------------------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:clojure r a l</code> | Add missing library specification | command | `clojureLsp.refactor.addMissingLibspec` |

# +Cycle clean convert

Key Binding: <code>␣ m languageId:clojure r c</code>

Type: <code>bindings</code>

| Key Binding                               | Name                       | Type    | Command(s)                         |
| ----------------------------------------- | -------------------------- | ------- | ---------------------------------- |
| <code>␣ m languageId:clojure r c n</code> | Clean namespace definition | command | `clojureLsp.refactor.cleanNs`      |
| <code>␣ m languageId:clojure r c p</code> | Cycle privacy              | command | `clojureLsp.refactor.cyclePrivacy` |

# +Extract expand

Key Binding: <code>␣ m languageId:clojure r e</code>

Type: <code>bindings</code>

| Key Binding                               | Name             | Type    | Command(s)                            |
| ----------------------------------------- | ---------------- | ------- | ------------------------------------- |
| <code>␣ m languageId:clojure r e f</code> | Extract function | command | `clojureLsp.refactor.extractFunction` |
| <code>␣ m languageId:clojure r e l</code> | Expand let       | command | `clojureLsp.refactor.expandLet`       |

# +Introduce inline

Key Binding: <code>␣ m languageId:clojure r i</code>

Type: <code>bindings</code>

| Key Binding                               | Name          | Type    | Command(s)                         |
| ----------------------------------------- | ------------- | ------- | ---------------------------------- |
| <code>␣ m languageId:clojure r i l</code> | Introduce let | command | `clojureLsp.refactor.introduceLet` |
| <code>␣ m languageId:clojure r i s</code> | Inline symbol | command | `clojureLsp.refactor.inlineSymbol` |

# +Move

Key Binding: <code>␣ m languageId:clojure r m</code>

Type: <code>bindings</code>

| Key Binding                               | Name        | Type    | Command(s)                      |
| ----------------------------------------- | ----------- | ------- | ------------------------------- |
| <code>␣ m languageId:clojure r m l</code> | Move to let | command | `clojureLsp.refactor.moveToLet` |

# +Thread macros

Key Binding: <code>␣ m languageId:clojure r t</code>

Type: <code>bindings</code>

| Key Binding                               | Name              | Type    | Command(s)                           |
| ----------------------------------------- | ----------------- | ------- | ------------------------------------ |
| <code>␣ m languageId:clojure r t f</code> | Thread first      | command | `clojureLsp.refactor.threadFirst`    |
| <code>␣ m languageId:clojure r t l</code> | Thread last       | command | `clojureLsp.refactor.threadLast`     |
| <code>␣ m languageId:clojure r t u</code> | Unwind thread     | command | `clojureLsp.refactor.unwindThread`   |
| <code>␣ m languageId:clojure r t F</code> | Thread first all  | command | `clojureLsp.refactor.threadFirstAll` |
| <code>␣ m languageId:clojure r t L</code> | Thread last all   | command | `clojureLsp.refactor.threadLastAll`  |
| <code>␣ m languageId:clojure r t U</code> | Unwind thread all | command | `clojureLsp.refactor.unwindThread`   |

# +Create

Key Binding: <code>␣ m languageId:dart p c</code>

Type: <code>bindings</code>

| Key Binding                            | Name                    | Type    | Command(s) |
| -------------------------------------- | ----------------------- | ------- | ---------- |
| <code>␣ m languageId:dart p c d</code> | Dart project            | command | N/A        |
| <code>␣ m languageId:dart p c l</code> | Flutter plugin project  | command | N/A        |
| <code>␣ m languageId:dart p c m</code> | Flutter module project  | command | N/A        |
| <code>␣ m languageId:dart p c p</code> | Flutter project         | command | N/A        |
| <code>␣ m languageId:dart p c D</code> | Create DartDoc          | command | N/A        |
| <code>␣ m languageId:dart p c P</code> | Flutter package project | command | N/A        |

# +Package actions

Key Binding: <code>␣ m languageId:go a p</code>

Type: <code>bindings</code>

| Key Binding                          | Name                    | Type    | Command(s)           |
| ------------------------------------ | ----------------------- | ------- | -------------------- |
| <code>␣ m languageId:go a p b</code> | Build package           | command | `go.build.package`   |
| <code>␣ m languageId:go a p g</code> | Get package             | command | `go.get.package`     |
| <code>␣ m languageId:go a p i</code> | Install current package | command | `go.install.package` |
| <code>␣ m languageId:go a p l</code> | Lint package            | command | `go.lint.package`    |
| <code>␣ m languageId:go a p s</code> | Browse packages         | command | `go.browse.packages` |
| <code>␣ m languageId:go a p v</code> | Vet package             | command | `go.vet.package`     |

# +Workspace actions

Key Binding: <code>␣ m languageId:go a w</code>

Type: <code>bindings</code>

| Key Binding                          | Name                     | Type    | Command(s)                 |
| ------------------------------------ | ------------------------ | ------- | -------------------------- |
| <code>␣ m languageId:go a w b</code> | Build workspace          | command | `go.build.workspace`       |
| <code>␣ m languageId:go a w l</code> | Lint workspace           | command | `go.lint.workspace`        |
| <code>␣ m languageId:go a w p</code> | Add package to workspace | command | `go.add.package.workspace` |
| <code>␣ m languageId:go a w v</code> | Vet workspace            | command | `go.vet.workspace`         |

# +Benchmarks

Key Binding: <code>␣ m languageId:go t b</code>

Type: <code>bindings</code>

| Key Binding                          | Name                         | Type    | Command(s)             |
| ------------------------------------ | ---------------------------- | ------- | ---------------------- |
| <code>␣ m languageId:go t b f</code> | Benchmark function at cursor | command | `go.benchmark.cursor`  |
| <code>␣ m languageId:go t b p</code> | Benchmark package            | command | `go.benchmark.package` |
| <code>␣ m languageId:go t b F</code> | Benchmark file               | command | `go.benchmark.file`    |

# +Generate

Key Binding: <code>␣ m languageId:go t g</code>

Type: <code>bindings</code>

| Key Binding                          | Name                             | Type    | Command(s)                  |
| ------------------------------------ | -------------------------------- | ------- | --------------------------- |
| <code>␣ m languageId:go t g f</code> | Generate unit tests for function | command | `go.test.generate.function` |
| <code>␣ m languageId:go t g p</code> | Generate unit tests for package  | command | `go.test.generate.package`  |
| <code>␣ m languageId:go t g F</code> | Generate unit tests for file     | command | `go.test.generate.file`     |

# +Toggle

Key Binding: <code>␣ m languageId:go t T</code>

Type: <code>bindings</code>

| Key Binding                          | Name                                    | Type    | Command(s)            |
| ------------------------------------ | --------------------------------------- | ------- | --------------------- |
| <code>␣ m languageId:go t T c</code> | Toggle test coverage in current package | command | `go.test.coverage`    |
| <code>␣ m languageId:go t T f</code> | Toggle open test file                   | command | `go.toggle.test.file` |

# +Math Fonts

Key Binding: <code>␣ m languageId:latex x m</code>

Type: <code>bindings</code>

| Key Binding                             | Name         | Type    | Command(s)                        |
| --------------------------------------- | ------------ | ------- | --------------------------------- |
| <code>␣ m languageId:latex x m a</code> | Calligraphic | command | `latex-workshop.shortcut.mathcal` |
| <code>␣ m languageId:latex x m b</code> | Bold         | command | `latex-workshop.shortcut.mathbf`  |
| <code>␣ m languageId:latex x m f</code> | Sans Serif   | command | `latex-workshop.shortcut.mathsf`  |
| <code>␣ m languageId:latex x m i</code> | Italic       | command | `latex-workshop.shortcut.mathit`  |
| <code>␣ m languageId:latex x m r</code> | Roman        | command | `latex-workshop.shortcut.mathrm`  |
| <code>␣ m languageId:latex x m t</code> | Terminal     | command | `latex-workshop.shortcut.mathtt`  |

# Decrease Heading level

Key Binding: <code>␣ m languageId:markdown x [</code>

Type: <code>transient</code>

| Key Binding    | Name                   | Type    | Command(s)                                     |
| -------------- | ---------------------- | ------- | ---------------------------------------------- |
| <code>[</code> | Decrease Heading level | command | `markdown.extension.editing.toggleHeadingDown` |
| <code>]</code> | Increase Heading level | command | `markdown.extension.editing.toggleHeadingUp`   |

# Increase Heading level

Key Binding: <code>␣ m languageId:markdown x ]</code>

Type: <code>transient</code>

| Key Binding    | Name                   | Type    | Command(s)                                     |
| -------------- | ---------------------- | ------- | ---------------------------------------------- |
| <code>[</code> | Decrease Heading level | command | `markdown.extension.editing.toggleHeadingDown` |
| <code>]</code> | Increase Heading level | command | `markdown.extension.editing.toggleHeadingUp`   |

# +Refactor

Key Binding: <code>␣ m languageId:rust a r</code>

Type: <code>bindings</code>

| Key Binding                            | Name                    | Type    | Command(s)               |
| -------------------------------------- | ----------------------- | ------- | ------------------------ |
| <code>␣ m languageId:rust a r .</code> | Execute refactor action | command | `editor.action.refactor` |
| <code>␣ m languageId:rust a r r</code> | Rename symbol           | command | `editor.action.rename`   |
