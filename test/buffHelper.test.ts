import { buffHelper } from '../lib/buffHelper'
import { describe, expect, test } from '@jest/globals'

describe('buffHelper', () => {
	test('case1', () => {
		const ourResult = true
		const buffer = Buffer.from([0x12, 0x34, 0x56])
		const bcd = buffHelper.bcdBuff2Str(buffer) // "123456"
		console.log(bcd)
		expect(bcd).toBe('123456')
	})

	test('case2', () => {
		const ourResult = true
		const buffer = Buffer.from([0xa0, 0x34, 0x56])
		const bcd = buffHelper.bcdBuff2Str(buffer) // "123456"
		console.log(bcd)
	})

	test('hexBuff2Str', () => {
		const ourResult = true
		const buffer = Buffer.from([0xff, 0x34, 0x56])
		const bcd = buffHelper.hexBuff2Str(buffer) // "123456"
		console.log(bcd)
	})
})
