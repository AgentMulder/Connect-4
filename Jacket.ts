/* Jacket.ts */

module C4 {
    export class Jacket {
        index    : number       = 0
        winter   : boolean      = false
        list     : string [] [] = [ 
            [ 'jacket_1 ', 'jacket_2 ' ],
            [ 'jacket_3 ', 'jacket_4 ' ],
            [ 'jacket_5 ', 'jacket_6 ' ],
//            [ 'jacket_7 ', 'jacket_8 ' ],
//            [ 'jacket_6 ', 'jacket_7 ' ],
//            [ 'jacket_8 ', 'jacket_9 ' ],
//            [ 'jacket_5 ', 'jacket_7 ' ],
//            [ 'jacket_6 ', 'jacket_8 ' ],
//            [ 'jacket_7 ', 'jacket_9 ' ],
//            [ 'jacket_8 ', 'jacket_5 ' ],
//            [ 'jacket_9 ', 'jacket_6 ' ],
        ]
        constructor() {
        } 
        get i () : string { return this.list [ this.index ] [ this.winter ? 1 : 0 ] } 
        get o () : string { return 'jacket'                                         }
        get u () : string { return this.list [ this.index ] [ this.winter ? 0 : 1 ] } 
        next() {
            this.index += 1 
            this.index = this.index > this.list.length -1 ? 0 : this.index
//            this.set()
        }
        prev() {
            this.index -= 1 
            this.index = this.index < 0 ? this.list.length -1 : this.index
//            this.set()
        }
        seasonsComeAndSeasonsGo(): void { 
            this.winter = ! this.winter 
        }
    } 
}


