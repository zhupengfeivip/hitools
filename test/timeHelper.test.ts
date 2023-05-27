// import test, { describe, it } from 'node:test'
import { timeHelper } from '../src/timeHelper'

// describe('add', () => {
//   it('dateFormat', () => {
//     const val = timeHelper.dateFormat(new Date(),'y-M-d H:m:s');
//     console.log(val)
//     const expValue = '123456'
//     expect(val).toEqual(expValue)
//   });
// });
function getLongTimeTest() {
	const val = timeHelper.getLongTime(new Date())
	console.log(val)
}

getLongTimeTest()
