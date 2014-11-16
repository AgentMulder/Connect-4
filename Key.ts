/* Key.ts */

module C4 {
    export class Key {
        i_started      : boolean    = false
        start          : () => void = this.o_start 
        get starter () : string  { return this.i_started ? 'i' : 'u' }
        get other   () : string  { return this.i_started ? 'u' : 'i' }
        get i       () : boolean { return this.i_started }
        get u       () : boolean { return ! this.i_started }
        i_start(): boolean { this.i_started = true;             return this.i_started }
        o_start(): boolean { this.i_started = ! this.i_started; return this.i_started }
        u_start(): boolean { this.i_started = false;            return this.i_started }
        setKey(key: string) {
            alert('Key .setKey' )
            switch(key) {
                case 'i' : this.start = this.i_start; break
                case 'o' : this.start = this.o_start; break
                case 'u' : this.start = this.u_start; break
                default  : this.start = this.o_start; break
        } }

    } 
}


