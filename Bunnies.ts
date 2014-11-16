/* Bunnies.ts */

module C4 {
    export class Bunnies {
        bunny: C4.Bunny [] = []
        constructor() {
            var bunny: JQuery = jQuery('.bunny li')
            for(var a = 0; a < bunny.length; a ++) {
                this.bunny.push(new C4.Bunny(bunny.eq(a), a))
        } } 
        reset() { 
            this.bunny.forEach( (bunny: C4.Bunny) => { bunny.reset() } )
        }
        show(model: C4.Model, jacket: C4.Jacket) {
            model.state.forEach( (bunny: string, index: number) => {
                this.bunny[index].className = jacket [ bunny ]
            } )
        } 
    } 
}


