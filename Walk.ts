/* Walk.ts */

module C4 {
    export class Walk {
        walk: JQuery = jQuery('.walk li')
        constructor() {
        } 
        processEvent(event: JQueryEventObject): number { 
            return this.walk.index(event.currentTarget)
        }
    } 
}


