// pageHeader.js

const pageHeader = (title, firebaseKey) => {
  document.querySelector('#page-header').innerHTML = `
    <h2 id="boardKey--${firebaseKey}">${title}</h2>`;
};

export default pageHeader;
