/* 

    © Quinn 2023 Faulkner

*/

// Constant Variable Set-up
const ordererName = document.querySelector("#ordererName");

const smoothieFlavors = document.querySelector("#smoothieFlavors");
const smoothieSize = document.querySelector("#smoothieSize");

const submitButton = document.querySelector("#submitButton");



class Ingredient {
    /* 
    :: name = String ::
        
        this parameter is a number that correlates to a specific size
        
    :: flavours = String [...] ::

        this parameter is an array of Ingredient objects ( detailed above!! ^^ )

    :: name = String ::

        this parameter is a string containing the name of the person who ordered

    */
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

    constructor( size, ingredients, orderer ) {

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