const buffHelper = require('../src/buffHelper')
test('add', () => {
	const buffer = Buffer.from([0x12, 0x34, 0x56])
	const bcd = buffHelper.bcdBuff2Str(buffer) // "123456"
	const expValue = '123456'
	expect(bcd).toEqual(expValue)
})
