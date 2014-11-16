/* Cylinder.ts */

module C4 {
    export class Cylinder {
        key   : C4.Key      = new C4.Key()
        spark : C4.Spark [] = [];
        constructor() {
        } 
//        get driver(): string {
//            var result: string = 
//                this.spark.length ===  0 ? this.key.other :
//                this.spark.length === 42 ? 'o' :
//                this.spark[ this.spark.length - 1 ].driver
//                return result === 'i' ? 'u' :
//                       result === 'u' ? 'i' :
//                       result === 'o' ? 'o' : 'o'
//        }
        get driver(): string {
            return this.spark.length === 0 ? 'o' : 
                   this.spark[ this.spark.length - 1 ].driver
        }
        get can_dig(): boolean {
            return this.spark.length < 42
        }
        get not_empty(): boolean {
            return this.spark.length !== 0
        }
        get i(): number[] { 
            return this.getChar('i') 
        }
        get index(): number {
            return this.spark.length === 0 ? -1 : this.spark[ this.spark.length - 1 ].index
        }
        get o(): number[] { 
            return this.getChar('o') 
        }
        get other(): string {
            var driver: string = this.driver
            return driver === 'i' ? 'u' :
                   driver === 'u' ? 'i' :
                   driver === 'o' ? 'o' : 'o'
        }
        get peek(): C4.Spark {
            var spark: C4.Spark = new C4.Spark('o', -1) 
            if(this.spark.length > 0) {
                spark = this.spark [ this.spark.length - 1 ]
            }
            return spark
        }
        get smoke(): number[] { 
            return C4.Fire.smoke(this.state)
        }
        get state(): string [] {
            var result: string [] = "oooooooooooooooooooooooooooooooooooooooooo".split(''); 
            this.spark.forEach( (spark: C4.Spark) => {
                result[ spark.index ] = spark.driver;
            } );
            return result; 
        }
        get soot(): number[] { 
            return C4.Fire.soot(this.state)
        }
        get toprow(): number[] {
            var state  : string[]  = this.state;
            var result : number [] = [];
            for(var a = 0; a < 7; a ++) {
                state [ a ] === 'o' ? result.push(a) : ({})
            }
            return result;
        }
        get u(): number[] { 
            return this.getChar('u') 
        }
        get u_can (): boolean {
//            console.log('Cylinder.U')
//            console.log('Cylinder.u_can ' + (this.spark.length % 2 === 0))
//            console.log('Cylinder.u_can ' + (this.key.u                 ))
            var a: boolean = this.spark.length % 2 === 0
            var b: boolean = this.key.i
//            console.log('Cylinder.U')
//            console.log('Cylinder.u_can spark.length ' + (a) )
//            console.log('Cylinder.u_can key.u        ' + (b) )
//            return a === b
            return this.smoke.length > 0    ? false : 
                   this.spark.length > 41   ? false : 
                   ( this.spark.length % 2 === 0 ) === ( this.key.i )
        }
        get i_can (): boolean { 
//            console.log('Cylinder.I')
//            console.log('Cylinder.i_can ' + (this.spark.length % 2 === 0))
//            console.log('Cylinder.i_can ' + (this.key.i                 ))
            var a: boolean = this.spark.length % 2 === 0
            var b: boolean = this.key.i
//            console.log('Cylinder.I')
//            console.log('Cylinder.i_can spark.length ' + (a) )
//            console.log('Cylinder.i_can key.i        ' + (b) )
//            return a !== b
            return this.smoke.length > 0    ? false : 
                   this.spark.length > 41   ? false : 
                   ( this.spark.length % 2 === 0 ) !== ( this.key.i )
        }
        get winner(): string { 
            return this.smoke.length === 0 ? 'o' : this.driver

        }
        choke(driver: string, gear: number): boolean {
            //alert('Cylinder.choke 1 ' + (this.smoke.length !== 0) )
            //alert('Cylinder.choke 2 ' + (jQuery(':animated').length !== 0) )
            //alert('Cylinder.choke 3 ' + (this.getIndex(gear) === -1) )
            //alert('Cylinder.choke 4 ' + (driver === 'o') )
            //alert('Cylinder.choke 5 ' + (driver === this.driver) )
            return this.smoke.length          !== 0           ? false :
                   this.getIndex(gear)        === -1          ? false :
                   driver                     === 'o'         ? false :
                   driver                     === this.driver ? false : true
        }
        getChar(chars: string): number[] {
            var result : number [] = [];
            var state  : string [] = this.state;
            this.spark.forEach( (spark: C4.Spark, index: number) => {
                spark.driver === chars ? result.push(index) : {}
            } );
            return result;
        }
        getIndex(gear: number): number {
            var state : string [] = this.state
            var a     : number    = 35 + gear
            var b     : number    = 28 + gear
            var c     : number    = 21 + gear
            var d     : number    = 14 + gear
            var e     : number    =  7 + gear
            var f     : number    =  0 + gear
            return state [ a ] === 'o' ? a :
                   state [ b ] === 'o' ? b :
                   state [ c ] === 'o' ? c :
                   state [ d ] === 'o' ? d :
                   state [ e ] === 'o' ? e :
                   state [ f ] === 'o' ? f :
                   -1
        }
        pop(): C4.Spark {
            return this.spark.pop()
//            var spark: C4.Spark = new C4.Spark('o', -1) 
//            if(this.spark.length > 0) {
//                spark = this.spark.pop() 
//            }
//            return spark
        }
        start(driver: string, gear: number): boolean {
            var result: boolean = false
            if(this.choke(driver, gear)) {
                this.spark.push(new C4.Spark(driver, this.getIndex(gear)))
                result = true
            }
            return result
        }


    } 
}


