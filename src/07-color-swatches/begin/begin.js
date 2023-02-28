const swatchData = [
  {
    hex: "#fde2e4",
    rgb: "rgb(253, 226, 228)",
  },
  {
    hex: "#e2ece9",
    rgb: "rgb(226, 236, 233)",
  },
  {
    hex: "#bee1e6",
    rgb: "rgb(190, 225, 230)",
  },
  {
    hex: "#cddafd",
    rgb: "rgb(205, 218, 253)",
  },
];

function constructSwatches(swatchData) {
  const mainContainer = document.getElementById("swatch-container");

  swatchData.forEach((item) => {
    mainContainer.appendChild(create(item));
  });
}

const create = (elem) => {
  const cardElem = document.createElement("div");
  cardElem.classList.add("card");

  const colorElem = document.createElement("div");
  colorElem.classList.add("card-color");
  colorElem.style.backgroundColor = elem.hex;

  const metaElem = document.createElement("div");
  metaElem.classList.add("meta-data");

  const hexParagraph = document.createElement("p");
  hexParagraph.innerText = elem.hex;

  const rgbParagraph = document.createElement("p");
  rgbParagraph.innerText = elem.rgb;

  metaElem.appendChild(hexParagraph);
  metaElem.appendChild(rgbParagraph);

  cardElem.appendChild(colorElem);
  cardElem.appendChild(metaElem);

  return cardElem;
};

constructSwatches(swatchData);
