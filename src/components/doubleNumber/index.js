const doubleNumber = {
	install (Vue, options) {
		Vue.prototype.doubleNumber = function (val) {
			if (typeof val === 'number') {
				return val*2
			}else {
				return Number(val) * 2
			}
		}
	}
}
