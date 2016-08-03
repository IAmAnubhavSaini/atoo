# atoo
array to object | Convert any array to object with/without given key-prefix.

```
arrayToObject([1, 2, 3, 'a',,,, 'b'], 'i-')
Object {i-0: 1, i-1: 2, i-2: 3, i-3: "a", i-7: "b"}

arrayToObject([1, 2, 3, 'a',,,, 'b'])
Object {0: 1, 1: 2, 2: 3, 3: "a", 7: "b"}

```

### Takes care of sparse arrays.

```
var a = require('atoo');
var obj = a.arrayToObject(array [, keyPrefix]);

```

#license

MIT @copy; Anubhav Saini 2016
