/**
 *
 */
export class ObjectHelper {
	/**
	 * 用源对象中的值覆盖目标对象中的值，保留目标对象所有属性
	 * 源对象有的，目标对象没有的，不输出
	 * 源对象没有的，目标对象有的，输出保留目标对象原有值
	 * 源对象有的，目标对象也有的，用源对象值覆盖目标对象值
	 */
	public static copy(source: any, target: any): void {
		// 遍历 B 对象的属性，如果在 A 对象中存在同名属性，则以 B 对象的值覆盖 A 对象中的值
		Object.keys(target).forEach(key => {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key]
			}
		})
	}
}
