/**
 *
 */
export class timeHelper {
	/**
	 * 日期格式化
	 * @param date
	 * @param fmt
	 * @returns
	 * @example timeHelper.dateFormat(new Date(),'YY-m-d H:M:S'); 输出：2023-4-29 0:30:58
	 *
	 */
	public static dateFormat(date: Date, fmt: string) {
		let ret
		const opt: any = {
			'Y+': date.getFullYear().toString(), // 年
			'm+': (date.getMonth() + 1).toString(), // 月
			'd+': date.getDate().toString(), // 日
			'H+': date.getHours().toString(), // 时
			'M+': date.getMinutes().toString(), // 分
			'S+': date.getSeconds().toString() // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
		}
		for (let k in opt) {
			ret = new RegExp('(' + k + ')').exec(fmt)
			if (ret) {
				fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
			}
		}
		return fmt
	}

	/**
	 *
	 * @param date
	 */
	public static getLongTime(date?: Date) {
		if (date == undefined) date = new Date()
		const year = date.getFullYear() // 获取年份
		const month = String(date.getMonth() + 1).padStart(2, '0') // 获取月份，需要补零
		const day = String(date.getDate()).padStart(2, '0') // 获取日期，需要补零
		const hour = String(date.getHours()).padStart(2, '0') // 获取小时，需要补零
		const minute = String(date.getMinutes()).padStart(2, '0') // 获取分钟，需要补零
		const second = String(date.getSeconds()).padStart(2, '0') // 获取秒钟，需要补零
		return `${year}-${month}-${day} ${hour}:${minute}:${second}`
	}
}
