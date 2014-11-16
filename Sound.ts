/* Sound.ts */

module C4 {
    export class Sound {
        sound : boolean = true
        applause() { this.sound ? new Audio('applause.mp3').play() : void 0 }
        pow()      { this.sound ? new Audio('pow.mp3')     .play() : void 0 }
        cork()     { this.sound ? new Audio('cork.mp3')    .play() : void 0 }
        drip()     { this.sound ? new Audio('drip.mp3')    .play() : void 0 }
        sheep()    { this.sound ? new Audio('sheep.mp3')   .play() : void 0 }
        tick()     { this.sound ? new Audio('tick.mp3')    .play() : void 0 }
        whip()     { this.sound ? new Audio('whip.mp3')    .play() : void 0 }
        setSound(sound: boolean) {
            this.sound = sound
        }
} }



