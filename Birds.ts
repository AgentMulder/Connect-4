/* Birds.ts */

module C4 {
    export class Birds {
        birds : HTMLElement = jQuery('.bird') [0]
        bird  : C4.Bird []  = []
        constructor() {
            var bird: JQuery = jQuery('.bird li')
            for(var a = 0; a < bird.length; a ++) {
                this.bird.push( new C4.Bird(bird.eq(a)))
        } } 
        reset() {
            this.bird.forEach( (bird: C4.Bird) => { bird.reset() } )
        }
        show(model: C4.Model) {
            this.birds.className = 'bird bird_' + model.winner
            model.smoke.forEach( (index : number) => { 
                this.bird[index].show()  
            } )
        }
    } 
}


