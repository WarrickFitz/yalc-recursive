import { Buffer } from "buffer";
let y = (num1, num2, num3) => {
    return num1 + num2;
};
export function add3(num1, num2, num3) {
    var a = [1, 2, 3];
    var buffer = Buffer.from(a);
    return y(num1, num2, num3);
}
export { Buffer } from "buffer";
