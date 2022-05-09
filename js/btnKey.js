const btnKey = (id, item = '', colorbg = '', width = '50px') => {
  const btn =
    `<div class="btn-key ${colorbg}" style="width: ${width}; height: 50px" id = "${id}">
  <div class="btn-key-item" id = "${id}-in">${item}</div>
  </div>`;
  return btn;
}

export default btnKey;

