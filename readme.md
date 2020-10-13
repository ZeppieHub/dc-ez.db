# dc-ez.db
A simple and easy database package for discord bots.
## How To Install
- `npm i dc-ez.db`
## How To Use
Add package to your project with:
`const db = require('dc-ez.db');`
#### Examples
```js
db.set('serverPrefix', '!');
// output: true

db.get('serverPrefix');
// output: '!'

db.set('items', ['apple', 'orange']);
// output: true

db.push('items', 'banana');
// output: true

db.get('items');
// output: ['apple', 'orange', 'banana']

db.remove('items');
// output: true
// 'items' database removed

```
