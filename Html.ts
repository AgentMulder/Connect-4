/* Html.ts */

module C4 {
    export class Html {
        constructor() {
            var connect4 = document.createElement("div")
            //connect4.className = "connect4 dashboard"
            //connect4.className = "dashboard connect4"
            //connect4.className = "field"
            connect4.className = "connect4 shed_1"
            //connect4.className = "dashboard"
            connect4.innerHTML = this.innerHTML
            document.body.appendChild(connect4)
        }
//        get stats(): string {
//            return '<div class="stats"></div>'
//        }
        get gate(): string { 
//            return '<div class="field"></div>'
            return '<div></div>'
        }            
        get veggie(): string { 
            return '<ul class="veggie">'   +
                       '<li><div></div></li>' +
                       '<li><div></div></li>' +
                       '<li><div></div></li>' +
                       '<li><div></div></li>' +
                       '<li><div></div></li>' +
                       '<li><div></div></li>' +
                   '</ul>'
        }
        get can(): string { 
            return '<div class="can"></div>'
        }            
        get mcgregor(): string { 
            return '<div class="mcgregor"></div>'
        }            
        get innerHTML(): string {
            return '' +           
//                   '<h3 class="millions">Connect 4</h3>' +
//                   '<h3 class="millions">For Happy</h3>' +
//                   this.dashboard +
                   this.field
        }
        get field(): string { 
            var result = ''
            result += '<div class="field">'
            result += this.peter
            result += this.bunny
            result += this.garden
            result += this.scarecrow
            result += this.bird
            result += this.walk
            result += this.shoes
            result += this.blackberry
            result += this.can
            result += this.veggie
            result += '</div>'
            result += this.mcgregor
            return result
        }
        get garden(): string { 
            var result = '<ul class="garden garden_1 gate gate_1">'
            for(var a = 0; a < 42; a ++) {
                result += '<li></li>'
            }
            result += '</ul>'
            return result
        }
        get scarecrow(): string { 
            var result = '<ul class="scarecrow">'
            for(var a = 0; a < 42; a ++) {
                result += '<li class="jacket"></li>'
//                result += '<li></li>'
            }
            result += '</ul>'
            return result
        }
        get peter(): string {
            return '<ul class="peter"><li></li></ul>' 
        }
        get bunny(): string {
            var result = '<ul class="bunny">'
            for(var a = 0; a < 42; a ++) {
                result += '<li class="jacket"></li>'
            }
            result += '</ul>'
            return result
        }
        get shoes(): string {
            return '<div class="shoes shoes_u"></div>' 
        }
        get blackberry(): string {
            return '<ul class="blackberry">' +
                       '<li></li>'       +
                       '<li></li>'       +
                       '<li></li>'       +
                       '<li></li>'       +
                       '<li></li>'       +
                       '<li></li>'       +
                    
                   '</ul>'
        }
        get walk(): string { 
            return '<ul class="walk">' +
                       '<li></li>'     +
                       '<li></li>'     +
                       '<li></li>'     +
                       '<li></li>'     +
                       '<li></li>'     +
                       '<li></li>'     +
                       '<li></li>'     +
                   '</ul>'
        }
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
        get bird(): string { 
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
        }
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
        toString() {
            console.log(this.innerHTML)
        }
    }
}
