/* Gear.ts */

module C4 {
    export class Gear {
        current : number = 0
        high  : number = 0
        low   : number = 0
        get battery () : C4.Battery { 
            return new C4.Battery(this.low, this.high)
        }
        constructor() {
        } 
        down(): void { 
            this.setGear(this.current - 1)
        }
        setGear(current: number): number {
            this.low     = this.current
            this.current = current < 0 ? 6 : current > 6 ? 0 : current
            this.high    = this.current
            return this.current
        }
        up(): void { 
            this.setGear(this.current + 1)
        }   
    } 
}


