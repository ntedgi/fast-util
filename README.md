# fast-util

dont know yet if this is a good idea 


```
const booleanExtractor = require('./src/types/boolean');
const naorSymbol = Symbol('naor');
booleanExtractor(naorSymbol);
console.log(true[naorSymbol].toString());
```