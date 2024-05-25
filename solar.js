// alert('love')
const button = document.querySelector('.btn')
const mass = document.querySelector('.mass')
const select = document.querySelector('.select')
const select1 = document.querySelectorAll('.select')
const imageEl = document.querySelector(".image");
const massEmpty = document.querySelector(".massempty");
const trasparent = document.querySelector(".trasparent");
const weightCal = document.querySelector(".circle-input");
const main = document.querySelector(".main");
const acc = document.querySelector(".acc");
const image2 = document.querySelector(".image2"); 

let planets={
    
        "MERCURY": { image: "./images/mercury.png", acc: 5 },
        "VENUS": { image: "./images/venus.png", acc: 8 },
        "EARTH": { image: "./images/earth.png", acc: 7 },
        "MOON": { image: "./images/moon.png", acc: 9 },
        "MARS": { image: "./images/mars.png", acc: 10 },
        "JUPITER": { image: "./images/jupiter.png", acc: 11 },
        "SATURN": { image: "./images/saturn.png", acc: 13 },
        "URANUS": { image: "./images/uranus.png", acc: 33 },
        "NEPTUNE": { image: "./images/neptune.png", acc: 2 },
        "PLUTO": { image: "./images/pluto.png", acc: 4 }
    
}

createSelectOptions()
function createSelectOptions() {
    // planets.forEach(planet => {
    // })

    for(let planet in planets) {
        const option = document.createElement("option");
        // option.classList.add("uppercase")
        option.innerHTML = planet;
        // option.value = planet;
        select.appendChild(option);
        
    }
}


 function clickBtn(){
    
     const mass1 = mass.value;
    const planet = select.value;
     const image = planets[planet]?.image || "";
     const acc1 = planets[planet].acc;
     const isInteger = (mass1) => {
         if (Number.isInteger(mass1)) {
             return true
         }
         else {
             return false
         }
     }
       

    

     if (mass1 !== '' && planet !== '') {
         let mass2 = +mass1
         if (isInteger(mass2) === true) {
             //select.classList.add('select', 'tidy')
             let weight = mass1 * acc1
             console.log(weight)
             weightCal.value = weight
             imageEl.setAttribute("src", '')
             acc.innerHTML = `The weight of the object on ${planet}`
             image2.setAttribute("src", image);
         }

     }

     else if (mass1 == '' && planet != "") {
         massEmpty.innerHTML = '';
         imageEl.setAttribute("src", image);
         trasparent.innerHTML = '';
         trasparent.classList.add('trasparent', 'none');
     }
     else if (mass1 != '' && planet =='--select planet--') {
         massEmpty.innerHTML = 'select is required'
         imageEl.setAttribute("src", '');
     }

     else if (mass1 == '') {
         massEmpty.innerHTML = 'Mass is required'
         imageEl.setAttribute("src", '');
         trasparent.classList.remove('trasparent', 'none');
     }
      
    


    
    
     
 

 }
 

button.addEventListener('click', clickBtn)
