/**
 *
 */
export class systemHelper {
	/**
	 * 当前系统是否debug模式
	 */
	public static isDebug(): boolean {
		// 无环境变量时，默认为debug模式
		if (process.env.NODE_ENV == undefined) return true

		return process.env.NODE_ENV === 'production'
  }
}
