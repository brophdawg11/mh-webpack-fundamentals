function isString(str) {
    return typeof str === 'string';
}

module.exports = function trim(str) {
    if (!isString(str)) {
        return str;
    }

    return str.replace(/^ +/, '').replace(/ +$/, '');
}
