const elements = [
    { tag: 'p', text: 'Frase 1' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'footer', text: 'Frase 3' },
    { tag: 'section', text: 'Frase 4' }
];

const container = document.getElementById('container');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let new_tag = document.createElement(tag);
    new_tag.innerText = text;
    container.appendChild(new_tag);
}