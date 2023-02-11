# Add Code Files Extension For Quarto

This extension provides filter that to add code from source files.

:information_source: This filter is an alternative to the [include-code-files](https://github.com/quarto-ext/include-code-files) by [@quarto-ext](https://github.com/quarto-ext) with [`code-fold`](https://quarto.org/docs/output-formats/html-code.html#folding-code)-ing capability. If you just want to add contents from another file and do not care about code-folding you probably want to use the former filter, which is simpler to use.

## Installing

:warning: This extension requires quarto version at least to be 1.2.

```bash
quarto add shafayetShafe/add-code-files
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Usage

The filter recognizes [Divs](https://quarto.org/docs/authoring/markdown-basics.html#divs-and-spans) or code-chunk with the `add-from` attribute present. It swaps the content of the code block with contents from a file.

Here is how you add the filter to a quarto document,

```
---
title: "Quarto"
filters:
   - add-code-files
---
```

### Including Files

Once adding the filter to the quarto document, use the `add-from` attribute in a Div containing a empty code-block. For example,

````
::: {add-from=hello-world.cpp}
```{.cpp}
```
:::
````

would add the codes from `hello-world.cpp` within that `.cpp` code block. And you need to use `.cpp` to get correct syntax highlighting for added c++ code. Run `quarto pandoc --list-highlight-languages` to get the list of languages for which syntax highlighting is supported.

You can also use the following options,

- **`start-line`**, **`end-line`**: To add a specific range of lines.
- **`code-line-numbers`**: To enable source code line numbering.
- **dedent**: using this you can have whitespaces removed on each line, where possible (non-whitespace character will not be removed even if they occur in the dedent area).

````
::: {add-from=hello-world.cpp start-line=1 end-line=8 code-line-numbers="true"}
```{.cpp}
```
:::
````

View the live demo of

- [document rendered with `jupyter`](https://shafayetshafee.github.io/add-code-files/example.html)

- [document rendered with `knitr`](https://shafayetshafee.github.io/add-code-files/example_knitr.html)

### filename and code-filename

You can also use the `filename` attribute to show a name of the file the added code is associated with. But the issue is, the attribute `filename` does not work with `code-folding` as intended for that code block. This filter provides another option `code-filename` which works with `code-folding`.

Therefore, use `code-filename` only when using `code-fold: true`, otherwise use `filename` (for non HTML format or for html format without `code-fold: true`)

**`code-filename` only works with `code-folding`. For othercases, use `filename`**

View a [live demo of this issue](https://shafayetshafee.github.io/add-code-files/example_filename.html)

