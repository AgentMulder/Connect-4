/* Shed.ts */

module C4 {
    export class Shed {
//        shed: HTMLElement = jQuery('.field') [0]
        shed: HTMLElement = jQuery('.connect4') [0]
        list: string[] = [ 
            'shed_1 ',
            'shed_2 ',
            'shed_3 ',
//            'shed_4 ',
//            'shed_5 ',
//            'shed_6 ',
        ]
        index: number = 0
        constructor() {
        } 
        next() {
            this.index += 1 
            this.index = this.index > this.list.length -1 ? 0 : this.index
            this.shed.className = 'connect4 ' + this.list[this.index]
        }
        prev() {
            this.index -= 1 
            this.index = this.index < 0 ? this.list.length -1 : this.index
            this.shed.className = 'connect4 ' + this.list[this.index]
        }
    } 
}


