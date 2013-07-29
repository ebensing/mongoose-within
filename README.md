
Mongoose-within
================

In 3.7.x, we introduced new syntax for [within() and intersects()
queries](https://github.com/LearnBoost/mongoose/wiki/3.7-%28unstable%29-Release-Notes#within-changes)

This is a shim to revert to the old syntax.

Installation
---------------

`npm install mongoose-within`

Use
---------------

```javascript
var mongoose = require('mongoose');
var shim = require('mongoose-within');

shim(mongoose);

// you can now make queries using the old syntax...

```

