/* Bunny.ts */

module C4 {
    export class Bunny {
        battery : C4.Battery = new C4.Battery()
        constructor(public jquery: JQuery, index: number) {
            this.battery.charge(index)
        } 
        set className(className: string) { 
            this.jquery[0].className = className
        }
        exit() {
            //this.jquery.css ( { display: 'none' } )
            this.jquery[0].className = 'jacket'
        }
        init(className: string) {
            this.jquery.css ( { 
                top     : this.battery.start,
                opacity : 1
//                display : 'block',
            } )
            this.className = className
        } 
        reset() { 
            this.jquery.stop().animate ( { 
                top     : this.battery.start,
                opacity : 0
            }, {
                duration: 5 * this.battery.speed,
                complete : () => {
                    this.jquery[0].className = 'jacket'
                    this.jquery.css ( { 
                        top     : this.battery.start,
                        opacity : 1
                        } )
                }
            } )
        }



    } 
}


