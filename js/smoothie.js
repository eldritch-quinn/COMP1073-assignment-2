/* 

    © Quinn 2023 Faulkner

*/

// Constant Variable Set-up

// template for flavors & stuff
const props = [
  {
    name: "Perfect Peach Mango",
    id: "perfectPeachMango",
    calories: 350,
    color: "#FF9A8A",
    desc: "Peachy!",
    ingredients: ["Peach Purée", "Mango Chunks", "Clover Honey"],
  },
  {
    name: "Tropical Bliss",
    id: "tropicalBliss",
    color: "#FDFD96",
    ingredients: ["Pineapple chunks", "Coconut milk", "Banana"],
    desc: "Vacation in drink-format!",
    calories: 280,
  },
  {
    name: "Berry Blast",
    id: "berryBlast",
    color: "#7A1712",
    ingredients: ["Mixed berries", "Greek yogurt", "Honey"],
    desc: "Thick and fruity",
    calories: 320,
  },
  {
    name: "Minty Melon Madness",
    id: "mintyMelon",
    color: "#900603",
    ingredients: ["Watermelon chunks", "Fresh mint leaves", "Lime juice"],
    desc: "Refreshing and light",
    calories: 200,
  },
  {
    name: "Creamy Avocado Delight",
    id: "creamyAvocado",
    color: "#354A21",
    ingredients: ["Avocado", "Spinach", "Almond milk"],
    desc: "Creamy and nutritious",
    calories: 350,
  },
  {
    name: "Citrus Sunrise",
    id: "citrusSunrise",
    color: "#FF6E00",
    ingredients: ["Oranges", "Carrot juice", "Ginger"],
    desc: "Energizing and tangy",
    calories: 180,
  },
  {
    name: "Vanilla Berry Dream",
    id: "vanillaBerry",
    color: "#EABD8C",
    ingredients: ["Vanilla protein powder", "Mixed berries", "Almond butter"],
    desc: "Protein-packed and delicious",
    calories: 300,
  },
  {
    name: "Pineapple Coconut Paradise",
    id: "pineappleCoconut",
    color: "#FDA344",
    ingredients: ["Pineapple juice", "Coconut water", "Banana"],
    desc: "Tropical and hydrating",
    calories: 250,
  },
  {
    name: "Green Goddess",
    id: "greenGoodness",
    color: "#607D3B",
    ingredients: ["Kale", "Green apple", "Celery"],
    desc: "Detoxifying and nutrient-rich",
    calories: 150,
  },
  {
    name: "Chocolate Banana Smoothie",
    id: "chocolateBanana",
    color: "#7B3F00",
    ingredients: ["Cocoa powder", "Banana", "Almond milk"],
    desc: "Indulgent and satisfying",
    calories: 380,
  },
  {
    name: "Cherry Almond Fantasy",
    id: "cherryAlmond",
    color: "#60100B",
    ingredients: ["Cherries", "Almond extract", "Greek yogurt"],
    desc: "Creamy and nutty",
    calories: 270,
  },
];

// elements that the user interacts with..
const elements = {
  Name: document.querySelector("#ordererName"),
  Flavors: document.querySelector("#flavors"),
  Size: document.querySelector("#smoothieSize"),
  Submit: document.querySelector("#submitButton"),
};

// capture the display elements
const display = {
  info: document.querySelector('#display h4'),
  header: document.querySelector("#display h2"),
  desc: document.querySelector("#display #desc"),
  ingr: document.querySelector("#display #ingr"),
  parent: document.querySelector("#display"),
};

// class set-up
class Flavor {
  /* 
      :: name = String ::
          
          a display name for the flavor
  
      
      :: id = String ::
          
          the identifier for the id

      :: color = String ::
          
          the color code
  
      :: calories = Number ::
          
          the calorie count for the flavor
  
      :: desc = String ::
          
          a small descritor for the flavor
  
      :: ingredients = String [...] ::
  
          this parameter is an array of ingredients
      */
  /* Example Flavor 
      {
          name: "Perfect Peach Mango",
          id: "perfectPeachMango",
          calories: 350,
          desc: "sorbet",
          ingredients: ["Peach Purée", "Mango Chunks", "Clover Honey"],
      },
     
     */
  constructor(prop) {
    this.name = prop["name"];
    this.id = prop["id"];
    this.calories = prop["calories"];
    this.color = prop["color"];
    this.desc = prop["desc"];
    this.ingredients = prop["ingredients"];
  }
}

// create a variable to store flavor that they choose
let selectedFlavor = null;

// create an array to store the flavor objects
const Flavors = [];

// a function that displays a flavor to the display panel
function displayFlavor(inputFlavor) {
  
  // Rewrite the display's content
  display.header.textContent = inputFlavor.name;
  display.desc.textContent = inputFlavor.desc;

  // Remove the inner HTML of the ul, effectively removing all items
  display.ingr.innerHTML = "";

  // set the top border color to the flavor's color
  display.parent.style.borderTopColor = inputFlavor.color;

  // for each of the ingredients..
  inputFlavor.ingredients.forEach((i) => {
    
    // create new elements
    let newListItem = document.createElement("li");
    let newP = document.createElement("p");

    // set the text content of the new p to the ingredient
    newP.textContent = i;

    // append the text to our new tags
    newListItem.appendChild(newP);

    // append the tag into the display
    display.ingr.appendChild(newListItem);
  });

  // set the selected flavor for ordering to the input one
  selectedFlavor = inputFlavor;
}

// a function that builds all flavors and inputs them
function buildFlavors() {

  // for each flavor in my prop object..
  props.forEach((flavorObj) => {
    
    // create a new Flavor object from the prop
    let newFlavor = new Flavor(flavorObj);

    // push the newly created flavor to the global array
    Flavors.push(newFlavor);

    // define the inner html for the card and inject the variables
    const flavorHTML = `<div><h4>${newFlavor["name"]}</h4><p>${newFlavor["desc"]}</p></div>`;

    // create a new anchor element
    const newCard = document.createElement("a");

    // add a listener to listen for the anchor element to be clicked on
    newCard.addEventListener("click", () => {
    
      // run the display function with the newly created flavor
      displayFlavor(newFlavor);
    });

    // set the border to the new color
    newCard.style.borderBottomColor = newFlavor.color;
    
    // append the content into the card
    newCard.innerHTML = flavorHTML;

    // add the flavor card to the flavor section
    elements["Flavors"].appendChild(newCard);
  });

  // display a random flavor in the displayer
  displayFlavor(Flavors[
    
    // create a random index
    Math.floor(Math.random() * Flavors.length)
  ]);
}

// create a handler for the click 
elements.Submit.addEventListener('click', () => {
  
  // if the name value isn't there do nothing
  if (!elements.Name.value) return;
  
  // define a variable to hold the switch case
  let sizeDesc = '';

  // run a switch on the size slider
  switch (elements.Size.value) {

    // define the size cases
    case '0':
      sizeDesc = "kiddie";
      break;
    case '1':
      sizeDesc = "small";
      break;
    case '2':
      sizeDesc = "medium";
      break;
    case '3':
      sizeDesc = "large";
      break;
    case '4':
      sizeDesc = "double-gulp";
      break;
    default: // default case
      sizeDesc = "medium";
      break;
  }
  
  // set the text content for the info
  display['info'].textContent = `${elements.Name.value}'s ${sizeDesc}`;
  
  // set the information to visible
  display['info'].style.opacity = 100;
});

// run the main function to populate the flavor card section
buildFlavors();