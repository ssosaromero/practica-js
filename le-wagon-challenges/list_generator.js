const listItem = (content) => {
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  let tag = '<ul class="list-group">';
  items.forEach((item) => { tag += listItem(item); });
  tag += "</ul>";
  return tag;
};


module.exports = { listItem, unorderedList }; // Do not remove.


// TODO: return the proper <li> HTML tag with its content (as a string)
// TODO: return the proper <ul> markup (as a string)
