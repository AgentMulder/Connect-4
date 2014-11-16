/* Game.ts */

module C4 {
    export class Game {
        controller : C4.Controller = new C4.Controller()
        constructor() {

            // DOCUMENT
            jQuery(window.document).on('keydown', (event: JQueryEventObject) => { 
                switch(event.which) {
                    case 13: this.controller.swap_jacket();     event.preventDefault(); break /* enter       */
                    case 36: this.controller.garden_previous(); event.preventDefault(); break /* insert      */
                    case 35: this.controller.garden_next();     event.preventDefault(); break /* delete      */
                    case 45: this.controller.shed_previous();   event.preventDefault(); break /* home        */
                    case 46: this.controller.shed_next();       event.preventDefault(); break /* end         */
                    case 33: this.controller.jacket_previous(); event.preventDefault(); break /* page_up     */
                    case 34: this.controller.jacket_next();     event.preventDefault(); break /* page_down   */
                    case 27: this.controller.reset();           event.preventDefault(); break /* escape      */
                    case 32: this.controller.swap_jacket();     event.preventDefault(); break /* space       */
                    case 37: this.controller.arrow_left();      event.preventDefault(); break /* arrow_left  */
                    case 38: this.controller.arrow_up();        event.preventDefault(); break /* arrow_up    */
                    case 39: this.controller.arrow_right();     event.preventDefault(); break /* arrow_right */
                    case 40: this.controller.arrow_down();      event.preventDefault(); break /* arrow_down  */
                    case 49: this.controller.setFuel(0);        event.preventDefault(); break /* arrow_down  */
                    case 50: this.controller.setFuel(1);        event.preventDefault(); break /* arrow_down  */
                    case 51: this.controller.setFuel(2);        event.preventDefault(); break /* arrow_down  */
                    case 52: this.controller.setFuel(3);        event.preventDefault(); break /* arrow_down  */
                    case 53: this.controller.setFuel(4);        event.preventDefault(); break /* arrow_down  */
                    case 54: this.controller.setFuel(5);        event.preventDefault(); break /* arrow_down  */
                }
                event.stopPropagation()
            } )
            jQuery(window.document).on('mousedown', (event: JQueryEventObject) => { 
            } )
            jQuery(window.document).on('mousemove', (event: JQueryEventObject) => { 
                this.controller.mcGregor_run(event)
            } )
            jQuery(window.document).on('wheel', (event: JQueryEventObject) => { 
                this.controller.wheel()
                event.stopPropagation()
            } )


            // CAN
            jQuery('.can').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.hop()
            } )


            // VEGGIE
            jQuery('.veggie li div').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.veggie_down(event)
            } )
            jQuery('.veggie li div').on('mouseenter', (event: JQueryEventObject) => { 
                this.controller.veggie_enter(event)
            } )
            jQuery('.veggie li div').on('mouseleave', (event: JQueryEventObject) => { 
                this.controller.veggie_leave(event)
            } )


            // VEGGIE
            jQuery('.blackberry li:nth-child(1)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.shed_previous()
                event.preventDefault();
            } )
            jQuery('.blackberry li:nth-child(2)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.shed_next()
                event.preventDefault();
            } )
            jQuery('.blackberry li:nth-child(3)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.garden_previous()
                event.preventDefault();
            } )
            jQuery('.blackberry li:nth-child(4)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.garden_next()
                event.preventDefault();
            } )
            jQuery('.blackberry li:nth-child(5)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.jacket_previous()
                event.preventDefault();
            } )
            jQuery('.blackberry li:nth-child(6)').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.jacket_next()
                event.preventDefault();
            } )


            // WALK
            jQuery('.walk').on('mouseenter', (event: JQueryEventObject) => { 
                this.controller.mcGregor_show()
            } )
            jQuery('.walk').on('mouseleave', (event: JQueryEventObject) => { 
                this.controller.mcGregor_hide()
            } )
            jQuery('.walk li').on('mousedown', (event: JQueryEventObject) => { 
                this.controller.walk_down(event)
            } )
            jQuery('.walk li').on('mouseenter', (event: JQueryEventObject) => { 
                this.controller.walk_enter(event)
            } )


//            // DASHBOARD 
//            jQuery('.dashboard').on('mousedown', (event: JQueryEventObject) => {
//                event.stopPropagation()
//            } )
//            jQuery('.dashboard').on('mouseenter', (event: JQueryEventObject) => {
//                this.controller.dashboard_show()
//            } )
//            jQuery('.dashboard').on('mouseleave', (event: JQueryEventObject) => {
//                this.controller.dashboard_hide()
//            } )
//
//
//            // RESET
//            jQuery('.reset').on('mousedown', (event: JQueryEventObject) => { 
//                this.controller.reset()
//            } )


            // KEY
            jQuery('input[name="key"]').on('change', (event: JQueryEventObject) => { 
                var key: string = jQuery('input[name="key"]:checked').val()
                this.controller.setKey(key);
                (<HTMLElement>document.activeElement).blur()
            } )
 

//            // FUEL
//            jQuery('input[name="fuel"] ').on('change', (event: JQueryEventObject) => { 
//                var fuel: string = jQuery('input[name="fuel"]:checked').val()
//                this.controller.setFuel(fuel);
//                (<HTMLElement>document.activeElement).blur()
//            } )


            // SOUND
            jQuery('input[name="sound"]').on('change', (event: JQueryEventObject) => { 
                var sound: boolean = jQuery('input[name="sound"]').is(':checked')
                this.controller.setSound(sound)
            } )

        } 
    } 
}


