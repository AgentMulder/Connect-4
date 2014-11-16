/* Actor.ts */

module C4 {
    export class Actor {
        birds     : C4.Birds     = new C4.Birds()
        jacket    : C4.Jacket    = new C4.Jacket()
        mcgregor  : C4.McGregor  = new C4.McGregor()
        peter     : C4.Peter     = new C4.Peter()
        bunnies   : C4.Bunnies   = new C4.Bunnies()
        scarecrow : C4.Scarecrow = new C4.Scarecrow()
        constructor() {
        } 
        reset() {
            this.birds.reset()
            this.bunnies.reset()
            this.scarecrow.reset()
        }
        show(model: C4.Model) {
            this.mcgregor  .className = this.jacket.i
            this.peter     .className = this.jacket.i
            this.birds     .show ( model )
            this.bunnies   .show ( model, this.jacket )
            this.scarecrow .show ( model, this.jacket )
        }
    } 
}


