const booleanExtractor = require('./src/types/boolean');
const naorSymbol = Symbol('naor');
booleanExtractor(naorSymbol);
console.log(true[naorSymbol].toString());
