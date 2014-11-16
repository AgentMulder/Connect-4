/* Veggies.ts */

module C4 {
    export class Veggies {
        jquery : JQuery       = jQuery('.veggie li div')
        veggie : C4.Veggie [] = []
        index  : number       = 2
        constructor() {
            for(var a = 0; a < this.jquery.length; a ++) {
                this.veggie.push(new C4.Veggie(this.jquery.eq(a)))
            } 
            this.veggie[0].jquery[0].title = 'Level 1\n---\nNoob'
            this.veggie[1].jquery[0].title = 'Level 2\n---\nBeginner'
            this.veggie[2].jquery[0].title = 'Level 3\n---\nAdvanced'
            this.veggie[3].jquery[0].title = 'Level 4\n---\nExpert'
            this.veggie[4].jquery[0].title = 'Level 5\n---\nMaster'
            this.veggie[5].jquery[0].title = 'Level 6\n---\nNinja'
        } 
        down(event: JQueryEventObject) {
            this.index = this.get_veggie(event)
            this.reset()
        }
        enter(event: JQueryEventObject) {
            var a = this.get_veggie(event)
            this.veggie.forEach( (veggie: C4.Veggie, index: number) => { 
                index <= a ? veggie.show() : veggie.hide()
            } ) 
        }
        get_veggie(event: JQueryEventObject): number {
            return this.jquery.index(event.currentTarget)
        }
        pick(index: number) {
            this.index = index
            this.reset()
        }
        reset() { 
            this.veggie.forEach( (veggie: C4.Veggie, index: number) => { 
                index <= this.index ? veggie.show() : veggie.hide()
        } ) }
        leave(event: JQueryEventObject) {
            this.reset()
        } 
    } 
}


