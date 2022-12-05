export default function tagMaker(htmlTag, className, text) {
  let tag = document.createElement(htmlTag);
  if(className) {
    tag.classList.add(className);
  }
  if(text) {
    tag.innerHTML = text;
  }
  return tag;
};
