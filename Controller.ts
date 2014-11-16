/* Controller.ts */

module C4 {
    export class Controller {
//        mode  : string   = 'automatic' // 'solo' 'duo' has to go ( to C4.Key? )
        model : C4.Model = new C4.Model()
        view  : C4.View  = new C4.View()
        constructor() {
            this.reset()
            this.show()
//            if(this.mode === 'automatic') {
//                setInterval( () => {
//                    if(this.model.u_can) {
//                        console.log('Controller ucan ' + this.model.state)
//                        this.model.auto()
//                        this.hip('u', 'i')
//                    }
////                    else if(this.model.i_can) {
////                        console.log('Controller ican ' + this.model.state)
////                        this.model.auto()
////                        this.hip('i', 'u')
////                    }
//                },  3000 )
//            }
        } 
        set event(event: JQueryEventObject) { 
            this.model.setGear(this.view.processEvent(event))
        }
        arrow_down() {
            if(this.model.i_can) {
                this.hip('i', 'u')
            }
        }
        arrow_left() {
            this.model.left()
            this.run()
        }
        arrow_right() {
            this.model.right()
            this.run()
        }
        arrow_up() {
            this.hop()
        }

//        dashboard_hide() {
////            this.view.preferences.dashboard.hide()
//        }
//        dashboard_lock() {
////            this.view.preferences.dashboard.lock()
//        }
//        dashboard_show() {
//        }
        garden_next() { 
            this.view.stage.garden.next()
            this.show() 
        }
        garden_previous() { 
            this.view.stage.garden.prev()
            this.show() 
        }
        //alert('Controller halfway hip')
        hip(bunny_1: string, bunny_2: string) {
            if(this.model.start(bunny_1)) {
                var spark : C4.Spark = this.model.spark
                var peter : C4.Peter = this.view.actor.peter
                var bunny : C4.Bunny = this.view.getBunny(spark.index)
                peter.className = this.view [ bunny_1 ]
                peter.jquery.stop ( true, true ) .animate ( {   
                    left: this.model.battery.stop  
                }, {   
                    duration : this.model.battery.speed,
                    complete : () => {
                        bunny.init (this.view [ bunny_1 ] )
                        peter.className = this.view [ bunny_2 ]
                        bunny.jquery.stop ( true, true ).animate ( {   
                            top: bunny.battery.stop 
                        }, {   
                            duration : bunny.battery.speed,
                            complete : () => {
                                this.show() 
                                if(this.model.u_can) {
                                    this.model.auto()
                                    this.hip('u', 'i')
        } } } ) } } ) } }
        hop() {
            if(this.model.can_hop) {
                var spark  : C4.Spark = this.model.pop()
                var peter  : C4.Peter = this.view.actor.peter
                var bunny  : C4.Bunny = this.view.getBunny(spark.index)
                this.model.setGear(spark.index % 7)
                peter.jquery.stop ( true, true ).animate ( {   
                    left: this.model.battery.stop  
                }, {   
                    duration : this.model.battery.speed,
                    complete : () => {
                        bunny.jquery.stop ( true, true ).animate ( {   
                            top: bunny.battery.start
                        }, {   
                            duration : bunny.battery.speed,
                            complete : () => {
                                peter.className = this.view [ spark.driver ]
                                bunny.exit()
                                this.view.actor.birds.reset()
                                this.view.actor.scarecrow.reset()
                                this.show() 
                                if(this.model.u_can) {
                                    this.hop()
        } } } ) } } ) } }
        jacket_next() { 
            this.view.actor.jacket .next()
            this.show() 
        }
        jacket_previous() { 
            this.view.actor.jacket.prev()
            this.show() 
        }
        mcGregor_show() {
            this.view.actor.mcgregor.show()
        }
        mcGregor_hide() {
            this.view.actor.mcgregor.hide()
        }
        mcGregor_run(event: JQueryEventObject) {
            this.view.actor.mcgregor.run(event)
        }
        reset() {
//            while(this.model.can_hop) {
//                this.hop() 
//            }
            this.model.reset()
            this.view.reset()
        }
        run() {
            this.view.actor.peter.jquery.stop ( true,  true  ).animate ( {   
                left     : this.model.battery.stop  
            }, {
                duration : this.model.battery.speed 
        } ) }
        setFuel(fuel: number) {
            this.view.stage.veggies.pick(fuel)
            this.model.setFuel(fuel)
            this.reset()
        }
        setKey(key: string) {
            this.model.setKey(key)
        }
        setSound(sound: boolean) {
//            this.view.preferences.sound.setSound(sound)
        }
        shed_next() { 
            this.view.stage.shed.next()
            this.show() 
        }
        shed_previous() { 
            this.view.stage.shed.prev()
            this.show() 
        }
        show() {
            this.view.show(this.model)
        }
        swap_jacket() {
            this.view.actor.jacket.seasonsComeAndSeasonsGo()
            this.show()
        }
        veggie_down(event: JQueryEventObject): void {
            this.view.stage.veggies.down(event)
            this.model.setFuel(this.view.stage.veggies.index)
            this.reset()
        }
        veggie_enter(event: JQueryEventObject): void {
            this.view.stage.veggies.enter(event)
        }
        veggie_leave(event: JQueryEventObject): void {
            this.view.stage.veggies.leave(event)
        }
        walk_down(event: JQueryEventObject): void {
            this.event = event
            if(this.model.i_can) {
                this.hip('i', 'u')
        } }
        walk_enter(event: JQueryEventObject): void {
            this.event = event
            this.run()
        }
        wheel(): void {
        } 
    } 
}


