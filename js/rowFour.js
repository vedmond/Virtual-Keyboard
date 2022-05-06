import btnKey from "./btnKey.js";

const upEng = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];
const lowEng = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
const upUkr = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?'];
const lowUkr = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];

let [z, x, c, v, b, n, m, ukr1, ukr2, ukr0] = upEng;

const rowFour = () => {
  return (`${btnKey('k42', 'Shift', '', 'colorbg', '120px')} 
  ${btnKey('k44', z)}
  ${btnKey('k45', x)}
  ${btnKey('k46', c)}
  ${btnKey('k47', v)}
  ${btnKey('k48', b)}
  ${btnKey('k49', n)}
  ${btnKey('k50', m)}
  ${btnKey('k51', ukr1)}
  ${btnKey('k52', ukr2)}
  ${btnKey('k53', ukr0)}
  ${btnKey('k54', '&#129093;', '', 'colorbg')}
  ${btnKey('k55', 'Shift', '', 'colorbg', '120px')}
  `
  );
}

export default rowFour;





// const btnKey = (id, item = '', itemtwo = '', colorbg = '', width = '50px')