/* Coat.ts */

module C4 {
    export class Coat {
        button : C4.Button[] = []
        constructor() {
            var scarecrow: JQuery = jQuery('.scarecrow li')
            for(var a = 0; a < scarecrow.length; a ++) {
                this.button.push(new C4.Button(scarecrow.eq(a)))
        } } 
        reset() { 
            this.button.forEach( (button: C4.Button) => { button.reset() } )
        } 
//            for(var a = 0; a < this.button.length; a ++) {
//                this.button[a].reset()
//        } }
        show(model: C4.Model, jacket: C4.Jacket) {
            model.soot.forEach( (index: number) => {
//                this.button[index].className = jacket [ model.winner ]
                this.button[index].show( jacket [ model.winner ] )
        } ) 
        } 
    } 
}


