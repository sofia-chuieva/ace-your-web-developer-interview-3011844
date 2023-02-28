/*
  URL: "https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars"
  "x-rapidapi-host": "imdb8.p.rapidapi.com"
  "x-rapidapi-key": "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a"

*/
const URL = "https://imdb8.p.rapidapi.com/title/find?q=Star%20Wars";

let newData;

fetch(URL, {
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "7dc4683476msh81675cd0e90bd2bp17842ejsn3357aee41f0a",
  },
})
  .then((res) => res.json())
  .then((data) => {
    newData = data.results;
    newData.slice(0, 5).forEach((i) => createCard(i));
  })
  .catch((error) => console.log(error));

const createCard = ({ image, title, year }) => {
  const container = document.getElementById("poster-container");

  const card = document.createElement("div");
  card.classList.add("card");
  const imgElement = document.createElement("img");
  imgElement.src = image.url;

  const titleElement = document.createElement("p");
  titleElement.innerText = title;

  const yearElement = document.createElement("p");
  yearElement.innerText = year;

  card.appendChild(imgElement);
  card.appendChild(titleElement);
  card.appendChild(yearElement);
  container.appendChild(card);
};
