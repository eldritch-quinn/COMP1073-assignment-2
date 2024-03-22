/* 

    © Quinn 2023 Faulkner

*/

// Class set-up
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

class Smoothie {
  /*==========================================================================
        :: size = Number ::
            
            this parameter is a number that correlates to a specific size

            0 : Kiddie
            1 : Small
            2 : Medium
            3 : Large
            4 : Double-Gulp
            
        :: ingredients = Ingredient [...] ::

            this parameter is an array of Ingredient objects ( detailed above!! ^^ )

        :: name = String ::

        this parameter is a string containing the name of the person who ordered

    ==========================================================================*/

  constructor(size, ingredients, orderer) {
    switch (size) {
      case 0:
        this.size = "Kiddie";
        break;
      case 1:
        this.size = "Small";
        break;
      case 2:
        this.size = "Medium";
        break;
      case 3:
        this.size = "Large";
        break;
      case 4:
        this.size = "Double-Gulp";
        break;
      default:
        break;
    }

    this.ingredients = ingredients;

    this.orderer = orderer;
  }

  rollcall() {
    alert(`Order up!\n We have a ${this.ingredients.join()}.`);
  }

  debugLog() {
    Object.entries(this).forEach(([k, v]) => {
      console.log(`${k}: ${v}`);
    });
  }
}

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

const Flavors = [];

// Constant Variable Set-up
const ordererName = document.querySelector("#ordererName");
const smoothieFlavors = document.querySelector("#flavors");
const smoothieSize = document.querySelector("#smoothieSize");
const submitButton = document.querySelector("#submitButton");

const display = {
  header : document.querySelector("#display h2"),
  desc: document.querySelector("#display #desc"),
  ingr: document.querySelector("#display #ingr"),
  parent: document.querySelector("#display")
}

function displayFlavor(inputFlavor) {
  display.header.textContent = inputFlavor.name
  display.desc.textContent = inputFlavor.desc
  // Remove the inner HTML of the ul, effectively removing all items
  display.ingr.innerHTML = '';

  display.parent.style.borderTopColor = inputFlavor.color

  
  inputFlavor.ingredients.forEach(i => {
    let newListItem  = document.createElement('li')
    let newP = document.createElement('p');
    newP.textContent = i

    
    
    newListItem.appendChild(newP);
    display.ingr.appendChild(newListItem);

  });
}


function buildFlavors() {
  props.forEach((flavorObj) => {
    let newFlavor = new Flavor(flavorObj);
    Flavors.push(newFlavor);

    const flavorHTML = `<div><h4>${newFlavor["name"]}</h4><p>${newFlavor['desc']}</p></div>`;
  
    const newCard = document.createElement("a");

    newCard.addEventListener('click', () => {
      displayFlavor(newFlavor);
    })
      
    newCard.style.borderBottomColor = newFlavor.color
    newCard.innerHTML = flavorHTML;

    smoothieFlavors.appendChild(newCard);

  });
  
  displayFlavor(Flavors[Math.floor(Math.random() * Flavors.length)]);
  
}



buildFlavors();