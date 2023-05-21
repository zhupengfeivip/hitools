import test, { describe, it } from 'node:test'
import { ObjectHelper } from '../src/objectHelper'

// 示例 A 对象
const a = {
	name: 'aaaaa',
	age: 30,
	gender: 'male'
}

// 示例 B 对象，与示例 A 具有 name、age 两个交集属性
const b = {
	name: 'Tom',
	age: 40,
	address: 'China'
}
ObjectHelper.copy(a, b) // "123456"
console.log(b)
