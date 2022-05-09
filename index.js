import mainHTML from './js/mainHTML.js';
import rowForKey from './js/rowForKey.js';
import rowOne from './js/rowOne.js';
import rowTwo from './js/rowTwo.js';
import rowThree from './js/rowThree.js';
import rowFour from './js/rowFour.js';
import rowFive from './js/rowFive.js';
import txtBlock from './js/txtBlock.js';
import getBtnLitter from './js/getBtnLitter.js';
import buildRows from './js/buildRows.js';
import codeKeyId from './js/codeKeyId.js';
import swichLearn from './js/swichLearn.js';
import footerTxt from './js/footerTxt.js';

let capslock = false;
let learnFlag = 'en'
let clickFlag = false;

const capsLocStor = () => {
  if (localStorage.getItem('capslockKey')) {
    capslock = localStorage.getItem('capslockKey')
  } else {
    localStorage.setItem('capslockKey', capslock)
  }
}
capsLocStor()
const learnLocStor = () => {
  if (localStorage.getItem('learn')) {
    learnFlag = localStorage.getItem('learn')
  } else {
    localStorage.setItem('learn', learnFlag)
  }
}
learnLocStor()


function buildHTML() {
  mainHTML();
  txtBlock();
  rowForKey();
  buildRows();
  footerTxt();
}
buildHTML()

const capslockTrueHTML = () => {
  const tagName = document.getElementById('k29');
  capslock = localStorage.getItem('capslockKey')
  if (capslock === 'true') {
    tagName.classList.add('capslock-true');
  } else {
    tagName.classList.add('capslock-false');
  }
}
capslockTrueHTML();


const eventKey = () => {

  const shftBtn = document.getElementById('k42')
  const shftBtn2 = document.getElementById('k55')
  const btn = document.querySelectorAll('.btn-key')


  document.addEventListener('keydown', ev => {
    ev.preventDefault();
    let evcode = ev.code;

    console.log(ev.code);

    let idCode = codeKeyId(evcode)
    if (ev.repeat === 'true') {
      document.getElementById(idCode).classList.remove('click-keyboard')
      return;
    }
    if (ev.code == 'ControlLeft') {
      clickFlag = true;
    }
    if (ev.code == 'AltLeft' && clickFlag === true) {
      console.log('cntrl + alt');
      clickFlag = false;
      swichLearn();
      buildRows();
      capslockTrueHTML()
      eventKey();
    }
    document.getElementById(idCode).classList.add('click-keyboard')
    idCode = idCode + '-in';
    toWrite(getBtnLitter(idCode), idCode)



    ev.stopImmediatePropagation();
  })


  document.addEventListener('keyup', ev => {
    ev.preventDefault();
    clickFlag = false;
    let evcode = ev.code;
    let idCode = codeKeyId(evcode)
    document.getElementById(idCode).classList.remove('click-keyboard')

  })

  shftBtn.addEventListener('mousedown', () => {
    let flag = localStorage.getItem('capslockKey')

    if (flag === 'true') {
      localStorage.setItem('capslockKey', 'false')
    } else {
      localStorage.setItem('capslockKey', 'true')
    }
    buildRows();
    const keyStyle = document.getElementById('k42')
    keyStyle.classList.add('key-style');
    capslockTrueHTML()
    eventKey();
  })
  shftBtn.addEventListener('mouseup', () => {
    let flag = localStorage.getItem('capslockKey')

    if (flag === 'true') {
      localStorage.setItem('capslockKey', 'false')
    } else {
      localStorage.setItem('capslockKey', 'true')
    }
    buildRows();
    const keyStyle = document.getElementById('k42')
    keyStyle.classList.remove('key-style');
    capslockTrueHTML()
    eventKey();

  })
  shftBtn2.addEventListener('mousedown', () => {
    let flag = localStorage.getItem('capslockKey')

    if (flag === 'true') {
      localStorage.setItem('capslockKey', 'false')
    } else {
      localStorage.setItem('capslockKey', 'true')
    }
    buildRows();
    const keyStyle = document.getElementById('k42')
    keyStyle.classList.add('key-style');
    capslockTrueHTML()
    eventKey();
  })
  shftBtn2.addEventListener('mouseup', () => {
    let flag = localStorage.getItem('capslockKey')

    if (flag === 'true') {
      localStorage.setItem('capslockKey', 'false')
    } else {
      localStorage.setItem('capslockKey', 'true')
    }
    buildRows();
    const keyStyle = document.getElementById('k42')
    keyStyle.classList.remove('key-style');
    capslockTrueHTML()
    eventKey();

  })

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ev => {
      let evId = ev.target.id
      console.log(evId);
      if (evId.length <= 3) {
        evId = evId + '-in';
      }

      toWrite(getBtnLitter(evId), evId)

    })

  }
  return;
}



function toWrite(letter, id) {
  // console.log(id);
  let arrText = document.getElementById('textarea').textContent
  if (letter.split('').length > 2) {
    staffKey(id)
    // console.log(id);
  } else {

    document.getElementById('textarea').textContent = arrText + letter;
  }

}

function staffKey(id) {
  if (id === 'k28-in') {
    document.getElementById('textarea').textContent = '';
  }
  if (id === 'k14-in') {
    let txtInner = document.getElementById('textarea').textContent;
    txtInner = txtInner + '········';
    document.getElementById('textarea').textContent = txtInner;
  }
  if (id === 'k13-in') {
    let txtInner = '';
    let indx = 1;
    const arrTxt = document.getElementById('textarea').textContent.split('')
    // console.log(arrTxt);
    const indxEnd = arrTxt[arrTxt.length - 1];
    if (indxEnd === '\uDC47' || indxEnd === '\uDC46' || indxEnd === '\uDC45' || indxEnd === '\uDC44') {
      indx = 2
    }
    for (let i = 0; i < arrTxt.length - indx; i++) {
      txtInner += arrTxt[i];
    }
    document.getElementById('textarea').textContent = txtInner;
  }
  if (id === 'k29-in') {
    const tagName = document.getElementById('k29');
    tagName.classList.toggle('capslock-true');
    tagName.classList.toggle('capslock-false');
    const key = localStorage.getItem('capslockKey')
    if (key === 'false') {
      localStorage.setItem('capslockKey', 'true')
    } else {
      localStorage.setItem('capslockKey', 'false')
    }
    buildRows();
    capslockTrueHTML()
    eventKey()
  }
  if (id === 'k29') {
    const tagName = document.getElementById('k29');
    tagName.classList.toggle('capslock-true');
    tagName.classList.toggle('capslock-false');

    const key = localStorage.getItem('capslockKey')
    if (key === 'false') {
      localStorage.setItem('capslockKey', 'true')
    } else {
      localStorage.setItem('capslockKey', 'false')
    }
    buildRows();
    capslockTrueHTML()
    eventKey()
  }

}
eventKey()
