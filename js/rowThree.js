import btnKey from "./btnKey.js";

const upEng = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'];
const lowEng = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
const upUkr = ['Ф', 'І', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Є'];
const lowUkr = ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є'];

let [a, s, d, f, g, h, j, k, l, ukr1, ukr2] = upUkr;

const rowThree = () => {
  return (`${btnKey('k29', 'CapsLock', '', 'colorbg', '120px')} 
  ${btnKey('k30', a, '')}
  ${btnKey('k31', s, '')}
  ${btnKey('k32', d, '')}
  ${btnKey('k33', f, '')}
  ${btnKey('k34', g, '')}
  ${btnKey('k35', h, '')}
  ${btnKey('k36', j, '')}
  ${btnKey('k37', k, '')}
  ${btnKey('k38', l, '')}
  ${btnKey('k39', ukr1, '')}
  ${btnKey('k40', ukr2, '')}
  ${btnKey('k41', 'ENTER', '', 'colorbg', '100px')}
  `
  );
}

export default rowThree;





// const btnKey = (id, item = '', itemtwo = '', colorbg = '', width = '50px')