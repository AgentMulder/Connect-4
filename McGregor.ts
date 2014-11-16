/* McGregor.ts */

module C4 {
    export class McGregor {
        jquery: JQuery = jQuery('.mcgregor')
        constructor() {
        } 
        set className(className: string) { 
            this.jquery[0].className = 'mcgregor ' + className
        }
        hide() {
            this.jquery.stop().animate( { opacity : 0 }, 'fast') 
        }
        run(event: JQueryEventObject): void {
            this.jquery.css( {
                left: event.pageX - 25 + 'px',
                top:  event.pageY - 25 + 'px',
            } )
        }
        show() {
            this.jquery.stop().animate( { opacity : 1 }, 'fast') 
        }
    } 
}


