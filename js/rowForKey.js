const rowForKey = () => {
  const rows = document.querySelector('.keyboard-block').innerHTML = `<div class="row"></div>
               <div class="row"></div>
               <div class="row"></div>
               <div class="row"></div>
               <div class="row"></div>`;
  return rows;
};

export default rowForKey;
