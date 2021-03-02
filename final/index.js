import trim from '~/trim';
import logo from '~/logo.jpg';
import styles from '~/index.scss';

if (ENV === 'development') {
    console.log(trim('    Hello World    '));
}

document.body.innerHTML += `<img src="${logo}">`;

