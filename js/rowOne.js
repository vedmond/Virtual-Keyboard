import btnKey from "./btnKey.js";

const rowOne = () => {
  return (`${btnKey('k0', '`', '~', 'colorbg')} 
  ${btnKey('k1', '1', '!')}
  ${btnKey('k2', '2', '@')}
  ${btnKey('k3', '3', '#')}
  ${btnKey('k4', '4', '$')}
  ${btnKey('k5', '5', '%')}
  ${btnKey('k6', '6', ':')}
  ${btnKey('k7', '7', '?')}
  ${btnKey('k8', '8', '*')}
  ${btnKey('k9', '9', '(')}
  ${btnKey('k10', '0', ')')}
  ${btnKey('k11', '-', '_')}
  ${btnKey('k12', '=', '+')}
  ${btnKey('k13', 'Backspase', '', 'colorbg', '110px')}
  
  `

  );
}

export default rowOne;





