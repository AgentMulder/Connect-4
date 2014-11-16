/* Button.ts */

module C4 {
    export class Button {
        constructor(public jquery: JQuery) {
        } 
        set className(className: string) { 
            this.jquery[0].className = className
        }
        hide() { 
        }
        reset() { 
            this.jquery[0].className = 'jacket'
            this.jquery.css( { visibility : '' } )
        } 
        show(jacket: string) {
            this.className = jacket
            this.jquery[0].style.visibility = 'visible'
//            this.jquery.css( { opacity : 1 } )
        }
    } 
}


