/* Fire.ts */

module C4 {
    export class Fire {
        static location : number [][] = [
            [  0,  1,  2,  3 ],
            [  1,  2,  3,  4 ],
            [  2,  3,  4,  5 ],
            [  3,  4,  5,  6 ],
            [  7,  8,  9, 10 ],
            [  8,  9, 10, 11 ],
            [  9, 10, 11, 12 ],
            [ 10, 11, 12, 13 ],
            [ 14, 15, 16, 17 ],
            [ 15, 16, 17, 18 ],
            [ 16, 17, 18, 19 ],
            [ 17, 18, 19, 20 ],
            [ 21, 22, 23, 24 ],
            [ 22, 23, 24, 25 ],
            [ 23, 24, 25, 26 ],
            [ 24, 25, 26, 27 ],
            [ 28, 29, 30, 31 ],
            [ 29, 30, 31, 32 ],
            [ 30, 31, 32, 33 ],
            [ 31, 32, 33, 34 ],
            [ 35, 36, 37, 38 ],
            [ 36, 37, 38, 39 ],
            [ 37, 38, 39, 40 ],
            [ 38, 39, 40, 41 ],
            [  0,  7, 14, 21 ],
            [  1,  8, 15, 22 ],
            [  2,  9, 16, 23 ],
            [  3, 10, 17, 24 ],
            [  4, 11, 18, 25 ],
            [  5, 12, 19, 26 ],
            [  6, 13, 20, 27 ],
            [  7, 14, 21, 28 ],
            [  8, 15, 22, 29 ],
            [  9, 16, 23, 30 ],
            [ 10, 17, 24, 31 ],
            [ 11, 18, 25, 32 ],
            [ 12, 19, 26, 33 ],
            [ 13, 20, 27, 34 ],
            [ 14, 21, 28, 35 ],
            [ 15, 22, 29, 36 ],
            [ 16, 23, 30, 37 ],
            [ 17, 24, 31, 38 ],
            [ 18, 25, 32, 39 ],
            [ 19, 26, 33, 40 ],
            [ 20, 27, 34, 41 ],
            [  0,  8, 16, 24 ],
            [  1,  9, 17, 25 ],
            [  2, 10, 18, 26 ],
            [  3, 11, 19, 27 ],
            [  7, 15, 23, 31 ],
            [  8, 16, 24, 32 ],
            [  9, 17, 25, 33 ],
            [ 10, 18, 26, 34 ],
            [ 14, 22, 30, 38 ],
            [ 15, 23, 31, 39 ],
            [ 16, 24, 32, 40 ],
            [ 17, 25, 33, 41 ],
            [  3,  9, 15, 21 ],
            [  4, 10, 16, 22 ],
            [  5, 11, 17, 23 ],
            [  6, 12, 18, 24 ],
            [ 10, 16, 22, 28 ],
            [ 11, 17, 23, 29 ],
            [ 12, 18, 24, 30 ],
            [ 13, 19, 25, 31 ],
            [ 17, 23, 29, 35 ],
            [ 18, 24, 30, 36 ],
            [ 19, 25, 31, 37 ],
            [ 20, 26, 32, 38 ]
        ]
        static smoke(chars: string []): number [] {
            var result: number[] = []
            for(var a = 0; a < this.location.length; a ++) {
                var b: number = this.location[ a ][ 0 ]
                var c: number = this.location[ a ][ 1 ]
                var d: number = this.location[ a ][ 2 ]
                var e: number = this.location[ a ][ 3 ]
                var f: string = chars[ b ]
                var g: string = chars[ c ]
                var h: string = chars[ d ]
                var i: string = chars[ e ]
                if( (f === g) && (f === h) && (f === i) && (f !== 'o') )  {
                    result.push(a)
                }
            }
            return result
        }
        static soot(chars: string []): number [] {
            var result: number[] = []
            for(var a = 0; a < this.location.length; a ++) {
                var b: number = this.location[ a ][ 0 ]
                var c: number = this.location[ a ][ 1 ]
                var d: number = this.location[ a ][ 2 ]
                var e: number = this.location[ a ][ 3 ]
                var f: string = chars[ b ]
                var g: string = chars[ c ]
                var h: string = chars[ d ]
                var i: string = chars[ e ]
                if( (f === g) && (f === h) && (f === i) && (f !== 'o') )  {
                    result.push(b)
                    result.push(c)
                    result.push(d)
                    result.push(e)
                }
            }
            return result
        }
    }
}


