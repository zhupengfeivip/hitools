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
		const year = date.getFullYear()
		let mon = date.getMonth() + 1

		let strMon: string = mon.toString()
		if (mon < 10) strMon = '0' + mon.toString()

		const day = date.getDate()
		let strDay: string = day.toString()
		if (day < 10) strDay = '0' + strDay

		const hour = date.getHours()
		let strHour: string = hour.toString()
		if (hour < 10) strHour = '0' + strHour

		const min = date.getMinutes()
		let strMin: string = min.toString()
		if (min < 10) strMin = '0' + strMin

		const sec = date.getSeconds()
		let strSec: string = sec.toString()
		if (sec < 10) strSec = '0' + strSec
		return `${year}-${strMon}-${strDay} ${strHour}:${strMin}:${strSec}`
	}
}
