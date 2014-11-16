/* View.ts */

module C4 {
    export class View {
        actor : C4.Actor = new C4.Actor()
        stage : C4.Stage = new C4.Stage()
        constructor() {
        } 
        get i(): string { return this.actor.jacket.i }
        get o(): string { return this.actor.jacket.o }
        get u(): string { return this.actor.jacket.u }
        getBunny(index: number): C4.Bunny {
            return this.actor.bunnies.bunny[index] 
        }
        processEvent(event: JQueryEventObject): number { 
            return this.stage.walk.processEvent(event)
        }
        show(model: C4.Model) {
            this.actor.show(model)
        }
        reset() {
            this.actor.reset()
            this.stage.reset()
        }
    } 
}


