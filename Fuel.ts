/* Fuel.ts */

module C4 {
    export class Fuel {
        burn : (cylinder: C4.Cylinder) => number = this.octane_3 
        octane(cylinder: C4.Cylinder): number {
            var toprow : number [] = cylinder.toprow
            var length : number    = toprow.length
            return length === 0 ? -1 : toprow[ Math.floor( length * Math.random()) ]
        }
        /* 1. Noob 2. Beginner 3. Advanced 4. Expert 5. Master 6. Ninja. Put your AI here */
        octane_1(cylinder: C4.Cylinder): number {
            var toprow : number [] = cylinder.toprow
            var length : number    = toprow.length
            return length === 0 ? -1 : toprow[ 0 ]
        }
        octane_2(cylinder: C4.Cylinder): number {
            var toprow : number [] = cylinder.toprow
            var length : number    = toprow.length
            return length === 0 ? -1 : toprow[ length - 1 ]
        } 
        octane_3(cylinder: C4.Cylinder): number {
            return this.octane(cylinder)
        }
        octane_4(cylinder: C4.Cylinder): number {
            return this.octane(cylinder)
        }
        octane_5(cylinder: C4.Cylinder): number {
            return this.octane(cylinder)
        }
        octane_6(cylinder: C4.Cylinder): number {
            return this.octane(cylinder)
        }
        setFuel(fuel: number) {
            switch(fuel) {
                case 0  : this.burn = this.octane_1; break
                case 1  : this.burn = this.octane_2; break
                case 2  : this.burn = this.octane_3; break
                case 3  : this.burn = this.octane_4; break
                case 4  : this.burn = this.octane_5; break
                case 5  : this.burn = this.octane_6; break
                default : this.burn = this.octane_3; break
} } } }


