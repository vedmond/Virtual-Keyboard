const btnKey = (id, item = '', itemtwo = '', colorbg = '', width = '50px') => {
  const btn =
    `<div class="btn-key ${colorbg}" style="width: ${width}; height: 50px" id = "${id}">
  <div class="btn-key-item">${item}</div> 
  <div class="btn-key-itemtwo">${itemtwo}</div>
  </div>`;
  return btn;
}

export default btnKey;