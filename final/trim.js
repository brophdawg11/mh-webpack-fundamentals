function isString(str) {
    return typeof str === 'string';
}

export default function trim(str) {
    if (!isString(str)) {
        return str;
    }

    return str.replace(/^ +/, '').replace(/ +$/, '');
}
