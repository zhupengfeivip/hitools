import { buffHelper } from '../lib/buffHelper'

function bcdBuff2Str() {
	const buffer = Buffer.from([0x12, 0x34, 0x56])
	const bcd = buffHelper.bcdBuff2Str(buffer) // "123456"
	console.log(bcd)
}
// bcdBuff2Str()
function str2bcd() {
	const text = 'A1B2C3'
	const bcd = buffHelper.str2bcd(text) // "123456"
	console.log(bcd)
}
str2bcd()
