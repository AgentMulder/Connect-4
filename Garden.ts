/* Garden.ts */

module C4 {
    export class Garden {
        element : HTMLElement = jQuery('.gate')[0]
        index   : number      = 0
        list    : string [] []  = [
           [ 'garden_1 ', 'gate_1 ' ],
           [ 'garden_2 ', 'gate_2 ' ],
           [ 'garden_3 ', 'gate_3 ' ],
//           [ 'garden_4 ', 'gate_4 ' ],
//           [ 'garden_5 ', 'gate_5 ' ],
        ]
        next() {
            this.index += 1 
            this.index = this.index > this.list.length -1 ? 0 : this.index
            this.set()
        }
        prev() {
            this.index -= 1 
            this.index = this.index < 0 ? this.list.length -1 : this.index
            this.set()
        }
        set() {
            this.element.className = 'garden ' + this.list[this.index][0] + 
                                     'gate '   + this.list[this.index][1]
        }
    } 
}


