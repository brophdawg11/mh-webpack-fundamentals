import logo from './logo.jpg';
import trim from './trim';
import styles from './styles.scss';

const str = '     Hello!      ';
console.log('untrimmed', str);
console.log('  trimmed', trim(str));

console.log('logo', logo)
document.body.innerHTML += `<img src="${logo}">`;

console.log('styles', styles)
