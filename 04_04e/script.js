
window.CSS.registerProperty({
  name: "--font-size",
  syntax: "<length>",
  inherits: false,
  initialValue: "16px",
});

window.CSS.registerProperty({
  name: "--hue",
  syntax: "<integer>",
  inherits: false,
  initialValue: "20",
});


const styleSheet = document.styleSheets[0];

console.log(styleSheet.cssRules[4].style.getPropertyValue("--font-size"));

console.log(styleSheet.cssRules[4].styleMap.get("--font-size").value);
console.log(styleSheet.cssRules[4].styleMap.get("--font-size").unit);

 //so würde es gehen
 const fontSize = styleSheet.cssRules[4].styleMap.get("--font-size");
 console.log(CSSNumericValue.parse(fontSize).value); 
 console.log(CSSNumericValue.parse(fontSize).unit); 
