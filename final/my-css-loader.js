module.exports = function myCssLoader(source) {
    return `
document.body.innerHTML += \`<style>${source}</style>\`;
export default ${JSON.stringify(source)};
`;
};
