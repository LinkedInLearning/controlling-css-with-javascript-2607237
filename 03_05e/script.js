const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[2]);

let headingOpacity = styleSheet.cssRules[2].style.opacity;
console.log(typeof(headingOpacity));
headingOpacity = headingOpacity + 0.2;

console.log(headingOpacity);

let typedHeadingOpacity = styleSheet.cssRules[2].styleMap.get("opacity").value;
console.log(typedHeadingOpacity);

console.log(typeof(typedHeadingOpacity));

typedHeadingOpacity = typedHeadingOpacity + 0.2;
console.log(typedHeadingOpacity);