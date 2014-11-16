/* Actor.ts */
var C4;
(function (C4) {
    var Actor = (function () {
        function Actor() {
            this.birds = new C4.Birds();
            this.jacket = new C4.Jacket();
            this.mcgregor = new C4.McGregor();
            this.peter = new C4.Peter();
            this.bunnies = new C4.Bunnies();
            this.scarecrow = new C4.Scarecrow();
        }
        Actor.prototype.reset = function () {
            this.birds.reset();
            this.bunnies.reset();
            this.scarecrow.reset();
        };
        Actor.prototype.show = function (model) {
            this.mcgregor.className = this.jacket.i;
            this.peter.className = this.jacket.i;
            this.birds.show(model);
            this.bunnies.show(model, this.jacket);
            this.scarecrow.show(model, this.jacket);
        };
        return Actor;
    })();
    C4.Actor = Actor;
})(C4 || (C4 = {}));
/* Battery.ts */
var C4;
(function (C4) {
    var Battery = (function () {
        function Battery(start, stop) {
            if (start === void 0) { start = 0; }
            if (stop === void 0) { stop = 0; }
            this._speed = Math.abs(start - stop);
            this._start = start;
            this._stop = stop;
        }
        Object.defineProperty(Battery.prototype, "speed", {
            get: function () {
                return 1 * this._speed * C4.Battery.VOLTAGE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Battery.prototype, "start", {
            get: function () {
                return this._start * C4.Battery.VOLTAGE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Battery.prototype, "stop", {
            get: function () {
                return this._stop * C4.Battery.VOLTAGE;
            },
            enumerable: true,
            configurable: true
        });
        Battery.prototype.charge = function (index) {
            this._speed = Math.abs(Math.floor(index / 7));
            this._start = -1;
            this._stop = this._speed;
        };
        Battery.VOLTAGE = 50;
        return Battery;
    })();
    C4.Battery = Battery;
})(C4 || (C4 = {}));
/* Bird.ts */
var C4;
(function (C4) {
    var Bird = (function () {
        function Bird(jquery) {
            this.jquery = jquery;
        }
        //        hide() {
        //            this.jquery.stop().animate( { opacity : 0 }, 'fast') 
        //        } 
        Bird.prototype.reset = function () {
            //            this.hide()
            this.jquery.css({ opacity: '' });
            //            this.jquery.css({})
        };
        Bird.prototype.show = function () {
            //            this.jquery.css( { opacity : 0 } ) 
            this.jquery.stop().animate({ opacity: 1 }, 'slow');
        };
        return Bird;
    })();
    C4.Bird = Bird;
})(C4 || (C4 = {}));
/* Birds.ts */
var C4;
(function (C4) {
    var Birds = (function () {
        function Birds() {
            this.birds = jQuery('.bird')[0];
            this.bird = [];
            var bird = jQuery('.bird li');
            alert('Birds bird.length ' + bird.length);
            for (var a = 0; a < bird.length; a++) {
                this.bird.push(new C4.Bird(bird.eq(a)));
            }
        }
        Birds.prototype.reset = function () {
            this.bird.forEach(function (bird) {
                bird.reset();
            });
        };
        Birds.prototype.show = function (model) {
            var _this = this;
            this.birds.className = 'bird bird_' + model.winner;
            model.smoke.forEach(function (index) {
                _this.bird[index].show();
            });
        };
        return Birds;
    })();
    C4.Birds = Birds;
})(C4 || (C4 = {}));
/* Blackberry.ts */
var C4;
(function (C4) {
    var Blackberry = (function () {
        function Blackberry() {
            var blackberry = jQuery('.blackberry li');
            blackberry[0].title = 'Previous\nBackground';
            blackberry[1].title = 'Next\nBackground';
            blackberry[2].title = 'Previous Grid';
            blackberry[3].title = 'Next Grid';
            blackberry[4].title = 'Previous Disk';
            blackberry[5].title = 'Next Disk';
        }
        return Blackberry;
    })();
    C4.Blackberry = Blackberry;
})(C4 || (C4 = {}));
/* Bunnies.ts */
var C4;
(function (C4) {
    var Bunnies = (function () {
        function Bunnies() {
            this.bunny = [];
            var bunny = jQuery('.bunny li');
            for (var a = 0; a < bunny.length; a++) {
                this.bunny.push(new C4.Bunny(bunny.eq(a), a));
            }
        }
        Bunnies.prototype.reset = function () {
            this.bunny.forEach(function (bunny) {
                bunny.reset();
            });
        };
        Bunnies.prototype.show = function (model, jacket) {
            var _this = this;
            model.state.forEach(function (bunny, index) {
                _this.bunny[index].className = jacket[bunny];
            });
        };
        return Bunnies;
    })();
    C4.Bunnies = Bunnies;
})(C4 || (C4 = {}));
/* Bunny.ts */
var C4;
(function (C4) {
    var Bunny = (function () {
        function Bunny(jquery, index) {
            this.jquery = jquery;
            this.battery = new C4.Battery();
            this.battery.charge(index);
        }
        Object.defineProperty(Bunny.prototype, "className", {
            set: function (className) {
                this.jquery[0].className = className;
            },
            enumerable: true,
            configurable: true
        });
        Bunny.prototype.exit = function () {
            //this.jquery.css ( { display: 'none' } )
            this.jquery[0].className = 'jacket';
        };
        Bunny.prototype.init = function (className) {
            this.jquery.css({
                top: this.battery.start,
                opacity: 1
            });
            this.className = className;
        };
        Bunny.prototype.reset = function () {
            var _this = this;
            this.jquery.stop().animate({
                top: this.battery.start,
                opacity: 0
            }, {
                duration: 5 * this.battery.speed,
                complete: function () {
                    _this.jquery[0].className = 'jacket';
                    _this.jquery.css({
                        top: _this.battery.start,
                        opacity: 1
                    });
                }
            });
        };
        return Bunny;
    })();
    C4.Bunny = Bunny;
})(C4 || (C4 = {}));
/* Button.ts */
var C4;
(function (C4) {
    var Button = (function () {
        function Button(jquery) {
            this.jquery = jquery;
        }
        Object.defineProperty(Button.prototype, "className", {
            set: function (className) {
                this.jquery[0].className = className;
            },
            enumerable: true,
            configurable: true
        });
        Button.prototype.hide = function () {
        };
        Button.prototype.reset = function () {
            this.jquery[0].className = 'jacket';
            this.jquery.css({ visibility: '' });
        };
        Button.prototype.show = function (jacket) {
            this.className = jacket;
            this.jquery[0].style.visibility = 'visible';
            //            this.jquery.css( { opacity : 1 } )
        };
        return Button;
    })();
    C4.Button = Button;
})(C4 || (C4 = {}));
/* Can.ts */
var C4;
(function (C4) {
    var Can = (function () {
        function Can() {
            jQuery('.can')[0].title = 'Back';
        }
        return Can;
    })();
    C4.Can = Can;
})(C4 || (C4 = {}));
/* Coat.ts */
var C4;
(function (C4) {
    var Coat = (function () {
        function Coat() {
            this.button = [];
            var scarecrow = jQuery('.scarecrow li');
            for (var a = 0; a < scarecrow.length; a++) {
                this.button.push(new C4.Button(scarecrow.eq(a)));
            }
        }
        Coat.prototype.reset = function () {
            this.button.forEach(function (button) {
                button.reset();
            });
        };
        //            for(var a = 0; a < this.button.length; a ++) {
        //                this.button[a].reset()
        //        } }
        Coat.prototype.show = function (model, jacket) {
            var _this = this;
            model.soot.forEach(function (index) {
                //                this.button[index].className = jacket [ model.winner ]
                _this.button[index].show(jacket[model.winner]);
            });
        };
        return Coat;
    })();
    C4.Coat = Coat;
})(C4 || (C4 = {}));
/* Controller.ts */
var C4;
(function (C4) {
    var Controller = (function () {
        function Controller() {
            //        mode  : string   = 'automatic' // 'solo' 'duo' has to go ( to C4.Key? )
            this.model = new C4.Model();
            this.view = new C4.View();
            this.reset();
            this.show();
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
        Object.defineProperty(Controller.prototype, "event", {
            set: function (event) {
                this.model.setGear(this.view.processEvent(event));
            },
            enumerable: true,
            configurable: true
        });
        Controller.prototype.arrow_down = function () {
            if (this.model.i_can) {
                this.hip('i', 'u');
            }
        };
        Controller.prototype.arrow_left = function () {
            this.model.left();
            this.run();
        };
        Controller.prototype.arrow_right = function () {
            this.model.right();
            this.run();
        };
        Controller.prototype.arrow_up = function () {
            this.hop();
        };
        //        dashboard_hide() {
        ////            this.view.preferences.dashboard.hide()
        //        }
        //        dashboard_lock() {
        ////            this.view.preferences.dashboard.lock()
        //        }
        //        dashboard_show() {
        //        }
        Controller.prototype.garden_next = function () {
            this.view.stage.garden.next();
            this.show();
        };
        Controller.prototype.garden_previous = function () {
            this.view.stage.garden.prev();
            this.show();
        };
        //alert('Controller halfway hip')
        Controller.prototype.hip = function (bunny_1, bunny_2) {
            var _this = this;
            if (this.model.start(bunny_1)) {
                var spark = this.model.spark;
                var peter = this.view.actor.peter;
                var bunny = this.view.getBunny(spark.index);
                peter.className = this.view[bunny_1];
                peter.jquery.stop(true, true).animate({
                    left: this.model.battery.stop
                }, {
                    duration: this.model.battery.speed,
                    complete: function () {
                        bunny.init(_this.view[bunny_1]);
                        peter.className = _this.view[bunny_2];
                        bunny.jquery.stop(true, true).animate({
                            top: bunny.battery.stop
                        }, {
                            duration: bunny.battery.speed,
                            complete: function () {
                                _this.show();
                                if (_this.model.u_can) {
                                    _this.model.auto();
                                    _this.hip('u', 'i');
                                }
                            }
                        });
                    }
                });
            }
        };
        Controller.prototype.hop = function () {
            var _this = this;
            if (this.model.can_hop) {
                var spark = this.model.pop();
                var peter = this.view.actor.peter;
                var bunny = this.view.getBunny(spark.index);
                this.model.setGear(spark.index % 7);
                peter.jquery.stop(true, true).animate({
                    left: this.model.battery.stop
                }, {
                    duration: this.model.battery.speed,
                    complete: function () {
                        bunny.jquery.stop(true, true).animate({
                            top: bunny.battery.start
                        }, {
                            duration: bunny.battery.speed,
                            complete: function () {
                                peter.className = _this.view[spark.driver];
                                bunny.exit();
                                _this.view.actor.birds.reset();
                                _this.view.actor.scarecrow.reset();
                                _this.show();
                                if (_this.model.u_can) {
                                    _this.hop();
                                }
                            }
                        });
                    }
                });
            }
        };
        Controller.prototype.jacket_next = function () {
            this.view.actor.jacket.next();
            this.show();
        };
        Controller.prototype.jacket_previous = function () {
            this.view.actor.jacket.prev();
            this.show();
        };
        Controller.prototype.mcGregor_show = function () {
            this.view.actor.mcgregor.show();
        };
        Controller.prototype.mcGregor_hide = function () {
            this.view.actor.mcgregor.hide();
        };
        Controller.prototype.mcGregor_run = function (event) {
            this.view.actor.mcgregor.run(event);
        };
        Controller.prototype.reset = function () {
            //            while(this.model.can_hop) {
            //                this.hop() 
            //            }
            this.model.reset();
            this.view.reset();
        };
        Controller.prototype.run = function () {
            this.view.actor.peter.jquery.stop(true, true).animate({
                left: this.model.battery.stop
            }, {
                duration: this.model.battery.speed
            });
        };
        Controller.prototype.setFuel = function (fuel) {
            this.view.stage.veggies.pick(fuel);
            this.model.setFuel(fuel);
            this.reset();
        };
        Controller.prototype.setKey = function (key) {
            this.model.setKey(key);
        };
        Controller.prototype.setSound = function (sound) {
            //            this.view.preferences.sound.setSound(sound)
        };
        Controller.prototype.shed_next = function () {
            this.view.stage.shed.next();
            this.show();
        };
        Controller.prototype.shed_previous = function () {
            this.view.stage.shed.prev();
            this.show();
        };
        Controller.prototype.show = function () {
            this.view.show(this.model);
        };
        Controller.prototype.swap_jacket = function () {
            this.view.actor.jacket.seasonsComeAndSeasonsGo();
            this.show();
        };
        Controller.prototype.veggie_down = function (event) {
            this.view.stage.veggies.down(event);
            this.model.setFuel(this.view.stage.veggies.index);
            this.reset();
        };
        Controller.prototype.veggie_enter = function (event) {
            this.view.stage.veggies.enter(event);
        };
        Controller.prototype.veggie_leave = function (event) {
            this.view.stage.veggies.leave(event);
        };
        Controller.prototype.walk_down = function (event) {
            this.event = event;
            if (this.model.i_can) {
                this.hip('i', 'u');
            }
        };
        Controller.prototype.walk_enter = function (event) {
            this.event = event;
            this.run();
        };
        Controller.prototype.wheel = function () {
        };
        return Controller;
    })();
    C4.Controller = Controller;
})(C4 || (C4 = {}));
/* Cylinder.ts */
var C4;
(function (C4) {
    var Cylinder = (function () {
        function Cylinder() {
            this.key = new C4.Key();
            this.spark = [];
        }
        Object.defineProperty(Cylinder.prototype, "driver", {
            //        get driver(): string {
            //            var result: string = 
            //                this.spark.length ===  0 ? this.key.other :
            //                this.spark.length === 42 ? 'o' :
            //                this.spark[ this.spark.length - 1 ].driver
            //                return result === 'i' ? 'u' :
            //                       result === 'u' ? 'i' :
            //                       result === 'o' ? 'o' : 'o'
            //        }
            get: function () {
                return this.spark.length === 0 ? 'o' : this.spark[this.spark.length - 1].driver;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "can_dig", {
            get: function () {
                return this.spark.length < 42;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "not_empty", {
            get: function () {
                return this.spark.length !== 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "i", {
            get: function () {
                return this.getChar('i');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "index", {
            get: function () {
                return this.spark.length === 0 ? -1 : this.spark[this.spark.length - 1].index;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "o", {
            get: function () {
                return this.getChar('o');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "other", {
            get: function () {
                var driver = this.driver;
                return driver === 'i' ? 'u' : driver === 'u' ? 'i' : driver === 'o' ? 'o' : 'o';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "peek", {
            get: function () {
                var spark = new C4.Spark('o', -1);
                if (this.spark.length > 0) {
                    spark = this.spark[this.spark.length - 1];
                }
                return spark;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "smoke", {
            get: function () {
                return C4.Fire.smoke(this.state);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "state", {
            get: function () {
                var result = "oooooooooooooooooooooooooooooooooooooooooo".split('');
                this.spark.forEach(function (spark) {
                    result[spark.index] = spark.driver;
                });
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "soot", {
            get: function () {
                return C4.Fire.soot(this.state);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "toprow", {
            get: function () {
                var state = this.state;
                var result = [];
                for (var a = 0; a < 7; a++) {
                    state[a] === 'o' ? result.push(a) : ({});
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "u", {
            get: function () {
                return this.getChar('u');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "u_can", {
            get: function () {
                //            console.log('Cylinder.U')
                //            console.log('Cylinder.u_can ' + (this.spark.length % 2 === 0))
                //            console.log('Cylinder.u_can ' + (this.key.u                 ))
                var a = this.spark.length % 2 === 0;
                var b = this.key.i;
                //            console.log('Cylinder.U')
                //            console.log('Cylinder.u_can spark.length ' + (a) )
                //            console.log('Cylinder.u_can key.u        ' + (b) )
                //            return a === b
                return this.smoke.length > 0 ? false : this.spark.length > 41 ? false : (this.spark.length % 2 === 0) === (this.key.i);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "i_can", {
            get: function () {
                //            console.log('Cylinder.I')
                //            console.log('Cylinder.i_can ' + (this.spark.length % 2 === 0))
                //            console.log('Cylinder.i_can ' + (this.key.i                 ))
                var a = this.spark.length % 2 === 0;
                var b = this.key.i;
                //            console.log('Cylinder.I')
                //            console.log('Cylinder.i_can spark.length ' + (a) )
                //            console.log('Cylinder.i_can key.i        ' + (b) )
                //            return a !== b
                return this.smoke.length > 0 ? false : this.spark.length > 41 ? false : (this.spark.length % 2 === 0) !== (this.key.i);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Cylinder.prototype, "winner", {
            get: function () {
                return this.smoke.length === 0 ? 'o' : this.driver;
            },
            enumerable: true,
            configurable: true
        });
        Cylinder.prototype.choke = function (driver, gear) {
            //alert('Cylinder.choke 1 ' + (this.smoke.length !== 0) )
            //alert('Cylinder.choke 2 ' + (jQuery(':animated').length !== 0) )
            //alert('Cylinder.choke 3 ' + (this.getIndex(gear) === -1) )
            //alert('Cylinder.choke 4 ' + (driver === 'o') )
            //alert('Cylinder.choke 5 ' + (driver === this.driver) )
            return this.smoke.length !== 0 ? false : this.getIndex(gear) === -1 ? false : driver === 'o' ? false : driver === this.driver ? false : true;
        };
        Cylinder.prototype.getChar = function (chars) {
            var result = [];
            var state = this.state;
            this.spark.forEach(function (spark, index) {
                spark.driver === chars ? result.push(index) : {};
            });
            return result;
        };
        Cylinder.prototype.getIndex = function (gear) {
            var state = this.state;
            var a = 35 + gear;
            var b = 28 + gear;
            var c = 21 + gear;
            var d = 14 + gear;
            var e = 7 + gear;
            var f = 0 + gear;
            return state[a] === 'o' ? a : state[b] === 'o' ? b : state[c] === 'o' ? c : state[d] === 'o' ? d : state[e] === 'o' ? e : state[f] === 'o' ? f : -1;
        };
        Cylinder.prototype.pop = function () {
            return this.spark.pop();
            //            var spark: C4.Spark = new C4.Spark('o', -1) 
            //            if(this.spark.length > 0) {
            //                spark = this.spark.pop() 
            //            }
            //            return spark
        };
        Cylinder.prototype.start = function (driver, gear) {
            var result = false;
            if (this.choke(driver, gear)) {
                this.spark.push(new C4.Spark(driver, this.getIndex(gear)));
                result = true;
            }
            return result;
        };
        return Cylinder;
    })();
    C4.Cylinder = Cylinder;
})(C4 || (C4 = {}));
/* Fire.ts */
var C4;
(function (C4) {
    var Fire = (function () {
        function Fire() {
        }
        Fire.smoke = function (chars) {
            var result = [];
            for (var a = 0; a < this.location.length; a++) {
                var b = this.location[a][0];
                var c = this.location[a][1];
                var d = this.location[a][2];
                var e = this.location[a][3];
                var f = chars[b];
                var g = chars[c];
                var h = chars[d];
                var i = chars[e];
                if ((f === g) && (f === h) && (f === i) && (f !== 'o')) {
                    result.push(a);
                }
            }
            return result;
        };
        Fire.soot = function (chars) {
            var result = [];
            for (var a = 0; a < this.location.length; a++) {
                var b = this.location[a][0];
                var c = this.location[a][1];
                var d = this.location[a][2];
                var e = this.location[a][3];
                var f = chars[b];
                var g = chars[c];
                var h = chars[d];
                var i = chars[e];
                if ((f === g) && (f === h) && (f === i) && (f !== 'o')) {
                    result.push(b);
                    result.push(c);
                    result.push(d);
                    result.push(e);
                }
            }
            return result;
        };
        Fire.location = [
            [0, 1, 2, 3],
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [7, 8, 9, 10],
            [8, 9, 10, 11],
            [9, 10, 11, 12],
            [10, 11, 12, 13],
            [14, 15, 16, 17],
            [15, 16, 17, 18],
            [16, 17, 18, 19],
            [17, 18, 19, 20],
            [21, 22, 23, 24],
            [22, 23, 24, 25],
            [23, 24, 25, 26],
            [24, 25, 26, 27],
            [28, 29, 30, 31],
            [29, 30, 31, 32],
            [30, 31, 32, 33],
            [31, 32, 33, 34],
            [35, 36, 37, 38],
            [36, 37, 38, 39],
            [37, 38, 39, 40],
            [38, 39, 40, 41],
            [0, 7, 14, 21],
            [1, 8, 15, 22],
            [2, 9, 16, 23],
            [3, 10, 17, 24],
            [4, 11, 18, 25],
            [5, 12, 19, 26],
            [6, 13, 20, 27],
            [7, 14, 21, 28],
            [8, 15, 22, 29],
            [9, 16, 23, 30],
            [10, 17, 24, 31],
            [11, 18, 25, 32],
            [12, 19, 26, 33],
            [13, 20, 27, 34],
            [14, 21, 28, 35],
            [15, 22, 29, 36],
            [16, 23, 30, 37],
            [17, 24, 31, 38],
            [18, 25, 32, 39],
            [19, 26, 33, 40],
            [20, 27, 34, 41],
            [0, 8, 16, 24],
            [1, 9, 17, 25],
            [2, 10, 18, 26],
            [3, 11, 19, 27],
            [7, 15, 23, 31],
            [8, 16, 24, 32],
            [9, 17, 25, 33],
            [10, 18, 26, 34],
            [14, 22, 30, 38],
            [15, 23, 31, 39],
            [16, 24, 32, 40],
            [17, 25, 33, 41],
            [3, 9, 15, 21],
            [4, 10, 16, 22],
            [5, 11, 17, 23],
            [6, 12, 18, 24],
            [10, 16, 22, 28],
            [11, 17, 23, 29],
            [12, 18, 24, 30],
            [13, 19, 25, 31],
            [17, 23, 29, 35],
            [18, 24, 30, 36],
            [19, 25, 31, 37],
            [20, 26, 32, 38]
        ];
        return Fire;
    })();
    C4.Fire = Fire;
})(C4 || (C4 = {}));
/* Fuel.ts */
var C4;
(function (C4) {
    var Fuel = (function () {
        function Fuel() {
            this.burn = this.octane_3;
        }
        Fuel.prototype.octane = function (cylinder) {
            var toprow = cylinder.toprow;
            var length = toprow.length;
            return length === 0 ? -1 : toprow[Math.floor(length * Math.random())];
        };
        /* 1. Noob 2. Beginner 3. Advanced 4. Expert 5. Master 6. Ninja. Put your AI here */
        Fuel.prototype.octane_1 = function (cylinder) {
            var toprow = cylinder.toprow;
            var length = toprow.length;
            return length === 0 ? -1 : toprow[0];
        };
        Fuel.prototype.octane_2 = function (cylinder) {
            var toprow = cylinder.toprow;
            var length = toprow.length;
            return length === 0 ? -1 : toprow[length - 1];
        };
        Fuel.prototype.octane_3 = function (cylinder) {
            return this.octane(cylinder);
        };
        Fuel.prototype.octane_4 = function (cylinder) {
            return this.octane(cylinder);
        };
        Fuel.prototype.octane_5 = function (cylinder) {
            return this.octane(cylinder);
        };
        Fuel.prototype.octane_6 = function (cylinder) {
            return this.octane(cylinder);
        };
        Fuel.prototype.setFuel = function (fuel) {
            switch (fuel) {
                case 0:
                    this.burn = this.octane_1;
                    break;
                case 1:
                    this.burn = this.octane_2;
                    break;
                case 2:
                    this.burn = this.octane_3;
                    break;
                case 3:
                    this.burn = this.octane_4;
                    break;
                case 4:
                    this.burn = this.octane_5;
                    break;
                case 5:
                    this.burn = this.octane_6;
                    break;
                default:
                    this.burn = this.octane_3;
                    break;
            }
        };
        return Fuel;
    })();
    C4.Fuel = Fuel;
})(C4 || (C4 = {}));
/* Game.ts */
var C4;
(function (C4) {
    var Game = (function () {
        function Game() {
            var _this = this;
            this.controller = new C4.Controller();
            // DOCUMENT
            jQuery(window.document).on('keydown', function (event) {
                switch (event.which) {
                    case 13:
                        _this.controller.swap_jacket();
                        event.preventDefault();
                        break;
                    case 36:
                        _this.controller.garden_previous();
                        event.preventDefault();
                        break;
                    case 35:
                        _this.controller.garden_next();
                        event.preventDefault();
                        break;
                    case 45:
                        _this.controller.shed_previous();
                        event.preventDefault();
                        break;
                    case 46:
                        _this.controller.shed_next();
                        event.preventDefault();
                        break;
                    case 33:
                        _this.controller.jacket_previous();
                        event.preventDefault();
                        break;
                    case 34:
                        _this.controller.jacket_next();
                        event.preventDefault();
                        break;
                    case 27:
                        _this.controller.reset();
                        event.preventDefault();
                        break;
                    case 32:
                        _this.controller.swap_jacket();
                        event.preventDefault();
                        break;
                    case 37:
                        _this.controller.arrow_left();
                        event.preventDefault();
                        break;
                    case 38:
                        _this.controller.arrow_up();
                        event.preventDefault();
                        break;
                    case 39:
                        _this.controller.arrow_right();
                        event.preventDefault();
                        break;
                    case 40:
                        _this.controller.arrow_down();
                        event.preventDefault();
                        break;
                    case 49:
                        _this.controller.setFuel(0);
                        event.preventDefault();
                        break;
                    case 50:
                        _this.controller.setFuel(1);
                        event.preventDefault();
                        break;
                    case 51:
                        _this.controller.setFuel(2);
                        event.preventDefault();
                        break;
                    case 52:
                        _this.controller.setFuel(3);
                        event.preventDefault();
                        break;
                    case 53:
                        _this.controller.setFuel(4);
                        event.preventDefault();
                        break;
                    case 54:
                        _this.controller.setFuel(5);
                        event.preventDefault();
                        break;
                }
                event.stopPropagation();
            });
            jQuery(window.document).on('mousedown', function (event) {
            });
            jQuery(window.document).on('mousemove', function (event) {
                _this.controller.mcGregor_run(event);
            });
            jQuery(window.document).on('wheel', function (event) {
                _this.controller.wheel();
                event.stopPropagation();
            });
            // CAN
            jQuery('.can').on('mousedown', function (event) {
                _this.controller.hop();
            });
            // VEGGIE
            jQuery('.veggie li div').on('mousedown', function (event) {
                _this.controller.veggie_down(event);
            });
            jQuery('.veggie li div').on('mouseenter', function (event) {
                _this.controller.veggie_enter(event);
            });
            jQuery('.veggie li div').on('mouseleave', function (event) {
                _this.controller.veggie_leave(event);
            });
            // VEGGIE
            jQuery('.blackberry li:nth-child(1)').on('mousedown', function (event) {
                _this.controller.shed_previous();
                event.preventDefault();
            });
            jQuery('.blackberry li:nth-child(2)').on('mousedown', function (event) {
                _this.controller.shed_next();
                event.preventDefault();
            });
            jQuery('.blackberry li:nth-child(3)').on('mousedown', function (event) {
                _this.controller.garden_previous();
                event.preventDefault();
            });
            jQuery('.blackberry li:nth-child(4)').on('mousedown', function (event) {
                _this.controller.garden_next();
                event.preventDefault();
            });
            jQuery('.blackberry li:nth-child(5)').on('mousedown', function (event) {
                _this.controller.jacket_previous();
                event.preventDefault();
            });
            jQuery('.blackberry li:nth-child(6)').on('mousedown', function (event) {
                _this.controller.jacket_next();
                event.preventDefault();
            });
            // WALK
            jQuery('.walk').on('mouseenter', function (event) {
                _this.controller.mcGregor_show();
            });
            jQuery('.walk').on('mouseleave', function (event) {
                _this.controller.mcGregor_hide();
            });
            jQuery('.walk li').on('mousedown', function (event) {
                _this.controller.walk_down(event);
            });
            jQuery('.walk li').on('mouseenter', function (event) {
                _this.controller.walk_enter(event);
            });
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
            jQuery('input[name="key"]').on('change', function (event) {
                var key = jQuery('input[name="key"]:checked').val();
                _this.controller.setKey(key);
                document.activeElement.blur();
            });
            //            // FUEL
            //            jQuery('input[name="fuel"] ').on('change', (event: JQueryEventObject) => { 
            //                var fuel: string = jQuery('input[name="fuel"]:checked').val()
            //                this.controller.setFuel(fuel);
            //                (<HTMLElement>document.activeElement).blur()
            //            } )
            // SOUND
            jQuery('input[name="sound"]').on('change', function (event) {
                var sound = jQuery('input[name="sound"]').is(':checked');
                _this.controller.setSound(sound);
            });
        }
        return Game;
    })();
    C4.Game = Game;
})(C4 || (C4 = {}));
/* Garden.ts */
var C4;
(function (C4) {
    var Garden = (function () {
        function Garden() {
            this.element = jQuery('.gate')[0];
            this.index = 0;
            this.list = [
                ['garden_1 ', 'gate_1 '],
                ['garden_2 ', 'gate_2 '],
                ['garden_3 ', 'gate_3 '],
            ];
        }
        Garden.prototype.next = function () {
            this.index += 1;
            this.index = this.index > this.list.length - 1 ? 0 : this.index;
            this.set();
        };
        Garden.prototype.prev = function () {
            this.index -= 1;
            this.index = this.index < 0 ? this.list.length - 1 : this.index;
            this.set();
        };
        Garden.prototype.set = function () {
            this.element.className = 'garden ' + this.list[this.index][0] + 'gate ' + this.list[this.index][1];
        };
        return Garden;
    })();
    C4.Garden = Garden;
})(C4 || (C4 = {}));
/* Gear.ts */
var C4;
(function (C4) {
    var Gear = (function () {
        function Gear() {
            this.current = 0;
            this.high = 0;
            this.low = 0;
        }
        Object.defineProperty(Gear.prototype, "battery", {
            get: function () {
                return new C4.Battery(this.low, this.high);
            },
            enumerable: true,
            configurable: true
        });
        Gear.prototype.down = function () {
            this.setGear(this.current - 1);
        };
        Gear.prototype.setGear = function (current) {
            this.low = this.current;
            this.current = current < 0 ? 6 : current > 6 ? 0 : current;
            this.high = this.current;
            return this.current;
        };
        Gear.prototype.up = function () {
            this.setGear(this.current + 1);
        };
        return Gear;
    })();
    C4.Gear = Gear;
})(C4 || (C4 = {}));
/* Html.ts */
var C4;
(function (C4) {
    var Html = (function () {
        function Html() {
            var connect4 = document.createElement("div");
            //connect4.className = "connect4 dashboard"
            //connect4.className = "dashboard connect4"
            //connect4.className = "field"
            connect4.className = "connect4 shed_1";
            //connect4.className = "dashboard"
            connect4.innerHTML = this.innerHTML;
            document.body.appendChild(connect4);
        }
        Object.defineProperty(Html.prototype, "gate", {
            //        get stats(): string {
            //            return '<div class="stats"></div>'
            //        }
            get: function () {
                //            return '<div class="field"></div>'
                return '<div></div>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "veggie", {
            get: function () {
                return '<ul class="veggie">' + '<li><div></div></li>' + '<li><div></div></li>' + '<li><div></div></li>' + '<li><div></div></li>' + '<li><div></div></li>' + '<li><div></div></li>' + '</ul>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "can", {
            get: function () {
                return '<div class="can"></div>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "mcgregor", {
            get: function () {
                return '<div class="mcgregor"></div>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "innerHTML", {
            get: function () {
                return '' + this.field;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "field", {
            get: function () {
                var result = '';
                result += '<div class="field">';
                result += this.peter;
                result += this.bunny;
                result += this.garden;
                result += this.scarecrow;
                result += this.bird;
                result += this.walk;
                result += this.shoes;
                result += this.blackberry;
                result += this.can;
                result += this.veggie;
                result += '</div>';
                result += this.mcgregor;
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "garden", {
            get: function () {
                var result = '<ul class="garden garden_1 gate gate_1">';
                for (var a = 0; a < 42; a++) {
                    result += '<li></li>';
                }
                result += '</ul>';
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "scarecrow", {
            get: function () {
                var result = '<ul class="scarecrow">';
                for (var a = 0; a < 42; a++) {
                    result += '<li class="jacket"></li>';
                }
                result += '</ul>';
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "peter", {
            get: function () {
                return '<ul class="peter"><li></li></ul>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "bunny", {
            get: function () {
                var result = '<ul class="bunny">';
                for (var a = 0; a < 42; a++) {
                    result += '<li class="jacket"></li>';
                }
                result += '</ul>';
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "shoes", {
            get: function () {
                return '<div class="shoes shoes_u"></div>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "blackberry", {
            get: function () {
                return '<ul class="blackberry">' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '</ul>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "walk", {
            get: function () {
                return '<ul class="walk">' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '<li></li>' + '</ul>';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Html.prototype, "bird", {
            //        get dashboard(): string {
            //            return '<div class="dashboard">' +
            //                   this.key + '<br />' +
            //                   this.mileage + '<br />' +
            //                   this.sound + '<br />' +
            //                   this.help +
            //                   this.reset +
            //                   '</div>'
            //        }
            //        get key(): string {
            //            return 'Eerste zet<br /> ' +
            //                   '<input type="radio" name="key" value="i" />Ik<br />' +
            //                   '<input type="radio" name="key" value="u" />Computer<br />' +
            //                   '<input type="radio" name="key" value="o" checked="checked" />Omstebeurt<br />'
            //        }
            get: function () {
                var result = '<ul class="bird bird_i">';
                for (var a = 0; a < 24; a++) {
                    result += '<li class="bird_h"></li>';
                }
                for (var a = 0; a < 21; a++) {
                    result += '<li class="bird_v"></li>';
                }
                for (var a = 0; a < 12; a++) {
                    result += '<li class="bird_d1"></li>';
                }
                for (var a = 0; a < 12; a++) {
                    result += '<li class="bird_d2"></li>';
                }
                result += '</ul>';
                return result;
            },
            enumerable: true,
            configurable: true
        });
        //        get help(): string { 
        //            return '<textarea class="help"> \
        //Welcome to Connect-4 For The Millions\n\n\n \
        //Available keys: \n\n \
        //\n\n \
        //Arrow Left / Arrow Right: move chip \n\n \
        //Arrow Down:               place chip \n\n \
        //Arrow Up:                 remove chip \n\n \
        //\n\n \
        //Insert / Delete:          change background image \n\n \
        //Home / End:               change board \n\n \
        //Page Up / Page Down:      change chip \n\n \
        //\n\n \
        //Enter:                    toggle chip \n\n \
        //Space:                    toggle dashboard \n\n \
        //Escape:                   new game \n\n \
        //2 0 1 4 m b m u l d e r @ o n l i n e . n l \n\n \
        //</textarea>'
        //        }            
        //        get reset(): string { 
        //            return '<button class="reset">Nieuw</button>'
        //        }            
        //        get sound(): string {
        //            return 'Sound <input type="checkbox" name="sound" checked="checked" /><br />'
        //        }            
        //        get mileage(): string {
        //            return 'De computer speelt<br />' +
        //                   '<input type="radio" name="mileage" value="weak" />Zwak<br />' +
        //                   '<input type="radio" name="mileage" value="average" checked />Gemiddeld<br />' +
        //                   '<input type="radio" name="mileage" value="strong" />Sterk<br />'
        //        }
        Html.prototype.toString = function () {
            console.log(this.innerHTML);
        };
        return Html;
    })();
    C4.Html = Html;
})(C4 || (C4 = {}));
/* Jacket.ts */
var C4;
(function (C4) {
    var Jacket = (function () {
        function Jacket() {
            this.index = 0;
            this.winter = false;
            this.list = [
                ['jacket_1 ', 'jacket_2 '],
                ['jacket_3 ', 'jacket_4 '],
                ['jacket_5 ', 'jacket_6 '],
            ];
        }
        Object.defineProperty(Jacket.prototype, "i", {
            get: function () {
                return this.list[this.index][this.winter ? 1 : 0];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Jacket.prototype, "o", {
            get: function () {
                return 'jacket';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Jacket.prototype, "u", {
            get: function () {
                return this.list[this.index][this.winter ? 0 : 1];
            },
            enumerable: true,
            configurable: true
        });
        Jacket.prototype.next = function () {
            this.index += 1;
            this.index = this.index > this.list.length - 1 ? 0 : this.index;
            //            this.set()
        };
        Jacket.prototype.prev = function () {
            this.index -= 1;
            this.index = this.index < 0 ? this.list.length - 1 : this.index;
            //            this.set()
        };
        Jacket.prototype.seasonsComeAndSeasonsGo = function () {
            this.winter = !this.winter;
        };
        return Jacket;
    })();
    C4.Jacket = Jacket;
})(C4 || (C4 = {}));
/* Key.ts */
var C4;
(function (C4) {
    var Key = (function () {
        function Key() {
            this.i_started = false;
            this.start = this.o_start;
        }
        Object.defineProperty(Key.prototype, "starter", {
            get: function () {
                return this.i_started ? 'i' : 'u';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Key.prototype, "other", {
            get: function () {
                return this.i_started ? 'u' : 'i';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Key.prototype, "i", {
            get: function () {
                return this.i_started;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Key.prototype, "u", {
            get: function () {
                return !this.i_started;
            },
            enumerable: true,
            configurable: true
        });
        Key.prototype.i_start = function () {
            this.i_started = true;
            return this.i_started;
        };
        Key.prototype.o_start = function () {
            this.i_started = !this.i_started;
            return this.i_started;
        };
        Key.prototype.u_start = function () {
            this.i_started = false;
            return this.i_started;
        };
        Key.prototype.setKey = function (key) {
            alert('Key .setKey');
            switch (key) {
                case 'i':
                    this.start = this.i_start;
                    break;
                case 'o':
                    this.start = this.o_start;
                    break;
                case 'u':
                    this.start = this.u_start;
                    break;
                default:
                    this.start = this.o_start;
                    break;
            }
        };
        return Key;
    })();
    C4.Key = Key;
})(C4 || (C4 = {}));
/* McGregor.ts */
var C4;
(function (C4) {
    var McGregor = (function () {
        function McGregor() {
            this.jquery = jQuery('.mcgregor');
        }
        Object.defineProperty(McGregor.prototype, "className", {
            set: function (className) {
                this.jquery[0].className = 'mcgregor ' + className;
            },
            enumerable: true,
            configurable: true
        });
        McGregor.prototype.hide = function () {
            this.jquery.stop().animate({ opacity: 0 }, 'fast');
        };
        McGregor.prototype.run = function (event) {
            this.jquery.css({
                left: event.pageX - 25 + 'px',
                top: event.pageY - 25 + 'px',
            });
        };
        McGregor.prototype.show = function () {
            this.jquery.stop().animate({ opacity: 1 }, 'fast');
        };
        return McGregor;
    })();
    C4.McGregor = McGregor;
})(C4 || (C4 = {}));
/* Model.ts */
var C4;
(function (C4) {
    var Model = (function () {
        //        get your_turn () : boolean    { return this.motor.cylinder.your_turn }
        function Model() {
            this.motor = new C4.Motor();
        }
        Object.defineProperty(Model.prototype, "soot", {
            //get gear     () : number     { return this.motor.gear.index }
            //get bottom   () : number     { return 4                     }
            //get lop      () : number     { return 15                    }
            //get driver   () : string     { return this.motor.cylinder.driver   }
            get: function () {
                return this.motor.cylinder.soot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "spark", {
            get: function () {
                return this.motor.cylinder.peek;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "battery", {
            get: function () {
                return this.motor.gear.battery;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "can_hop", {
            //        get can_dig   () : boolean    { return this.motor.cylinder.can_dig   }
            get: function () {
                return this.motor.cylinder.not_empty;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "i_can", {
            get: function () {
                return this.motor.cylinder.i_can;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "index", {
            get: function () {
                return this.motor.cylinder.index;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "other", {
            get: function () {
                return this.motor.cylinder.other;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "smoke", {
            get: function () {
                return this.motor.cylinder.smoke;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "state", {
            get: function () {
                return this.motor.cylinder.state;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "u_can", {
            get: function () {
                return this.motor.cylinder.u_can;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Model.prototype, "winner", {
            get: function () {
                return this.motor.cylinder.winner;
            },
            enumerable: true,
            configurable: true
        });
        //can_auto()                : boolean { return this.motor.cylinder.can_auto()        }
        //can_start(driver: string) : boolean { return this.motor.can_start(driver)          }
        //can_stop()                : boolean { return this.motor.cylinder.can_stop()        }
        //choke(driver: string)     : boolean { return this.motor.choke(driver)              }
        Model.prototype.auto = function () {
            this.motor.auto();
        };
        Model.prototype.left = function () {
            this.motor.gear.down();
        };
        Model.prototype.pop = function () {
            return this.motor.cylinder.pop();
        };
        Model.prototype.reset = function () {
            this.motor.cylinder.spark.length = 0;
        };
        Model.prototype.right = function () {
            this.motor.gear.up();
        };
        Model.prototype.start = function (driver) {
            return this.motor.start(driver);
        };
        Model.prototype.setFuel = function (fuel) {
            this.motor.fuel.setFuel(fuel);
        };
        Model.prototype.setGear = function (gear) {
            return this.motor.gear.setGear(gear);
        };
        Model.prototype.setKey = function (key) {
            this.motor.cylinder.key.setKey(key);
        };
        Model.prototype.stop = function () {
            this.motor.stop();
        };
        return Model;
    })();
    C4.Model = Model;
})(C4 || (C4 = {}));
/* Motor.ts */
var C4;
(function (C4) {
    var Motor = (function () {
        function Motor() {
            this.cylinder = new C4.Cylinder();
            this.fuel = new C4.Fuel();
            this.gear = new C4.Gear();
        }
        Object.defineProperty(Motor.prototype, "index", {
            get: function () {
                return this.cylinder.getIndex(this.gear.current);
            },
            enumerable: true,
            configurable: true
        });
        Motor.prototype.auto = function () {
            this.gear.setGear(this.fuel.burn(this.cylinder));
        };
        //        choke(driver: string): boolean { 
        //            return this.cylinder.choke(driver, this.gear.current)
        //        }
        Motor.prototype.start = function (driver) {
            return this.cylinder.start(driver, this.gear.current);
        };
        //        can_start(driver: string): boolean { 
        //            return this.cylinder.can_start(driver, this.gear.current) 
        //        }
        Motor.prototype.stop = function () {
        };
        return Motor;
    })();
    C4.Motor = Motor;
})(C4 || (C4 = {}));
/* Peter.ts */
var C4;
(function (C4) {
    var Peter = (function () {
        function Peter() {
            this.jquery = jQuery('.peter li');
        }
        Object.defineProperty(Peter.prototype, "className", {
            set: function (className) {
                this.jquery[0].className = className;
            },
            enumerable: true,
            configurable: true
        });
        //        run(battery: C4.Battery) {
        //            this.jquery.stop ( true,  true  ).animate ( {   
        //                left     : battery.stop  
        //            }, {
        //                duration : battery.speed 
        //        } ) }
        Peter.prototype.show = function (className) {
            this.jquery[0].className = className;
        };
        return Peter;
    })();
    C4.Peter = Peter;
})(C4 || (C4 = {}));
/* Scarecrow.ts */
var C4;
(function (C4) {
    var Scarecrow = (function () {
        function Scarecrow() {
            this.coat = new C4.Coat();
            this.shoes = new C4.Shoes();
        }
        Scarecrow.prototype.reset = function () {
            this.coat.reset();
            this.shoes.reset();
        };
        Scarecrow.prototype.show = function (model, jacket) {
            this.coat.show(model, jacket);
            this.shoes.show(model.winner);
        };
        return Scarecrow;
    })();
    C4.Scarecrow = Scarecrow;
})(C4 || (C4 = {}));
/* Shed.ts */
var C4;
(function (C4) {
    var Shed = (function () {
        function Shed() {
            //        shed: HTMLElement = jQuery('.field') [0]
            this.shed = jQuery('.connect4')[0];
            this.list = [
                'shed_1 ',
                'shed_2 ',
                'shed_3 ',
            ];
            this.index = 0;
        }
        Shed.prototype.next = function () {
            this.index += 1;
            this.index = this.index > this.list.length - 1 ? 0 : this.index;
            this.shed.className = 'connect4 ' + this.list[this.index];
        };
        Shed.prototype.prev = function () {
            this.index -= 1;
            this.index = this.index < 0 ? this.list.length - 1 : this.index;
            this.shed.className = 'connect4 ' + this.list[this.index];
        };
        return Shed;
    })();
    C4.Shed = Shed;
})(C4 || (C4 = {}));
/* Shoes.ts */
var C4;
(function (C4) {
    var Shoes = (function () {
        function Shoes() {
            this.jquery = jQuery('.shoes');
        }
        Shoes.prototype.reset = function () {
            this.jquery.css({ opacity: '' });
        };
        Shoes.prototype.show = function (winner) {
            this.jquery[0].className = 'shoes shoes_' + winner;
            //            this.jquery.css( { opacity: 0 } )
            this.jquery.stop().animate({ opacity: 1 }, 'slow');
        };
        return Shoes;
    })();
    C4.Shoes = Shoes;
})(C4 || (C4 = {}));
/* Sound.ts */
var C4;
(function (C4) {
    var Sound = (function () {
        function Sound() {
            this.sound = true;
        }
        Sound.prototype.applause = function () {
            this.sound ? new Audio('applause.mp3').play() : void 0;
        };
        Sound.prototype.pow = function () {
            this.sound ? new Audio('pow.mp3').play() : void 0;
        };
        Sound.prototype.cork = function () {
            this.sound ? new Audio('cork.mp3').play() : void 0;
        };
        Sound.prototype.drip = function () {
            this.sound ? new Audio('drip.mp3').play() : void 0;
        };
        Sound.prototype.sheep = function () {
            this.sound ? new Audio('sheep.mp3').play() : void 0;
        };
        Sound.prototype.tick = function () {
            this.sound ? new Audio('tick.mp3').play() : void 0;
        };
        Sound.prototype.whip = function () {
            this.sound ? new Audio('whip.mp3').play() : void 0;
        };
        Sound.prototype.setSound = function (sound) {
            this.sound = sound;
        };
        return Sound;
    })();
    C4.Sound = Sound;
})(C4 || (C4 = {}));
/* Spark.ts */
var C4;
(function (C4) {
    var Spark = (function () {
        function Spark(driver, index) {
            this.driver = driver;
            this.index = index;
        }
        return Spark;
    })();
    C4.Spark = Spark;
})(C4 || (C4 = {}));
/* Stage.ts */
var C4;
(function (C4) {
    var Stage = (function () {
        function Stage() {
            this.blackberry = new C4.Blackberry();
            this.can = new C4.Can();
            this.garden = new C4.Garden();
            this.shed = new C4.Shed();
            this.veggies = new C4.Veggies();
            this.walk = new C4.Walk();
        }
        Stage.prototype.reset = function () {
            this.veggies.reset();
        };
        return Stage;
    })();
    C4.Stage = Stage;
})(C4 || (C4 = {}));
/* Veggie.ts */
var C4;
(function (C4) {
    var Veggie = (function () {
        function Veggie(jquery) {
            this.jquery = jquery;
        }
        Veggie.prototype.hide = function () {
            this.jquery.stop().animate({ opacity: 0 }, 'slow');
        };
        Veggie.prototype.reset = function () {
            this.jquery.stop().animate({ opacity: 0 }, 'slow');
        };
        Veggie.prototype.show = function () {
            this.jquery.stop().animate({ opacity: 1 }, 'fast');
        };
        return Veggie;
    })();
    C4.Veggie = Veggie;
})(C4 || (C4 = {}));
/* Veggies.ts */
var C4;
(function (C4) {
    var Veggies = (function () {
        function Veggies() {
            this.jquery = jQuery('.veggie li div');
            this.veggie = [];
            this.index = 2;
            for (var a = 0; a < this.jquery.length; a++) {
                this.veggie.push(new C4.Veggie(this.jquery.eq(a)));
            }
            this.veggie[0].jquery[0].title = 'Level 1\n---\nNoob';
            this.veggie[1].jquery[0].title = 'Level 2\n---\nBeginner';
            this.veggie[2].jquery[0].title = 'Level 3\n---\nAdvanced';
            this.veggie[3].jquery[0].title = 'Level 4\n---\nExpert';
            this.veggie[4].jquery[0].title = 'Level 5\n---\nMaster';
            this.veggie[5].jquery[0].title = 'Level 6\n---\nNinja';
        }
        Veggies.prototype.down = function (event) {
            this.index = this.get_veggie(event);
            this.reset();
        };
        Veggies.prototype.enter = function (event) {
            var a = this.get_veggie(event);
            this.veggie.forEach(function (veggie, index) {
                index <= a ? veggie.show() : veggie.hide();
            });
        };
        Veggies.prototype.get_veggie = function (event) {
            return this.jquery.index(event.currentTarget);
        };
        Veggies.prototype.pick = function (index) {
            this.index = index;
            this.reset();
        };
        Veggies.prototype.reset = function () {
            var _this = this;
            this.veggie.forEach(function (veggie, index) {
                index <= _this.index ? veggie.show() : veggie.hide();
            });
        };
        Veggies.prototype.leave = function (event) {
            this.reset();
        };
        return Veggies;
    })();
    C4.Veggies = Veggies;
})(C4 || (C4 = {}));
/* View.ts */
var C4;
(function (C4) {
    var View = (function () {
        function View() {
            this.actor = new C4.Actor();
            this.stage = new C4.Stage();
        }
        Object.defineProperty(View.prototype, "i", {
            get: function () {
                return this.actor.jacket.i;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "o", {
            get: function () {
                return this.actor.jacket.o;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "u", {
            get: function () {
                return this.actor.jacket.u;
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.getBunny = function (index) {
            return this.actor.bunnies.bunny[index];
        };
        View.prototype.processEvent = function (event) {
            return this.stage.walk.processEvent(event);
        };
        View.prototype.show = function (model) {
            this.actor.show(model);
        };
        View.prototype.reset = function () {
            this.actor.reset();
            this.stage.reset();
        };
        return View;
    })();
    C4.View = View;
})(C4 || (C4 = {}));
/* Walk.ts */
var C4;
(function (C4) {
    var Walk = (function () {
        function Walk() {
            this.walk = jQuery('.walk li');
        }
        Walk.prototype.processEvent = function (event) {
            return this.walk.index(event.currentTarget);
        };
        return Walk;
    })();
    C4.Walk = Walk;
})(C4 || (C4 = {}));
/* main.ts */
var C4;
(function (C4) {
    new C4.Html();
    new C4.Game();
})(C4 || (C4 = {}));
