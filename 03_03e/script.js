const styleSheet = document.styleSheets[0];

styleSheet.cssRules[2].style.setProperty("background-color", "skyblue");
console.log(styleSheet.cssRules[2].style.getPropertyValue("background-color"));

styleSheet.cssRules[2].style.maxInlineSize= "65rem";
console.log(styleSheet.cssRules[2].style.maxInlineSize);
