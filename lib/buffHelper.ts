/**
 * buff处理类
 */
export class buffHelper {
	/**
	 * BCD码字符串转换为byte数组，
	 * 如010203转换为<Buffer 01 02 03>
	 * 如A1B2C3转换为<Buffer a1 b2 c3>
	 * @param str 长度必须是偶数
	 * @returns
	 */
	public static str2bcd(str: string): Buffer {
		// 如果判断长度不是偶数，前面补0
		if (str.length % 2 != 0) str = '0' + str

		let retBuffer = Buffer.alloc(str.length / 2)
		for (let i = 0; i < str.length / 2; i++) {
			let temp = str.substring(i * 2, i * 2 + 2)
			retBuffer[i] = parseInt(temp, 16)
		}
		return retBuffer
	}

	/**
	 * byte数组转换为BCD码字符串，如0x22,0x04,0x11转换为220411
	 * @param bcdBuff
	 * @returns
	 */
	public static bcdBuff2Str(bcdBuff: Buffer): string {
		let bcd = ''
		for (const byte of bcdBuff) {
			bcd += ((byte >> 4) & 0x0f).toString() + (byte & 0x0f).toString()
		}
		return bcd
	}

	/**
	 * 将byte转换为二进制字符串，如 0x0A 转换为 0000 1010
	 * @returns
	 * @param byte
	 */
	public static byte2BinStr(byte: number): string {
		//TODO 这里暂时只考虑一个byte大小的，因为大多数情况下都是一个字节一个字节处理的
		let strOut = '00000000' + byte.toString(2)
		return strOut.substring(strOut.length - 8, strOut.length)
	}

	/**
	 * 将byte转换为bool列表，如 0x01 转换为[1,0,0,0,0,0,0,0]，按位转换index = 0 对应bit0
	 * @returns
	 * @param byte
	 */
	public static byte2bitList(byte: number): number[] {
		let strOut = this.byte2BinStr(byte)
		let arrBool: number[] = []
		for (let i = 0; i < strOut.length; i++) arrBool.push(parseInt(strOut[strOut.length - 1 - i]))

		return arrBool
	}

	/**
	 * 将byte转换为bool列表，如 0x01 转换为[true,false,false,false,false,false,false,false]，按位转换index = 0 对应bit0
	 * @returns
	 * @param byte
	 */
	public static byte2BoolList(byte: number): boolean[] {
		let strOut = this.byte2BinStr(byte)
		let arrBool = []
		for (let i = 0; i < strOut.length; i++) {
			arrBool.push(strOut[strOut.length - 1 - i] == '1')
		}

		return arrBool
	}

	/**
	 * 字符串转换为ASC码，如123ABCabc转换为<Buffer 31 32 33 41 42 43 61 62 63>
	 * @param str
	 * @returns
	 */
	public static str2AsciiBuff(str: string): Buffer {
		if (str == undefined || str.length == 0) return Buffer.alloc(0)

		let retBuffer = Buffer.alloc(str.length)
		for (let i = 0; i < str.length; i++) {
			retBuffer[i] = str.charCodeAt(i)
		}
		return retBuffer
	}

	/**
	 * 将4字节32位类型的数字转换为Buffer，如1000转换为<Buffer 00 00 03 e8>
	 * @param val
	 * @returns
	 */
	public static Int32BEToBuf(val: number) {
		const buf = Buffer.alloc(4)
		// 大端在前模式
		buf.writeInt32BE(val, 0)
		return buf
	}

	/**
	 * 将4字节32位类型的数字转换为Buffer，如1000转换为<Buffer e8 03 00 00>
	 * @param val
	 * @returns
	 */
	public static Int32LEToBuf(val: number) {
		const buf = Buffer.alloc(4)
		// 大端在前模式
		buf.writeInt32LE(val, 0)
		return buf
	}
}
