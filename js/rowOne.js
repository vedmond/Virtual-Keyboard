import btnKey from "./btnKey.js";
const rowOne = () => {
  let capsKey = [];

  const upEng = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+'];
  const lowEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
  const upUkr = ['~', '!', '@', '#', '$', '%', ':', '?', '*', '(', ')', '_', '+'];
  const lowUkr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];

  const switchBtn = () => {

    const capslock = localStorage.getItem('capslockKey')
    if (capslock === 'true') {
      capsKey = upEng;
    } else {
      capsKey = lowEng;
    }
    return capsKey
  }
  switchBtn()

  let [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12] = capsKey;


  return (`${btnKey('k0', n0, '', 'colorbg')} 
  ${btnKey('k1', n1)}
  ${btnKey('k2', n2)}
  ${btnKey('k3', n3)}
  ${btnKey('k4', n4)}
  ${btnKey('k5', n5)}
  ${btnKey('k6', n6)}
  ${btnKey('k7', n7)}
  ${btnKey('k8', n8)}
  ${btnKey('k9', n9)}
  ${btnKey('k10', n10)}
  ${btnKey('k11', n11)}
  ${btnKey('k12', n12)}
  ${btnKey('k13', 'Backspase', '', 'colorbg', '110px')}
  
  `

  );
}

export default rowOne;





