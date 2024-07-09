// String Library Module

class StringLibrary {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    toUpperCase(str) {
        return str.toUpperCase();
    }

    toLowerCase(str) {
        return str.toLowerCase();
    }
}

// Prototype method to capitalize the first letter of each word
StringLibrary.prototype.capitalize = function(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};

export default new StringLibrary();
