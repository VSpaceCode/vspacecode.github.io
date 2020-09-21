---
id: default-keybindings
title: Default Keybindings
---

<!-- AUTO GENERATED. DO NOT MODIFY MANUALLY -->

# VSpaceCode

Key Binding: <code>␣</code>

Type: <code>bindings</code>

| Key Binding      | Name                             | Type                                    |
| ---------------- | -------------------------------- | --------------------------------------- |
| <code>␣ ␣</code> | Commands...                      | command                                 |
| <code>␣ ↹</code> | Last buffer                      | commands                                |
| <code>␣ b</code> | Buffers...                       | [bindings](#buffers)                    |
| <code>␣ c</code> | Comments...                      | [bindings](#comments)                   |
| <code>␣ d</code> | Debug...                         | [bindings](#debug)                      |
| <code>␣ D</code> | Diff/Compare...                  | [bindings](#diffcompare)                |
| <code>␣ e</code> | Errors...                        | [bindings](#errors)                     |
| <code>␣ f</code> | File...                          | [bindings](#file)                       |
| <code>␣ F</code> | Frame...                         | [bindings](#frame)                      |
| <code>␣ g</code> | Git...                           | [bindings](#git)                        |
| <code>␣ h</code> | Help...                          | [bindings](#help)                       |
| <code>␣ i</code> | Insert...                        | [bindings](#insert)                     |
| <code>␣ j</code> | Jump/Join/Split...               | [bindings](#jumpjoinsplit)              |
| <code>␣ l</code> | Layouts...                       | [bindings](#layouts)                    |
| <code>␣ m</code> | Major...                         | [conditional](#major)                   |
| <code>␣ p</code> | Project...                       | [bindings](#project)                    |
| <code>␣ q</code> | Quit..                           | [bindings](#quit)                       |
| <code>␣ r</code> | Resume...                        | [bindings](#resume)                     |
| <code>␣ s</code> | Search/Symbol...                 | [bindings](#searchsymbol)               |
| <code>␣ S</code> | Show...                          | [bindings](#show)                       |
| <code>␣ t</code> | Toggles...                       | [bindings](#toggles)                    |
| <code>␣ T</code> | UI toggles...                    | [bindings](#ui-toggles)                 |
| <code>␣ w</code> | Window...                        | [bindings](#window)                     |
| <code>␣ x</code> | Text...                          | [bindings](#text)                       |
| <code>␣ z</code> | Zoom/Fold...                     | [bindings](#zoomfold)                   |
| <code>␣ !</code> | Show terminal                    | command                                 |
| <code>␣ /</code> | Search in project                | command                                 |
| <code>␣ '</code> | Show terminal                    | command                                 |
| <code>␣ "</code> | Open new external terminal       | command                                 |
| <code>␣ *</code> | Search in project with selection | commands                                |
| <code>␣ v</code> | Smart select/expand region       | [transient](#smart-selectexpand-region) |
| <code>␣ ;</code> | Toggle comment                   | command                                 |
| <code>␣ 1</code> | Focus 1st window                 | command                                 |
| <code>␣ 2</code> | Focus 2nd window                 | command                                 |
| <code>␣ 3</code> | Focus 3rd window                 | command                                 |
| <code>␣ 4</code> | Focus 4th window                 | command                                 |
| <code>␣ 5</code> | Focus 5th window                 | command                                 |
| <code>␣ 6</code> | Focus 6th window                 | command                                 |
| <code>␣ 7</code> | Focus 7th window                 | command                                 |
| <code>␣ 8</code> | Focus 8th window                 | command                                 |

# Buffers...

Key Binding: <code>␣ b</code>

Type: <code>bindings</code>

| Key Binding        | Name                              | Type                    |
| ------------------ | --------------------------------- | ----------------------- |
| <code>␣ b 1</code> | First buffer in window            | command                 |
| <code>␣ b 0</code> | Last buffer in window             | command                 |
| <code>␣ b b</code> | Show all buffers                  | command                 |
| <code>␣ b B</code> | Show all buffers in active window | command                 |
| <code>␣ b d</code> | Close active buffer               | command                 |
| <code>␣ b H</code> | Move buffer into left window      | command                 |
| <code>␣ b J</code> | Move buffer into below window     | command                 |
| <code>␣ b K</code> | Move buffer into above window     | command                 |
| <code>␣ b L</code> | Move buffer into right window     | command                 |
| <code>␣ b M</code> | Close other buffers               | command                 |
| <code>␣ b n</code> | Next buffer                       | command                 |
| <code>␣ b p</code> | Previous buffer                   | command                 |
| <code>␣ b N</code> | New Buffer...                     | [bindings](#new-buffer) |
| <code>␣ b s</code> | Scratch buffer                    | command                 |
| <code>␣ b t</code> | Pin buffer                        | command                 |
| <code>␣ b T</code> | Unpin buffer                      | command                 |
| <code>␣ b u</code> | Reopen closed buffer              | command                 |
| <code>␣ b P</code> | Paste clipboard to buffer         | commands                |
| <code>␣ b Y</code> | Copy buffer to clipboard          | commands                |

# Comments...

Key Binding: <code>␣ c</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type    |
| ------------------ | ------------------- | ------- |
| <code>␣ c l</code> | Toggle line comment | command |
| <code>␣ c n</code> | Next error          | command |
| <code>␣ c N</code> | Previous error      | command |

# Debug...

Key Binding: <code>␣ d</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type                    |
| ------------------ | --------------------- | ----------------------- |
| <code>␣ d d</code> | Start debug           | command                 |
| <code>␣ d D</code> | Run without debugging | command                 |
| <code>␣ d S</code> | Stop debug            | command                 |
| <code>␣ d c</code> | Continue debug        | command                 |
| <code>␣ d p</code> | Pause debug           | command                 |
| <code>␣ d R</code> | Restart debug         | command                 |
| <code>␣ d i</code> | Step into             | command                 |
| <code>␣ d s</code> | Step over             | command                 |
| <code>␣ d o</code> | Step out              | command                 |
| <code>␣ d b</code> | Breakpoint...         | [bindings](#breakpoint) |
| <code>␣ d j</code> | Jump to cursor        | command                 |
| <code>␣ d v</code> | REPL                  | command                 |
| <code>␣ d w</code> | Focus on watch window | command                 |
| <code>␣ d W</code> | Add to watch          | command                 |

# Diff/Compare...

Key Binding: <code>␣ D</code>

Type: <code>bindings</code>

| Key Binding        | Name                               | Type    |
| ------------------ | ---------------------------------- | ------- |
| <code>␣ D c</code> | Compare active file with clipboard | command |
| <code>␣ D D</code> | Compare active file with...        | command |
| <code>␣ D m</code> | Compare current merge conflict     | command |
| <code>␣ D s</code> | Compare active file with saved     | command |
| <code>␣ D w</code> | Toggle ignore trim whitespace      | command |

# Errors...

Key Binding: <code>␣ e</code>

Type: <code>bindings</code>

| Key Binding        | Name            | Type                          |
| ------------------ | --------------- | ----------------------------- |
| <code>␣ e .</code> | Error transient | [transient](#error-transient) |
| <code>␣ e l</code> | List errors     | command                       |
| <code>␣ e N</code> | Previous error  | command                       |
| <code>␣ e n</code> | Next error      | command                       |
| <code>␣ e p</code> | Previous error  | command                       |

# File...

Key Binding: <code>␣ f</code>

Type: <code>bindings</code>

| Key Binding        | Name                                   | Type                                     |
| ------------------ | -------------------------------------- | ---------------------------------------- |
| <code>␣ f D</code> | Delete current file                    | commands                                 |
| <code>␣ f f</code> | Open file/folder                       | command                                  |
| <code>␣ f n</code> | New file                               | command                                  |
| <code>␣ f w</code> | Open active in new window              | command                                  |
| <code>␣ f s</code> | Save file                              | command                                  |
| <code>␣ f S</code> | Save all files                         | command                                  |
| <code>␣ f r</code> | Open recent...                         | command                                  |
| <code>␣ f R</code> | Rename file                            | commands                                 |
| <code>␣ f t</code> | Toggle tree/explorer view              | [conditional](#toggle-treeexplorer-view) |
| <code>␣ f T</code> | Show active file in tree/explorer view | command                                  |
| <code>␣ f o</code> | Open with...                           | command                                  |
| <code>␣ f l</code> | Change file language                   | command                                  |
| <code>␣ f L</code> | Locate file                            | command                                  |
| <code>␣ f =</code> | Format file                            | command                                  |
| <code>␣ f e</code> | Emacs/VSpaceCode...                    | [bindings](#emacsvspacecode)             |
| <code>␣ f i</code> | Indentation...                         | [bindings](#indentation)                 |
| <code>␣ f y</code> | Yank...                                | [bindings](#yank)                        |

# Frame...

Key Binding: <code>␣ F</code>

Type: <code>bindings</code>

| Key Binding        | Name                             | Type    |
| ------------------ | -------------------------------- | ------- |
| <code>␣ F n</code> | Duplicate workspace in new frame | command |
| <code>␣ F N</code> | Open new empty frame             | command |
| <code>␣ F o</code> | Switch frame                     | command |

# Git...

Key Binding: <code>␣ g</code>

Type: <code>bindings</code>

| Key Binding        | Name                  | Type              |
| ------------------ | --------------------- | ----------------- |
| <code>␣ g b</code> | Blame file            | command           |
| <code>␣ g c</code> | Clone                 | command           |
| <code>␣ g i</code> | Initialize repository | command           |
| <code>␣ g s</code> | Status                | command           |
| <code>␣ g m</code> | Magit dispatch        | command           |
| <code>␣ g S</code> | Stage file            | command           |
| <code>␣ g U</code> | Unstage file          | command           |
| <code>␣ g f</code> | File...               | [bindings](#file) |

# Help...

Key Binding: <code>␣ h</code>

Type: <code>bindings</code>

| Key Binding        | Name                      | Type    |
| ------------------ | ------------------------- | ------- |
| <code>␣ h d</code> | Open VSCode Documentation | command |
| <code>␣ h k</code> | Open global key bindings  | command |
| <code>␣ h I</code> | Report VSCode Issue       | command |
| <code>␣ h T</code> | Open VSCode Tutorial      | command |

# Insert...

Key Binding: <code>␣ i</code>

Type: <code>bindings</code>

| Key Binding        | Name              | Type    |
| ------------------ | ----------------- | ------- |
| <code>␣ i j</code> | Insert line below | command |
| <code>␣ i k</code> | Insert line above | command |
| <code>␣ i s</code> | Insert snippet    | command |

# Jump/Join/Split...

Key Binding: <code>␣ j</code>

Type: <code>bindings</code>

| Key Binding        | Name                        | Type    |
| ------------------ | --------------------------- | ------- |
| <code>␣ j =</code> | Format file                 | command |
| <code>␣ j i</code> | Jump to symbol in buffer    | command |
| <code>␣ j I</code> | Jump to symbol in workspace | command |
| <code>␣ j v</code> | Jump to outline/variables   | command |
| <code>␣ j j</code> | Jump to character           | command |
| <code>␣ j l</code> | Jump to line                | command |
| <code>␣ j n</code> | Split new line              | command |
| <code>␣ j w</code> | Jump to word                | command |

# Layouts...

Key Binding: <code>␣ l</code>

Type: <code>bindings</code>

| Key Binding        | Name            | Type    |
| ------------------ | --------------- | ------- |
| <code>␣ l d</code> | Close workspace | command |

# Major...

Key Binding: <code>␣ m</code>

Type: <code>conditional</code>

| Condition                        | Name     | Type                  |
| -------------------------------- | -------- | --------------------- |
| <code>languageId:markdown</code> | Markdown | [bindings](#markdown) |

# Project...

Key Binding: <code>␣ p</code>

Type: <code>bindings</code>

| Key Binding        | Name                    | Type    |
| ------------------ | ----------------------- | ------- |
| <code>␣ p f</code> | Find file in project... | command |
| <code>␣ p l</code> | Switch project...       | command |
| <code>␣ p p</code> | Switch project...       | command |
| <code>␣ p R</code> | Replace in files...     | command |
| <code>␣ p t</code> | Show tree/explorer view | command |

# Quit..

Key Binding: <code>␣ q</code>

Type: <code>bindings</code>

| Key Binding        | Name                                  | Type     |
| ------------------ | ------------------------------------- | -------- |
| <code>␣ q f</code> | Close frame                           | command  |
| <code>␣ q q</code> | Close frame                           | command  |
| <code>␣ q Q</code> | Quit application                      | command  |
| <code>␣ q r</code> | Reload frame                          | command  |
| <code>␣ q R</code> | Reload frame with extensions disabled | command  |
| <code>␣ q s</code> | Save all and close frame              | commands |

# Resume...

Key Binding: <code>␣ r</code>

Type: <code>bindings</code>

| Key Binding        | Name              | Type    |
| ------------------ | ----------------- | ------- |
| <code>␣ r b</code> | Recent buffers    | command |
| <code>␣ r s</code> | Search in project | command |

# Search/Symbol...

Key Binding: <code>␣ s</code>

Type: <code>bindings</code>

| Key Binding        | Name                                          | Type                           |
| ------------------ | --------------------------------------------- | ------------------------------ |
| <code>␣ s c</code> | Clear highlight                               | command                        |
| <code>␣ s e</code> | Edit symbol                                   | command                        |
| <code>␣ s h</code> | Highlight symbol                              | [transient](#highlight-symbol) |
| <code>␣ s j</code> | Jump to symbol in buffer                      | command                        |
| <code>␣ s J</code> | Jump to symbol in workspace                   | command                        |
| <code>␣ s p</code> | Search in project                             | command                        |
| <code>␣ s P</code> | Search in project with selection              | commands                       |
| <code>␣ s r</code> | Search all references                         | command                        |
| <code>␣ s R</code> | Search all references in side bar             | command                        |
| <code>␣ s s</code> | Fuzzy search in current buffer                | command                        |
| <code>␣ s S</code> | Fuzzy search with selection in current buffer | commands                       |

# Show...

Key Binding: <code>␣ S</code>

Type: <code>bindings</code>

| Key Binding        | Name                 | Type    |
| ------------------ | -------------------- | ------- |
| <code>␣ S e</code> | Show explorer        | command |
| <code>␣ S s</code> | Show search          | command |
| <code>␣ S g</code> | Show source control  | command |
| <code>␣ S t</code> | Show test            | command |
| <code>␣ S r</code> | Show remote explorer | command |
| <code>␣ S x</code> | Show extensions      | command |
| <code>␣ S p</code> | Show problem         | command |
| <code>␣ S o</code> | Show output          | command |
| <code>␣ S d</code> | Show debug console   | command |

# Toggles...

Key Binding: <code>␣ t</code>

Type: <code>bindings</code>

| Key Binding        | Name                       | Type    |
| ------------------ | -------------------------- | ------- |
| <code>␣ t c</code> | Toggle find case sensitive | command |
| <code>␣ t w</code> | Toggle render whitespace   | command |
| <code>␣ t l</code> | Toggle word wrap           | command |

# UI toggles...

Key Binding: <code>␣ T</code>

Type: <code>bindings</code>

| Key Binding        | Name                                | Type    |
| ------------------ | ----------------------------------- | ------- |
| <code>␣ T b</code> | Toggle side bar visibility          | command |
| <code>␣ T c</code> | Toggle centered layout              | command |
| <code>␣ T i</code> | Select icon theme                   | command |
| <code>␣ T j</code> | Toggle panel visibility             | command |
| <code>␣ T F</code> | Toggle full screen                  | command |
| <code>␣ T s</code> | Select theme                        | command |
| <code>␣ T m</code> | Toggle maximized panel              | command |
| <code>␣ T t</code> | Toggle tool/activity bar visibility | command |
| <code>␣ T T</code> | Toggle tab visibility               | command |
| <code>␣ T z</code> | Toggle zen mode                     | command |

# Window...

Key Binding: <code>␣ w</code>

Type: <code>bindings</code>

| Key Binding        | Name                              | Type                         |
| ------------------ | --------------------------------- | ---------------------------- |
| <code>␣ w w</code> | Focus next window                 | command                      |
| <code>␣ w W</code> | Focus previous window             | command                      |
| <code>␣ w -</code> | Split window below                | command                      |
| <code>␣ w /</code> | Split window right                | command                      |
| <code>␣ w F</code> | Open new empty frame              | command                      |
| <code>␣ w o</code> | Switch frame                      | command                      |
| <code>␣ w s</code> | Split window below                | command                      |
| <code>␣ w v</code> | Split window right                | command                      |
| <code>␣ w h</code> | Focus window left                 | command                      |
| <code>␣ w j</code> | Focus window down                 | command                      |
| <code>␣ w k</code> | Focus window up                   | command                      |
| <code>␣ w l</code> | Focus window right                | command                      |
| <code>␣ w H</code> | Move window left                  | command                      |
| <code>␣ w J</code> | Move window down                  | command                      |
| <code>␣ w K</code> | Move window up                    | command                      |
| <code>␣ w L</code> | Move window right                 | command                      |
| <code>␣ w m</code> | Maximize window                   | command                      |
| <code>␣ w M</code> | Maximize window and hide side bar | command                      |
| <code>␣ w =</code> | Reset window sizes                | command                      |
| <code>␣ w z</code> | Combine all buffers               | command                      |
| <code>␣ w d</code> | Close window                      | command                      |
| <code>␣ w D</code> | Close all other windows           | command                      |
| <code>␣ w x</code> | Close all windows                 | command                      |
| <code>␣ w [</code> | Shrink window                     | [transient](#shrink-window)  |
| <code>␣ w ]</code> | Enlarge window                    | [transient](#enlarge-window) |

# Text...

Key Binding: <code>␣ x</code>

Type: <code>bindings</code>

| Key Binding        | Name                | Type                          |
| ------------------ | ------------------- | ----------------------------- |
| <code>␣ x i</code> | Organize Imports    | command                       |
| <code>␣ x r</code> | Rename symbol       | command                       |
| <code>␣ x R</code> | Refactor            | command                       |
| <code>␣ x .</code> | Quick fix           | command                       |
| <code>␣ x a</code> | Find all references | command                       |
| <code>␣ x u</code> | To lower case       | command                       |
| <code>␣ x U</code> | To upper case       | command                       |
| <code>␣ x J</code> | Move lines down     | [transient](#move-lines-down) |
| <code>␣ x K</code> | Move lines up       | [transient](#move-lines-up)   |
| <code>␣ x l</code> | Lines...            | [bindings](#lines)            |
| <code>␣ x d</code> | Delete...           | [bindings](#delete)           |
| <code>␣ x m</code> | Merge conflict...   | [bindings](#merge-conflict)   |

# Zoom/Fold...

Key Binding: <code>␣ z</code>

Type: <code>bindings</code>

| Key Binding        | Name             | Type                        |
| ------------------ | ---------------- | --------------------------- |
| <code>␣ z .</code> | Fold...          | [bindings](#fold)           |
| <code>␣ z f</code> | Frame...         | [transient](#frame)         |
| <code>␣ z x</code> | Font...          | [transient](#font)          |
| <code>␣ z i</code> | Image preview... | [transient](#image-preview) |

# Smart select/expand region

Key Binding: <code>␣ v</code>

Type: <code>transient</code>

| Key Binding    | Name             | Type    |
| -------------- | ---------------- | ------- |
| <code>v</code> | Grow selection   | command |
| <code>V</code> | Shrink selection | command |

# New Buffer...

Key Binding: <code>␣ b N</code>

Type: <code>bindings</code>

| Key Binding          | Name                              | Type     |
| -------------------- | --------------------------------- | -------- |
| <code>␣ b N n</code> | New untitled buffer               | command  |
| <code>␣ b N l</code> | New untitled buffer (split right) | commands |
| <code>␣ b N j</code> | New untitled buffer (split down)  | commands |
| <code>␣ b N k</code> | New untitled buffer (split up)    | commands |
| <code>␣ b N h</code> | New untitled buffer (split left)  | commands |

# Breakpoint...

Key Binding: <code>␣ d b</code>

Type: <code>bindings</code>

| Key Binding          | Name                       | Type                              |
| -------------------- | -------------------------- | --------------------------------- |
| <code>␣ d b b</code> | Toggle breakpoint          | command                           |
| <code>␣ d b i</code> | Toggle inline breakpoint   | command                           |
| <code>␣ d b c</code> | Add conditional breakpoint | command                           |
| <code>␣ d b f</code> | Add function breakpoint    | command                           |
| <code>␣ d b d</code> | Delete breakpoint          | command                           |
| <code>␣ d b D</code> | Delete all breakpoints     | command                           |
| <code>␣ d b e</code> | Enable breakpoint          | command                           |
| <code>␣ d b E</code> | Enable all breakpoints     | command                           |
| <code>␣ d b s</code> | Disable breakpoint         | command                           |
| <code>␣ d b S</code> | Disable all breakpoints    | command                           |
| <code>␣ d b n</code> | Next breakpoint            | [transient](#next-breakpoint)     |
| <code>␣ d b p</code> | Previous breakpoint        | [transient](#previous-breakpoint) |

# Error transient

Key Binding: <code>␣ e .</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    |
| -------------- | -------------- | ------- |
| <code>N</code> | Previous error | command |
| <code>n</code> | Next error     | command |
| <code>p</code> | Previous error | command |

# Toggle tree/explorer view

Key Binding: <code>␣ f t</code>

Type: <code>conditional</code>

| Condition                                                  | Name               | Type    |
| ---------------------------------------------------------- | ------------------ | ------- |
|                                                            | Show explorer view | command |
| <code>when:sideBarVisible && explorerViewletVisible</code> | Hide side bar      | command |

# Emacs/VSpaceCode...

Key Binding: <code>␣ f e</code>

Type: <code>bindings</code>

| Key Binding          | Name                          | Type    |
| -------------------- | ----------------------------- | ------- |
| <code>␣ f e d</code> | Open settings                 | command |
| <code>␣ f e D</code> | Open settings JSON            | command |
| <code>␣ f e k</code> | Open global key bindings      | command |
| <code>␣ f e K</code> | Open global key bindings JSON | command |
| <code>␣ f e l</code> | Open language settings        | command |
| <code>␣ f e s</code> | Configure user snippets       | command |
| <code>␣ f e w</code> | Open workspace settings       | command |
| <code>␣ f e W</code> | Open workspace settings JSON  | command |

# Indentation...

Key Binding: <code>␣ f i</code>

Type: <code>bindings</code>

| Key Binding          | Name                          | Type    |
| -------------------- | ----------------------------- | ------- |
| <code>␣ f i i</code> | Change indentation            | command |
| <code>␣ f i d</code> | Detect indentation            | command |
| <code>␣ f i r</code> | Reindent                      | command |
| <code>␣ f i R</code> | Reindent selected             | command |
| <code>␣ f i t</code> | Convert indentation to tabs   | command |
| <code>␣ f i s</code> | Convert indentation to spaces | command |

# Yank...

Key Binding: <code>␣ f y</code>

Type: <code>bindings</code>

| Key Binding          | Name                                                   | Type    |
| -------------------- | ------------------------------------------------------ | ------- |
| <code>␣ f y c</code> | Copy path of active file with line and column          | command |
| <code>␣ f y C</code> | Copy relative path of active file with line and column | command |
| <code>␣ f y d</code> | Copy directory path of the active file                 | command |
| <code>␣ f y D</code> | Copy relative directory path of the active file        | command |
| <code>␣ f y l</code> | Copy path of active file with line                     | command |
| <code>␣ f y L</code> | Copy relative path of active file with line            | command |
| <code>␣ f y n</code> | Copy filename of active file                           | command |
| <code>␣ f y N</code> | Copy filename without extension of active file         | command |
| <code>␣ f y y</code> | Copy path of active file                               | command |
| <code>␣ f y Y</code> | Copy relative path of active file                      | command |

# File...

Key Binding: <code>␣ g f</code>

Type: <code>bindings</code>

| Key Binding          | Name              | Type    |
| -------------------- | ----------------- | ------- |
| <code>␣ g f d</code> | Diff              | command |
| <code>␣ g f l</code> | Show log/timeline | command |

# Markdown

Key Binding: <code>␣ m languageId:markdown</code>

Type: <code>bindings</code>

| Key Binding                            | Name                     | Type    |
| -------------------------------------- | ------------------------ | ------- |
| <code>␣ m languageId:markdown p</code> | Open preview to the side | command |

# Highlight symbol

Key Binding: <code>␣ s h</code>

Type: <code>transient</code>

| Key Binding    | Name                             | Type     |
| -------------- | -------------------------------- | -------- |
| <code>p</code> | Previous occurrence              | command  |
| <code>N</code> | Previous occurrence              | command  |
| <code>n</code> | Next occurrence                  | command  |
| <code>/</code> | Search in project with selection | commands |

# Shrink window

Key Binding: <code>␣ w [</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    |
| -------------- | -------------- | ------- |
| <code>[</code> | Shrink window  | command |
| <code>]</code> | Enlarge window | command |

# Enlarge window

Key Binding: <code>␣ w ]</code>

Type: <code>transient</code>

| Key Binding    | Name           | Type    |
| -------------- | -------------- | ------- |
| <code>[</code> | Shrink window  | command |
| <code>]</code> | Enlarge window | command |

# Move lines down

Key Binding: <code>␣ x J</code>

Type: <code>transient</code>

| Key Binding    | Name            | Type    |
| -------------- | --------------- | ------- |
| <code>J</code> | Move lines down | command |
| <code>K</code> | Move lines up   | command |

# Move lines up

Key Binding: <code>␣ x K</code>

Type: <code>transient</code>

| Key Binding    | Name            | Type    |
| -------------- | --------------- | ------- |
| <code>J</code> | Move lines down | command |
| <code>K</code> | Move lines up   | command |

# Lines...

Key Binding: <code>␣ x l</code>

Type: <code>bindings</code>

| Key Binding          | Name                           | Type    |
| -------------------- | ------------------------------ | ------- |
| <code>␣ x l s</code> | Sort lines in ascending order  | command |
| <code>␣ x l S</code> | Sort lines in descending order | command |
| <code>␣ x l d</code> | Duplicate lines down           | command |
| <code>␣ x l D</code> | Duplicate lines up             | command |

# Delete...

Key Binding: <code>␣ x d</code>

Type: <code>bindings</code>

| Key Binding          | Name                       | Type    |
| -------------------- | -------------------------- | ------- |
| <code>␣ x d w</code> | Delete trailing whitespace | command |

# Merge conflict...

Key Binding: <code>␣ x m</code>

Type: <code>bindings</code>

| Key Binding          | Name                     | Type    |
| -------------------- | ------------------------ | ------- |
| <code>␣ x m b</code> | Accept both              | command |
| <code>␣ x m c</code> | Accept current           | command |
| <code>␣ x m i</code> | Accept incoming          | command |
| <code>␣ x m B</code> | Accept all both          | command |
| <code>␣ x m C</code> | Accept all current       | command |
| <code>␣ x m I</code> | Accept all incoming      | command |
| <code>␣ x m s</code> | Accept selection         | command |
| <code>␣ x m k</code> | Compare current conflict | command |
| <code>␣ x m n</code> | Next Conflict            | command |
| <code>␣ x m N</code> | Previous Conflict        | command |

# Fold...

Key Binding: <code>␣ z .</code>

Type: <code>bindings</code>

| Key Binding          | Name                      | Type    |
| -------------------- | ------------------------- | ------- |
| <code>␣ z . a</code> | Toggle: around a point    | command |
| <code>␣ z . c</code> | Close: at a point         | command |
| <code>␣ z . b</code> | Close: all block comments | command |
| <code>␣ z . g</code> | Close: all regions        | command |
| <code>␣ z . m</code> | Close: all                | command |
| <code>␣ z . o</code> | Open: at a point          | command |
| <code>␣ z . O</code> | Open: recursively         | command |
| <code>␣ z . G</code> | Open: all regions         | command |
| <code>␣ z . r</code> | Open: all                 | command |

# Frame...

Key Binding: <code>␣ z f</code>

Type: <code>transient</code>

| Key Binding    | Name       | Type    |
| -------------- | ---------- | ------- |
| <code>=</code> | Zoom in    | command |
| <code>+</code> | Zoom in    | command |
| <code>-</code> | Zoom out   | command |
| <code>0</code> | Reset zoom | command |

# Font...

Key Binding: <code>␣ z x</code>

Type: <code>transient</code>

| Key Binding    | Name       | Type    |
| -------------- | ---------- | ------- |
| <code>=</code> | Zoom in    | command |
| <code>+</code> | Zoom in    | command |
| <code>-</code> | Zoom out   | command |
| <code>0</code> | Reset zoom | command |

# Image preview...

Key Binding: <code>␣ z i</code>

Type: <code>transient</code>

| Key Binding    | Name     | Type    |
| -------------- | -------- | ------- |
| <code>=</code> | Zoom in  | command |
| <code>+</code> | Zoom in  | command |
| <code>-</code> | Zoom out | command |

# Next breakpoint

Key Binding: <code>␣ d b n</code>

Type: <code>transient</code>

| Key Binding    | Name                | Type    |
| -------------- | ------------------- | ------- |
| <code>n</code> | Next breakpoint     | command |
| <code>p</code> | Previous breakpoint | command |

# Previous breakpoint

Key Binding: <code>␣ d b p</code>

Type: <code>transient</code>

| Key Binding    | Name                | Type    |
| -------------- | ------------------- | ------- |
| <code>n</code> | Next breakpoint     | command |
| <code>p</code> | Previous breakpoint | command |
