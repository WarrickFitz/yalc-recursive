export { add3, Buffer } from "./add3";
import { package_b_add2 } from "package-b";
export function add2(num1, num2) {
    return package_b_add2(num1, num2);
}
