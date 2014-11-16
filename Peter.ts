/* Peter.ts */

module C4 {
    export class Peter {
        jquery : JQuery = jQuery('.peter li')
        constructor() {
        } 
        set className(className: string) { 
            this.jquery[0].className = className
        }
//        run(battery: C4.Battery) {
//            this.jquery.stop ( true,  true  ).animate ( {   
//                left     : battery.stop  
//            }, {
//                duration : battery.speed 
//        } ) }
        show(className: string) {
            this.jquery[0].className = className;
        }
    } 
}


