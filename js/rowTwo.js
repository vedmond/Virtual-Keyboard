import btnKey from "./btnKey.js";

const upEng = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\'];
const lowEng = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/'];
const upUkr = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ї', '\\'];
const lowUkr = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', '/'];

let [q, w, e, r, t, y, u, i, o, p, ukr1, ukr2, ukr0] = upEng;

const rowTwo = () => {
  return (`${btnKey('k14', 'Tab', '', 'colorbg', '60px')} 
  ${btnKey('k15', q)}
  ${btnKey('k16', w)}
  ${btnKey('k17', e)}
  ${btnKey('k18', r)}
  ${btnKey('k19', t)}
  ${btnKey('k20', y)}
  ${btnKey('k21', u)}
  ${btnKey('k22', i)}
  ${btnKey('k23', o)}
  ${btnKey('k24', p)}
  ${btnKey('k25', ukr1)}
  ${btnKey('k26', ukr2)}
  ${btnKey('k27', ukr0)}
  ${btnKey('k28', 'DEL', '', 'colorbg', '60px')}
  `
  );
}

export default rowTwo;
