/**
 *
 */
export class stringHelper {
	public static replaceAll(value: string): string {
		// TODO
		return value
	}
	/**
	 * 判断当前值是否是null,undefined,empty字符串
	 */
	public static isNullUndefinedEmptyString(value: any): boolean {
		if (value == undefined) return true
		return value === ''
	}

	/**
	 * 判断当前值不是null,undefined,empty字符串
	 */
	public static isNotNullUndefinedEmptyString(value: any): boolean {
		return this.isNullUndefinedEmptyString(value) == false
	}

	/**
	 * 判断当前值是否是null,undefined,empty字符串
	 */
	public static isNullUndefinedObject(value: any): boolean {
		return value == undefined
	}

	/**
	 * 判断当前值不是null,undefined
	 */
	public static isNotNullUndefinedObject(value: any) {
		return this.isNullUndefinedObject(value) == false
	}

	public static isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
		return typeof obj === 'undefined' || obj === null
	}

	/**
	 *
	 * @param req webReq
	 */
	public static getToken(req: any): string {
		if (req == undefined) throw new Error('req对象不能为空')
		if (req.headers == undefined) throw new Error('headers对象不能为空')

		return req.headers['x-token']
	}
}
