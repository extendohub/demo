### Embedded math

Embedding math in your markdown is fun.  `${}^1/_2$` the time you might not even notice but simple things like `\(a^2 + b^2 = c^2\)` look way better. As you can see, equations can be embedded `$\sqrt[n]{1+x+x^2+x^3+\dots+x^n}$` directly in your normal text using `\(` or `$`. They can also be put in *display* mode using `\[` or `$$` delimiters as shown here.`$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$`

Using math *display* mode (starting with `$$` or `\[`) is equivalent to using a \`\`\`github/math code block. Here's the same equation as above but as a `github/math` code block.
```github/math
\[ \sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6} \]
```
