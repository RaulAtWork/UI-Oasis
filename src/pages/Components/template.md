# Template

## Structure

This is the main template to create a component overview

```html
<article className="component-details">
  <h1>Title</h1>
  <h2>Preview</h2>
  //...
  <h2>Code</h2>
  //...
</article>
```

To add code preview

```html
// For simple code
<CodeSyntax />

// For categorized code
<TabbedCodeSyntax />
```

For new components

- Create a new folder under components
- Create the jsx component and css style file
- On the main component export code and codeCSS for the code preview
