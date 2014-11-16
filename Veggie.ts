/* Veggie.ts */

module C4 {
    export class Veggie {
        constructor(public jquery: JQuery) {
        } 
        hide() {
            this.jquery.stop().animate( { opacity : 0 }, 'slow') 
        }
        reset() { 
            this.jquery.stop().animate( { opacity : 0 }, 'slow') 
        }
        show() {
            this.jquery.stop().animate( { opacity : 1 }, 'fast') 
        }
    } 
}


