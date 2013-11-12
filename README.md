# Apollo.js [![Build Status](https://travis-ci.org/toddmotto/apollo.png)](https://travis-ci.org/toddmotto/apollo)

Apollo is a &lt;1KB standalone DOM class manipulation API for adding, removing, toggling and testing the existence of classes on an element. Under the hood, Apollo uses the HTML5 `classList` API when available and fallbacks to manual class manipulation for legacy support. IE6+ for legacy and all HTMl5 browsers.

### addClass API
To add a class using Apollo, use the `addClass` API, which takes an element and a single class name.

```javascript
Apollo.addClass(element, className);
```

### removeClass API
To remove a class using Apollo, use the `removeClass` API, which takes an element and a single class name.

```javascript
Apollo.removeClass(element, className);
```

### toggleClass API
To toggle a class using Apollo, use the `toggleClass` API, which takes an element and a single class name.

```javascript
Apollo.toggleClass(element, className);
```

### hasClass API
To test the existence of a class using Apollo, use the `hasClass` API, which takes an element and a single class name. The `hasClass` API returns a boolean (true/false) with the result.

```javascript
Apollo.hasClass(element, className);
```

## Installing with Bower
To install Apollo into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/toddmotto/apollo.git
```

## Manual installation
Drop your files into your required folders, make sure you're using the files from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/apollo.js"></script>
  <script>
  Apollo.addClass(document.body, 'js');
  </script>
</body>
```

## Scaffolding
Project files and folder structure.

```
├── dist/
│   ├── apollo.js
│   └── apollo.min.js
├── src/
│   └── apollo.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## License
MIT license
