/* Scarecrow.ts */

module C4 {
    export class Scarecrow {
        coat  : C4.Coat  = new C4.Coat()
        shoes : C4.Shoes = new C4.Shoes()
        constructor() {
        } 
        reset() { 
            this.coat .reset()
            this.shoes.reset()
        }
        show(model: C4.Model, jacket: C4.Jacket) {
            this.coat .show(model, jacket)
            this.shoes.show(model.winner)
        } 
    } 
}


