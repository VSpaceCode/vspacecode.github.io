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
| <code>␣ '</code> | Show terminal                    | command                                 | `workbench.action.terminal.focus`                                                                                    |
| <code>␣ *</code> | Search in project with selection | commands                                | `editor.action.addSelectionToNextFindMatch`<br />`workbench.action.findInFiles`<br />`search.action.focusSearchList` |
| <code>␣ /</code> | Search in project                | command                                 | `workbench.action.findInFiles`                                                                                       |
| <code>␣ 0</code> | Focus on files explorer          | command                                 | `workbench.files.action.showActiveFileInExplorer`                                                                    |
| <code>␣ 1</code> | Focus 1st window                 | command                                 | `workbench.action.focusFirstEditorGroup`                                                                             |
| <code>␣ 2</code> | Focus 2nd window                 | command                                 | `workbench.action.focusSecondEditorGroup`                                                                            |
| <code>␣ 3</code> | Focus 3rd window                 | command                                 | `workbench.action.focusThirdEditorGroup`                                                                             |
| <code>␣ 4</code> | Focus 4th window                 | command                                 | `workbench.action.focusFourthEditorGroup`                                                                            |
| <code>␣ 5</code> | Focus 5th window                 | command                                 | `workbench.action.focusFifthEditorGroup`                                                                             |
| <code>␣ 6</code> | Focus 6th window                 | command                                 | `workbench.action.focusSixthEditorGroup`                                                                             |
| <code>␣ 7</code> | Focus 7th window                 | command                                 | `workbench.action.focusSeventhEditorGroup`                                                                           |
| <code>␣ 8</code> | Focus 8th window                 | command                                 | `workbench.action.focusEighthEditorGroup`                                                                            |
| <code>␣ ;</code> | Toggle comment                   | command                                 | `editor.action.commentLine`                                                                                          |
| <code>␣ v</code> | Smart select/expand region       | [transient](#smart-selectexpand-region) | `editor.action.smartSelect.grow`                                                                                     |
| <code>␣ b</code> | +Buffers                         | [bindings](#buffers)                    | N/A                                                                                                                  |
| <code>␣ c</code> | +Comments                        | [bindings](#comments)                   | N/A                                                                                                                  |
| <code>␣ d</code> | +Debug                           | [bindings](#debug)                      | N/A                                                                                                                  |
| <code>␣ e</code> | +Errors                          | [bindings](#errors)                     | N/A                                                                                                                  |
| <code>␣ f</code> | +File                            | [bindings](#file)                       | N/A                                                                                                                  |
| <code>␣ g</code> | +Git                             | [bindings](#git)                        | N/A                                                                                                                  |
| <code>␣ h</code> | +Help                            | [bindings](#help)                       | N/A                                                                                                                  |
| <code>␣ i</code> | +Insert                          | [bindings](#insert)                     | N/A                                                                                                                  |
| <code>␣ j</code> | +Jump/Join/Split                 | [bindings](#jumpjoinsplit)              | N/A                                                                                                                  |
| <code>␣ l</code> | +Layouts                         | [bindings](#layouts)                    | N/A                                                                                                                  |
| <code>␣ p</code> | +Project                         | [bindings](#project)                    | N/A                                                                                                                  |
| <code>␣ q</code> | +Quit                            | [bindings](#quit)                       | N/A                                                                                                                  |
| <code>␣ r</code> | +Resume                          | [bindings](#resume)                     | N/A                                                                                                                  |
| <code>␣ s</code> | +Search/Symbol                   | [bindings](#searchsymbol)               | N/A                                                                                                                  |
| <code>␣ t</code> | +Toggles                         | [bindings](#toggles)                    | N/A                                                                                                                  |
| <code>␣ w</code> | +Window                          | [bindings](#window)                     | N/A                                                                                                                  |
| <code>␣ x</code> | +Text                            | [bindings](#text)                       | N/A                                                                                                                  |
| <code>␣ z</code> | +Zoom/Fold                       | [bindings](#zoomfold)                   | N/A                                                                                                                  |
| <code>␣ D</code> | +Diff/Compare                    | [bindings](#diffcompare)                | N/A                                                                                                                  |
| <code>␣ F</code> | +Frame                           | [bindings](#frame)                      | N/A                                                                                                                  |
| <code>␣ m</code> | +Major                           | [conditional](#major)                   | N/A                                                                                                                  |
| <code>␣ S</code> | +Show                            | [bindings](#show)                       | N/A                                                                                                                  |
| <code>␣ T</code> | +UI toggles                      | [bindings](#ui-toggles)                 | N/A                                                                                                                  |

# Smart select/expand region

Key Binding: <code>␣ v</code>

Type: <code>transient</code>

| Key Binding    | Name             | Type    | Command(s)                         |
| -------------- | ---------------- | ------- | ---------------------------------- |
| <code>v</code> | Grow selection   | command | `editor.action.smartSelect.grow`   |
| <code>V</code> | Shrink selection | command | `editor.action.smartSelect.shrink` |

# +Buffers

Key Binding: <code>␣ b</code>

Type: <code>bindings</code>

| Key Binding        | Name                              | Type                    | Command(s)                                                          |
| ------------------ | --------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| <code>␣ b 0</code> | Last buffer in window             | command                 | `workbench.action.lastEditorInGroup`                                |
| <code>␣ b 1</code> | First buffer in window            | command                 | `workbench.action.firstEditorInGroup`                               |
| <code>␣ b b</code> | Show all buffers                  | command                 | `workbench.action.showAllEditorsByMostRecentlyUsed`                 |
| <code>␣ b d</code> | Close active buffer               | command                 | `workbench.action.closeActiveEditor`                                |
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
| <code>␣ b T</code> | Unpin buffer                      | command                 | `workbench.action.unpinEditor`                                      |
| <code>␣ b Y</code> | Copy buffer to clipboard          | command                 | `vspacecode.copyWholeBuffer`                                        |
| <code>␣ b N</code> | +New Buffer                       | [bindings](#new-buffer) | N/A                                                                 |

# +Comments

Key Binding: <code>␣ c</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type    | Command(s)                         |
| ------------------ | ------------------- | ------- | ---------------------------------- |
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
| <code>␣ e l</code> | List errors     | command                       | `workbench.actions.view.problems`  |
| <code>␣ e n</code> | Next error      | command                       | `editor.action.marker.nextInFiles` |
| <code>␣ e p</code> | Previous error  | command                       | `editor.action.marker.prevInFiles` |
| <code>␣ e N</code> | Previous error  | command                       | `editor.action.marker.prevInFiles` |

# +File

Key Binding: <code>␣ f</code>

Type: <code>bindings</code>

| Key Binding        | Name                                   | Type                                     | Command(s)                                                          |
| ------------------ | -------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| <code>␣ f =</code> | Format file                            | command                                  | `editor.action.formatDocument`                                      |
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
| <code>␣ f R</code> | Rename file                            | commands                                 | `workbench.files.action.showActiveFileInExplorer`<br />`renameFile` |
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

| Key Binding        | Name                        | Type    | Command(s)                        |
| ------------------ | --------------------------- | ------- | --------------------------------- |
| <code>␣ j =</code> | Format region or buffer     | command | `editor.action.format`            |
| <code>␣ j i</code> | Jump to symbol in buffer    | command | `workbench.action.gotoSymbol`     |
| <code>␣ j j</code> | Jump to character           | command | `vim.remap`                       |
| <code>␣ j l</code> | Jump to line                | command | `vim.remap`                       |
| <code>␣ j n</code> | Split new line              | command | `lineBreakInsert`                 |
| <code>␣ j v</code> | Jump to outline/variables   | command | `breadcrumbs.focusAndSelect`      |
| <code>␣ j w</code> | Jump to word                | command | `vim.remap`                       |
| <code>␣ j I</code> | Jump to symbol in workspace | command | `workbench.action.showAllSymbols` |

# +Layouts

Key Binding: <code>␣ l</code>

Type: <code>bindings</code>

| Key Binding        | Name            | Type    | Command(s)                     |
| ------------------ | --------------- | ------- | ------------------------------ |
| <code>␣ l d</code> | Close workspace | command | `workbench.action.closeFolder` |

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

# +Resume

Key Binding: <code>␣ r</code>

Type: <code>bindings</code>

| Key Binding        | Name              | Type    | Command(s)                                          |
| ------------------ | ----------------- | ------- | --------------------------------------------------- |
| <code>␣ r b</code> | Recent buffers    | command | `workbench.action.showAllEditorsByMostRecentlyUsed` |
| <code>␣ r s</code> | Search in project | command | `workbench.action.findInFiles`                      |

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
| <code>␣ s J</code> | Jump to symbol in workspace                   | command                        | `workbench.action.showAllSymbols`                                                                   |
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

| Key Binding        | Name                              | Type                         | Command(s)                                    |
| ------------------ | --------------------------------- | ---------------------------- | --------------------------------------------- |
| <code>␣ w -</code> | Split window below                | command                      | `workbench.action.splitEditorDown`            |
| <code>␣ w /</code> | Split window right                | command                      | `workbench.action.splitEditor`                |
| <code>␣ w =</code> | Reset window sizes                | command                      | `workbench.action.evenEditorWidths`           |
| <code>␣ w [</code> | Shrink window                     | [transient](#shrink-window)  | `workbench.action.decreaseViewSize`           |
| <code>␣ w ]</code> | Enlarge window                    | [transient](#enlarge-window) | `workbench.action.increaseViewSize`           |
| <code>␣ w d</code> | Close window                      | command                      | `workbench.action.closeEditorsInGroup`        |
| <code>␣ w h</code> | Focus window left                 | command                      | `workbench.action.focusPreviousGroup`         |
| <code>␣ w j</code> | Focus window down                 | command                      | `workbench.action.focusBelowGroup`            |
| <code>␣ w k</code> | Focus window up                   | command                      | `workbench.action.focusAboveGroup`            |
| <code>␣ w l</code> | Focus window right                | command                      | `workbench.action.focusNextGroup`             |
| <code>␣ w m</code> | Maximize window                   | command                      | `workbench.action.toggleEditorWidths`         |
| <code>␣ w o</code> | Switch frame                      | command                      | `workbench.action.quickSwitchWindow`          |
| <code>␣ w s</code> | Split window below                | command                      | `workbench.action.splitEditorDown`            |
| <code>␣ w v</code> | Split window right                | command                      | `workbench.action.splitEditor`                |
| <code>␣ w w</code> | Focus next window                 | command                      | `workbench.action.focusNextGroup`             |
| <code>␣ w x</code> | Close all windows                 | command                      | `workbench.action.closeAllGroups`             |
| <code>␣ w z</code> | Combine all buffers               | command                      | `workbench.action.joinAllGroups`              |
| <code>␣ w D</code> | Close all other windows           | command                      | `workbench.action.closeEditorsInOtherGroups`  |
| <code>␣ w F</code> | Open new empty frame              | command                      | `workbench.action.newWindow`                  |
| <code>␣ w H</code> | Move window left                  | command                      | `workbench.action.moveActiveEditorGroupLeft`  |
| <code>␣ w J</code> | Move window down                  | command                      | `workbench.action.moveActiveEditorGroupDown`  |
| <code>␣ w K</code> | Move window up                    | command                      | `workbench.action.moveActiveEditorGroupUp`    |
| <code>␣ w L</code> | Move window right                 | command                      | `workbench.action.moveActiveEditorGroupRight` |
| <code>␣ w M</code> | Maximize window and hide side bar | command                      | `workbench.action.maximizeEditor`             |
| <code>␣ w W</code> | Focus previous window             | command                      | `workbench.action.focusPreviousGroup`         |

# +Text

Key Binding: <code>␣ x</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type                          | Command(s)                              |
| ------------------ | ------------------- | ----------------------------- | --------------------------------------- |
| <code>␣ x .</code> | Quick fix           | command                       | `editor.action.quickFix`                |
| <code>␣ x a</code> | Find all references | command                       | `editor.action.referenceSearch.trigger` |
| <code>␣ x i</code> | Organize Imports    | command                       | `editor.action.organizeImports`         |
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

# +Major

Key Binding: <code>␣ m</code>

Type: <code>conditional</code>

| Condition                        | Name     | Type                  | Command(s) |
| -------------------------------- | -------- | --------------------- | ---------- |
| <code>languageId:go</code>       | Go       | [bindings](#go)       | N/A        |
| <code>languageId:markdown</code> | Markdown | [bindings](#markdown) | N/A        |

# +Show

Key Binding: <code>␣ S</code>

Type: <code>bindings</code>

| Key Binding        | Name                 | Type    | Command(s)                             |
| ------------------ | -------------------- | ------- | -------------------------------------- |
| <code>␣ S d</code> | Show debug console   | command | `workbench.debug.action.toggleRepl`    |
| <code>␣ S e</code> | Show explorer        | command | `workbench.view.explorer`              |
| <code>␣ S g</code> | Show source control  | command | `workbench.view.scm`                   |
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

# Markdown

Key Binding: <code>␣ m languageId:markdown</code>

Type: <code>bindings</code>

| Key Binding                            | Name               | Type                           | Command(s) |
| -------------------------------------- | ------------------ | ------------------------------ | ---------- |
| <code>␣ m languageId:markdown c</code> | +Buffer commands   | [bindings](#buffer-commands)   | N/A        |
| <code>␣ m languageId:markdown t</code> | +Table of Contents | [bindings](#table-of-contents) | N/A        |
| <code>␣ m languageId:markdown x</code> | +Text              | [bindings](#text)              | N/A        |

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

# +Format

Key Binding: <code>␣ m languageId:go =</code>

Type: <code>bindings</code>

| Key Binding                        | Name                       | Type    | Command(s)                               |
| ---------------------------------- | -------------------------- | ------- | ---------------------------------------- |
| <code>␣ m languageId:go = =</code> | Format document            | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:go = d</code> | +Format document with      | command | `editor.action.formatDocument`           |
| <code>␣ m languageId:go = m</code> | Format modified lines only | command | `editor.action.formatChanges`            |
| <code>␣ m languageId:go = s</code> | Format selection           | command | `editor.action.formatSelection`          |
| <code>␣ m languageId:go = S</code> | +Format selection with     | command | `editor.action.formatSelection.multiple` |

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

| Key Binding                        | Name                   | Type    | Command(s)                              |
| ---------------------------------- | ---------------------- | ------- | --------------------------------------- |
| <code>␣ m languageId:go g d</code> | Go to definition       | command | `editor.action.revealDefinition`        |
| <code>␣ m languageId:go g e</code> | Go to errors/problems  | command | `workbench.action.problems.focus`       |
| <code>␣ m languageId:go g g</code> | Go to definition       | command | `editor.action.revealDefinition`        |
| <code>␣ m languageId:go g i</code> | Find symbol in file    | command | `workbench.action.gotoSymbol`           |
| <code>␣ m languageId:go g m</code> | Go to method in file   | command | `workbench.action.gotoMethod`           |
| <code>␣ m languageId:go g r</code> | Peek references        | command | `editor.action.referenceSearch.trigger` |
| <code>␣ m languageId:go g t</code> | Go to type definition  | command | `editor.action.goToTypeDefinition`      |
| <code>␣ m languageId:go g D</code> | Peek definition        | command | `editor.action.peekDefinition`          |
| <code>␣ m languageId:go g I</code> | Find symbol in project | command | `workbench.action.showAllSymbols`       |
| <code>␣ m languageId:go g R</code> | Find all references    | command | `references-view.findReferences`        |
| <code>␣ m languageId:go g T</code> | Peek type definition   | command | `editor.action.peekTypeDefinition`      |

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
| <code>␣ m languageId:go t c</code> | Cancel running tets        | command                 | `go.test.cancel`        |
| <code>␣ m languageId:go t d</code> | Debug test at cursor       | command                 | `go.debug.cursor`       |
| <code>␣ m languageId:go t f</code> | Test function at cursor    | command                 | `go.test.cursor`        |
| <code>␣ m languageId:go t l</code> | Test previous              | command                 | `go.test.previous`      |
| <code>␣ m languageId:go t p</code> | Test package               | command                 | `go.test.package`       |
| <code>␣ m languageId:go t s</code> | Subtest at cursor          | command                 | `go.subtest.cursor`     |
| <code>␣ m languageId:go t w</code> | Test packages in workspace | command                 | `go.test.workspace`     |
| <code>␣ m languageId:go t F</code> | Test file                  | command                 | `go.test.file`          |
| <code>␣ m languageId:go t P</code> | Apply cover profile        | command                 | `go.apply.coverprofile` |
| <code>␣ m languageId:go t b</code> | +Benchmarks                | [bindings](#benchmarks) | N/A                     |
| <code>␣ m languageId:go t g</code> | +Generate                  | [bindings](#generate)   | N/A                     |
| <code>␣ m languageId:go t t</code> | +Toggle                    | [bindings](#toggle)     | N/A                     |

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

Key Binding: <code>␣ m languageId:go t t</code>

Type: <code>bindings</code>

| Key Binding                          | Name                                    | Type    | Command(s)            |
| ------------------------------------ | --------------------------------------- | ------- | --------------------- |
| <code>␣ m languageId:go t t c</code> | Toggle test coverage in current package | command | `go.test.coverage`    |
| <code>␣ m languageId:go t t f</code> | Toggle open test file                   | command | `go.toggle.test.file` |

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
