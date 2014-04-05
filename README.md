# Apollo.js [![Build Status](https://travis-ci.org/toddmotto/apollo.png)](https://travis-ci.org/toddmotto/apollo)

Apollo is a 1KB standalone DOM class manipulation module that provides a cross-browser wrapper for `addClass`, `hasClass`, `removeClass` and `toggleClass` methods. Apollo uses the modern and blazing fast `classList` methods when available, and falls back to manual class manipulation for legacy support, meaning IE6+ support through to Chrome.

```javascript
// hasClass() returns boolean on single class
Apollo.hasClass(element, 'className1'); single as string
Apollo.hasClass(element, ['className1']); single as array

// addClass() adds single or multiple classes
Apollo.addClass(element, 'className1'); // single as string
Apollo.addClass(element, ['className1']); // single as array
Apollo.addClass(element, 'className1 className2'); // multiple in string
Apollo.addClass(element, ['className1', 'className2']); // multiple as array

// removeClass() removes single or multiple classes
Apollo.removeClass(element, 'className1'); // single as string
Apollo.removeClass(element, ['className1']); // single as array
Apollo.removeClass(element, 'className1 className2'); // multiple in string
Apollo.removeClass(element, ['className1', 'className2']); // multiple as array

// toggleClass() toggles single or multiple classes
Apollo.toggleClass(element, 'className1'); // single as string
Apollo.toggleClass(element, ['className1']); // single as array
Apollo.toggleClass(element, 'className1 className2'); // multiple in string
Apollo.toggleClass(element, ['className1', 'className2']); // multiple as array
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/apollo.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.

```html
<body class="no-js">
  <!-- html above -->
  <script src="dist/apollo.js"></script>
  <script>
  Apollo.addClass(document.body, 'js');
  Apollo.removeClass(document.body, 'no-js');
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

- 1.6.0
	- Array of classes support, syntax improvements
- 1.5.0
	- Add CommonJS/Browserify support
- 1.4.0
  - Support for adding/removing/toggling multiple classes
- 1.3.0
  - Add Jasmine tests
  - Add AMD support
  - Split out Object methods and return based on feature test
- 1.2.1
  - Internet Explorer `this` context fix
- 1.2.0
  - Optimise `toggleClass` legacy definitions
- 1.1.0
  - Optimise classList usage and reduce if statements
- 1.0.0
  - Initial release
