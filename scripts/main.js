const planetSelect = document.querySelector(".select");
const btn = document.querySelector("button");
const massInput = document.querySelector("input");
const imageEl = document.querySelector(".planet-image");

// const planets = [
//     "Mercury",
//     "Venus",
//     "Earth",
//     "Moon",
//     "Mars",
//     "Jupiter",
//     "Saturn",
//     "Uranus",
//     "Neptune",
//     "Pluto"
// ]
const planets = {
    "MERCURY": {image: "./images/mercury.png", acc: 5},
    "VENUS": {image: "./images/venus.png", acc: 5},
    "EARTH": {image: "./images/earth.png", acc: 5},
    "MOON": {image: "./images/moon.png", acc: 5},
    "MARS": {image: "./images/mars.png", acc: 5},
    "JUPITER": {image: "./images/jupiter.png", acc: 5},
    "SATURN": {image: "./images/saturn.png", acc: 5},
    "URANUS": {image: "./images/uranus.png", acc: 5},
    "NEPTUNE": {image: "./images/neptune.png", acc: 5},
    "PLUTO": {image: "./images/pluto.png", acc: 5}
}

createSelectOptions();
btn.addEventListener("click", clickBtn);


// const imageContainer = document.querySelector(".flex-item.image");
    // imageContainer.innerHTML = `
    //     <img src="${image}" class="planet-image" />
function createSelectOptions() {
    // planets.forEach(planet => {
    // })

  for(let planet in planets) 
    {       const option = document.createElement("option");
       // option.classList.add("uppercase")
     option.innerHTML = planet;
       // option.value = planet;
       planetSelect.appendChild(option);
   }
}

function clickBtn() {
    const mass = massInput.value;
    const planet = planetSelect.value; 
    const image = planets[planet]?.image || "";
    // `
    imageEl.setAttribute("src", image);

    console.log({mass, planet, image});
}