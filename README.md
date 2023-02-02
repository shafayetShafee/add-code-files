# Include Code Files Extension For Quarto

This extension provides Filter to include code from source files.

:information_source: This filter extends the [include-code-files](https://github.com/quarto-ext/include-code-files) by [@quarto-ext](https://github.com/quarto-ext) with [`code-fold`](https://quarto.org/docs/output-formats/html-code.html#folding-code)-ing capability. If you just want to include contents from another file and do not care about code-folding you probably want to use the former filter, which is simpler to use.

## Installing

```bash
quarto add shafayetShafe/include-code-files
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Usage

The filter recognizes [Divs](https://quarto.org/docs/authoring/markdown-basics.html#divs-and-spans) or code-chunk[^1] with the `include-from` attribute present. It swaps the content of the code block with contents from a file.

Here is how you add the filter to a quarto document,

```
---
title: "Quarto"
filters:
   - include-code-files
---

```

### Including Files

Once adding the filter to the quarto document, use the `include-from` attribute in a Div containing a empty code-block. For example,

````
::: {include-from=hello-world.cpp}
```{.cpp}
```
:::
````

would include the codes from `hello-world.cpp` within that `.cpp` code chunk. And you need to use `.cpp` to get correct syntax highlighting for added c++ code. Run `quarto pandoc --list-highlight-languages` to get the list of languages for which syntax highlighting is supported.

You can also use the following options,

- **`start-line`**, **`end-line`**: To include a specific range of lines.
- **`code-line-numbers`**: To enable source code line numbering.
- **dedent**: using this you can have whitespaces removed on each line, where possible (non-whitespace character will not be removed even if they occur in the dedent area).


````
::: {include-from=hello-world.cpp start-line=1 end-line=8 code-line-numbers="true"}
```{.cpp}
```
:::

````




## Example
See the source code [example.qmd](example.qmd) and its [output](https://shafayetshafee.github.io/include-code-files/example.html) and also see [example_knitr.qmd](example_knitr.qmd) and its [output](https://shafayetshafee.github.io/include-code-files/example_knitr.html)