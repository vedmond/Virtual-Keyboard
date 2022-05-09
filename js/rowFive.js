import btnKey from "./btnKey.js";


const rowFive = () => {
  return (`${btnKey('k56', 'Ctrl', '', 'colorbg')} 
  ${btnKey('k57', 'Win', '', 'colorbg')}
  ${btnKey('k58', 'Alt', '', 'colorbg')}
  ${btnKey('k59', '·', '', 'colorbg', '400px')}
  ${btnKey('k60', 'Alt', '', 'colorbg')}
  ${btnKey('k61', '&#129092;', '', 'colorbg')}
  ${btnKey('k62', '&#129095;', '', 'colorbg')}
  ${btnKey('k63', '&#129094;', '', 'colorbg')}
  ${btnKey('k64', 'Ctrl', '', 'colorbg', '55px')}
  `
  );
}

export default rowFive;

