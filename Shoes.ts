/* Shoes.ts */

module C4 {
    export class Shoes {
        jquery: JQuery = jQuery('.shoes')
        constructor() {
        } 
        reset() { 
            this.jquery.css( { opacity: '' } )
        } 
        show(winner: string) {
            this.jquery[0].className = 'shoes shoes_' + winner
//            this.jquery.css( { opacity: 0 } )
            this.jquery.stop().animate( { opacity : 1 }, 'slow') 
        }
    } 
}


