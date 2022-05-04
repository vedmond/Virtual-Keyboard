const mainHTML = () => {
  const body = document.querySelector('body');
  const wrapper = document.createElement('div');
  const writeBlock = document.createElement('div');
  const keyboardBlock = document.createElement('div');
  const footerBlock = document.createElement('div');

  body.classList.add('body');
  wrapper.classList.add('wrapper');
  body.insertAdjacentElement('afterbegin', wrapper);

  writeBlock.classList.add('write-block');
  keyboardBlock.classList.add('keyboard-block');
  footerBlock.classList.add('footer-block');

  const container = document.querySelector('.wrapper');
  container.appendChild(writeBlock);

  container.appendChild(keyboardBlock);

  container.appendChild(footerBlock);
};

export default mainHTML;
