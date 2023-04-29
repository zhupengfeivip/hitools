import test, {describe, it} from "node:test";
import {timeHelper} from "../src/timeHelper";

// describe('add', () => {
//   it('dateFormat', () => {
//     const val = timeHelper.dateFormat(new Date(),'y-M-d H:m:s');
//     console.log(val)
//     const expValue = '123456'
//     expect(val).toEqual(expValue)
//   });
// });
const val = timeHelper.dateFormat(new Date(),'YY-m-d H:M:S');
console.log(val)
