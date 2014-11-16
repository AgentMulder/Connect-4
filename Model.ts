/* Model.ts */

module C4 {
    export class Model {
        motor : C4.Motor = new C4.Motor();
        //get gear     () : number     { return this.motor.gear.index }
        //get bottom   () : number     { return 4                     }
        //get lop      () : number     { return 15                    }
        //get driver   () : string     { return this.motor.cylinder.driver   }
        get soot      () : number[]   { return this.motor.cylinder.soot      }
        get spark     () : C4.Spark   { return this.motor.cylinder.peek      }
        get battery   () : C4.Battery { return this.motor.gear.battery       }
//        get can_dig   () : boolean    { return this.motor.cylinder.can_dig   }
        get can_hop   () : boolean    { return this.motor.cylinder.not_empty }
        get i_can     () : boolean    { return this.motor.cylinder.i_can     }
        get index     () : number     { return this.motor.cylinder.index     }
        get other     () : string     { return this.motor.cylinder.other     }
        get smoke     () : number[]   { return this.motor.cylinder.smoke     }
        get state     () : string[]   { return this.motor.cylinder.state     }
        get u_can     () : boolean    { return this.motor.cylinder.u_can     }
        get winner    () : string     { return this.motor.cylinder.winner    }
//        get your_turn () : boolean    { return this.motor.cylinder.your_turn }
        constructor() {
        } 
        //can_auto()                : boolean { return this.motor.cylinder.can_auto()        }
        //can_start(driver: string) : boolean { return this.motor.can_start(driver)          }
        //can_stop()                : boolean { return this.motor.cylinder.can_stop()        }
        //choke(driver: string)     : boolean { return this.motor.choke(driver)              }
        auto ()                   : void    { this.motor.auto()                            }
        left ()                   : void    { this.motor.gear.down()                       }
        pop  ()                   : C4.Spark{ return this.motor.cylinder.pop()             }
        reset()                   : void    { this.motor.cylinder.spark.length = 0         }
        right()                   : void    { this.motor.gear.up()                         }
        start(driver: string)     : boolean { return this.motor.start(driver)              }
        setFuel(fuel: number)     : void    { this.motor.fuel.setFuel(fuel)                }
        setGear(gear: number)     : number  { return this.motor.gear.setGear(gear)         }
        setKey(key: string)       : void    { this.motor.cylinder.key.setKey(key)          }
        stop()                    : void    { this.motor.stop()                            }
    } 
}


