const btnKey = (id, item = '', itemtwo = '', colorbg = '', width = '50px') => {
  itemtwo = '';
  const btn =
    `<div class="btn-key ${colorbg}" style="width: ${width}; height: 50px" id = "${id}">
  <div class="btn-key-item" id = "${id}-in">${item}</div>
  </div>`;
  return btn;
}

export default btnKey;

