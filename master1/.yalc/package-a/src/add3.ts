import {Buffer} from "buffer"

let y = (num1: number, num2: number, num3: number) => {
    return num1 + num2
}

export function add3(num1: number, num2: number, num3: number) : number {
    var a: any = [1,2,3]
    var buffer = Buffer.from(a)
 
    return y(num1, num2, num3)
}

export {Buffer} from "buffer"