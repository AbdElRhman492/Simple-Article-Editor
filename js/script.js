let selectFont = document.querySelectorAll("#select-font option");
let boldBtn = document.getElementById("bold");
let italicBtn = document.getElementById("italic");
let underlineBtn = document.getElementById("u-line");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let invert = document.getElementById("invert");
let fSize = document.getElementById("size");
let text = document.getElementById("text");

let fonts = ["arial", "segoe", "cairo", "mono"];

// Default font-size
let sizeValue = 16;
// Write value in element
text.style.fontSize = sizeValue + "px";

// Function to create events
const addClick = (item, func) => {
  item.addEventListener("click", func);
};

// Add Click event to bold btn > f-w = bold
addClick(boldBtn, () => {
  text.classList.toggle("bold");
  boldBtn.classList.toggle("active");
});
// Add Click event to italic btn > f-s = italic
addClick(italicBtn, () => {
  text.classList.toggle("italic");
  italicBtn.classList.toggle("active");
});
// Add Click event to underline btn > text-decoration = underline
addClick(underlineBtn, () => {
  text.classList.toggle("u-line");
  underlineBtn.classList.toggle("active");
});

// Add click event to invert btn > invert colors for text
addClick(invert, () => {
  text.classList.toggle("invert");
  invert.classList.toggle("active");
});

// Decrease value for f-s
addClick(minus, () => {
  sizeValue--;
  // Change value in element
  fSize.innerHTML = sizeValue;
  text.style.fontSize = sizeValue + "px";
  // validate btns to disable it on specific value
  if (sizeValue == 12) {
    minus.classList.toggle("disabled");
  }
  if (sizeValue < 22) {
    plus.classList.remove("disabled");
  }
});
// Increase value for f-s
addClick(plus, () => {
  sizeValue++;
  fSize.innerHTML = sizeValue;
  text.style.fontSize = sizeValue + "px";
  // validate btns to disable it on specific value
  if (sizeValue == 22) {
    plus.classList.toggle("disabled");
  }
  if (sizeValue > 12) {
    minus.classList.remove("disabled");
  }
});

// Change Font
selectFont.forEach((font) => {
  addClick(font, () => {
    fonts.forEach((font) => {
      if (text.classList.contains(font)) {
        text.classList.remove(font);
      }
    });
    text.classList.toggle(font.value);
  });
});
