# Apollo.js [![Build Status](https://travis-ci.org/toddmotto/apollo.png)](https://travis-ci.org/toddmotto/apollo)

Apollo is a 1KB standalone DOM class manipulation module that provides a cross-browser wrapper for `addClass`, `hasClass`, `removeClass` and `toggleClass` methods. Apollo uses the modern and blazing fast `classList` methods when available, and falls back to manual class manipulation for legacy support, meaning IE6+ support through to Chrome.

```javascript
// hasClass() returns boolean on single class
Apollo.hasClass(element, 'className1');

// addClass() adds single or multiple classes
Apollo.addClass(element, 'className1'); // single
Apollo.addClass(element, 'className1 className2'); // multiple

// removeClass() removes single or multiple classes
Apollo.removeClass(element, 'className1'); // single
Apollo.removeClass(element, 'className1 className2'); // multiple

// toggleClass() toggles single or multiple classes
Apollo.toggleClass(element, 'className1'); // single
Apollo.toggleClass(element, 'className1 className2'); // multiple
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/apollo.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
	
```html
<body>
  <!-- html above -->
  <script src="dist/apollo.js"></script>
  <script>
  Apollo.addClass(document.body, 'js');
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

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
