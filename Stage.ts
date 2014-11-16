/* Stage.ts */

module C4 {
    export class Stage {
        blackberry : C4.Blackberry = new C4.Blackberry()
        can        : C4.Can        = new C4.Can()
        garden     : C4.Garden     = new C4.Garden()
        shed       : C4.Shed       = new C4.Shed()
        veggies    : C4.Veggies    = new C4.Veggies()
        walk       : C4.Walk       = new C4.Walk()
        constructor() {
        } 
        reset() { 
            this.veggies.reset()
        }
//        next() {
//            this.garden.next()
////            this.veggie.next()
//        }
//        prev() {
//            this.garden.prev()
////            this.veggie.prev()
//        }
    } 
}


