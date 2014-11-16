/* Motor.ts */

module C4 {
    export class Motor {
        cylinder : C4.Cylinder = new C4.Cylinder ()
        fuel     : C4.Fuel     = new C4.Fuel     ()
        gear     : C4.Gear     = new C4.Gear     ()
        get index() : number { 
            return this.cylinder.getIndex(this.gear.current)
        }
        constructor() {
        }
        auto (): void { 
            this.gear.setGear(this.fuel.burn(this.cylinder)) 
        } 
//        choke(driver: string): boolean { 
//            return this.cylinder.choke(driver, this.gear.current)
//        }
        start(driver: string): boolean { 
            return this.cylinder.start(driver, this.gear.current)
        }
//        can_start(driver: string): boolean { 
//            return this.cylinder.can_start(driver, this.gear.current) 
//        }
        stop(): void {
        }
    } 
}


