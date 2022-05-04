const rowForKey = () => {
  document.querySelector('.keyboard-block').innerHTML = `<div class="row"></div>
               <div class="row"></div>
               <div class="row"></div>
               <div class="row"></div>`;
  return row;
};
export default rowForKey;
