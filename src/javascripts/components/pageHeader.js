// pageHeader.js

const pageHeader = (title) => {
  document.querySelector('#page-header').innerHTML = `
    <h2>${title}</h2>`;
};

export default pageHeader;
