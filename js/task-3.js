function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;
  return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth('200px', '10px', '5px'));
console.log(getElementWidth('100px', '20px', '10px'));
console.log(getElementWidth('50px', '5px', '2px'));
