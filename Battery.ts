/* Battery.ts */

module C4 {
    export class Battery {
        static VOLTAGE = 50
        _speed : number
        _start : number
        _stop  : number
        constructor(start: number = 0, stop: number = 0) {
            this._speed = Math.abs(start - stop)
            this._start = start
            this._stop  = stop 
        } 
        get speed () : number { return 1 * this._speed * C4.Battery.VOLTAGE }
        get start () : number { return this._start * C4.Battery.VOLTAGE }
        get stop  () : number { return this._stop  * C4.Battery.VOLTAGE }
        charge(index: number) {
            this._speed = Math.abs( Math.floor( index / 7 ) )
            this._start = - 1
            this._stop  = this._speed 
        }
    } 
}


