const codeKeyId = (evcode) => {

  let idCode = ''
  if (evcode === 'Backquote') {
    return idCode = 'k0';
  }
  if (evcode === 'Digit1') {
    return idCode = 'k1'
  }
  if (evcode === 'Digit2') {
    return idCode = 'k2'
  }
  if (evcode === 'Digit3') {
    return idCode = 'k3'
  }
  if (evcode === 'Digit4') {
    return idCode = 'k4'
  }
  if (evcode === 'Digit5') {
    return idCode = 'k5'
  }
  if (evcode === 'Digit6') {
    return idCode = 'k6'
  }
  if (evcode === 'Digit7') {
    return idCode = 'k7'
  }
  if (evcode === 'Digit8') {
    return idCode = 'k8'
  }
  if (evcode === 'Digit9') {
    return idCode = 'k9'
  }
  if (evcode === 'Digit0') {
    return idCode = 'k10'
  }
  if (evcode === 'Minus') {
    return idCode = 'k11'
  }
  if (evcode === 'Equal') {
    return idCode = 'k12'
  }
  if (evcode === 'Backspace') {
    return idCode = 'k13'
  }
  if (evcode === 'ControlLeft') {
    return idCode = 'k56'
  }
  if (evcode === 'AltLeft') {
    return idCode = 'k58'
  }

  return
  // return window.location.reload(true);

}

export default codeKeyId;