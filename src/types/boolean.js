module.exports = (symbol) => {
    Boolean.prototype[symbol] = {
        toString: () => {
            return "naor";
        }
    }
};