# fast-util

dont know yet if this is a good idea 




```

module.exports = (symbol) => {
    Boolean.prototype[symbol] = {
        toString: () => {
            return "naor";
        }
    }
};

...
...


const booleanExtension = require('./src/types/boolean');
const naorSymbol = Symbol('naor');
booleanExtension(naorSymbol);
console.log(true[naorSymbol].toString());
```