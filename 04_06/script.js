const hue = document.querySelector("#hue");
const saturation = document.querySelector("#saturation");
const lightness = document.querySelector("#lightness");
const alpha = document.querySelector("#alpha");
const colorSwatch = document.querySelector(".color-swatch");

const rootRules = document.styleSheets[0].cssRules[0];

/**
 * Textfarbe je nach Helligkeit anpassen
 * @param {string} lightness - aktuelle Helligkeit.
 */
const bw = (lightness) => {
  if (lightness < 50) {
    colorSwatch.style.color = "white";
  } else {
    colorSwatch.style.color = "black";
  }
};

/**
 * .color-swatch an die aktuelle Farbe anpassen
 * @param {string} prop - aktuelle Eigenschaft
 * @param {string} value - aktueller Wert 
 */
const updateDisplay = (prop, value) => {
  // Set :root custom property value.
  rootRules.style.setProperty(`--${prop}`, value);

  // Wenn Helligkeit geändert, Funktion bw aufrufen.
  if (prop === "lightness") {
    bw(value);
  }

  // Berechnete Werte für das .color-swatch Objekt ermitteln
  // (Einfache Möglichkeit, die aktuellen Custom Property-Werte auszulesen.)
  const currentColors = window.getComputedStyle(colorSwatch);

  // Neue HSLA-Lets erzeugen und entweder mit neuem oder vorhandenem Wert befüllen
  let hue = prop === "hue" ? value : currentColors.getPropertyValue("--hue");
  let saturation =
    prop === "saturation"
      ? value
      : currentColors.getPropertyValue("--saturation");
  let lightness =
    prop === "lightness"
      ? value
      : currentColors.getPropertyValue("--lightness");
  let alpha =
    prop === "alpha" ? value : currentColors.getPropertyValue("--alpha");

  // Text in .color-swatch auf aktuelle Werte setzen
  colorSwatch.innerHTML = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha});`;
};

/**
 * Change-Ereignisse in Schiebereglern abfangen
 */
hue.addEventListener("input", () => {
  updateDisplay("hue", hue.value);
});

saturation.addEventListener("input", () => {
  updateDisplay("saturation", saturation.value);
});

lightness.addEventListener("input", () => {
  updateDisplay("lightness", lightness.value);
});

alpha.addEventListener("input", () => {
  let alphaValue = parseInt(alpha.value) / 100;
  updateDisplay("alpha", alphaValue);
});
