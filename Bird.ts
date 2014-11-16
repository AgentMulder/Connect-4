/* Bird.ts */

module C4 {
    export class Bird {
        constructor(public jquery: JQuery) {
        } 
//        hide() {
//            this.jquery.stop().animate( { opacity : 0 }, 'fast') 
//        } 
        reset() {
//            this.hide()
            this.jquery.css( { opacity : '' } ) 
//            this.jquery.css({})
        } 
        show() {
//            this.jquery.css( { opacity : 0 } ) 
            this.jquery.stop().animate( { opacity : 1 }, 'slow') 
        } 
    } 
}


