function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;
  return contentWidth + paddingWidth + borderWidth;
}

getElementWidth('200px', '10px', '5px');
getElementWidth('100px', '20px', '10px');
getElementWidth('50px', '5px', '2px');
