/**
 *
 */
export class listHelper {
	/**
	 *
	 * @param list
	 * @param options
	 */
	public static treeify(list: any[], options: { idProperty: string; parentIdProp: string; childrenProp: string }): any[] {
		const idProperty = options.idProperty || 'id'
		const parentIdProp = options.parentIdProp || 'parentId'
		const childrenProp = options.childrenProp || 'children'

		function walk(list: any[], rootNodes: any[], parent: number, level: number) {
			list.forEach(function (node) {
				if (node[parentIdProp] == parent) {
					node.level = level

					if (!Array.isArray(node[childrenProp])) node[childrenProp] = []

					walk(list, node[childrenProp], node[idProperty], level + 1)

					rootNodes.push({ code: node.code, name: node.name, children: node.children })
				} else if (node[idProperty] == parent) {
					return // Cannot add an item to itself
				}
			})
		}

		// const roots = []
		// TODO
		// walk(list, roots, 0, 0)
		// return roots
		return []
	}
}
