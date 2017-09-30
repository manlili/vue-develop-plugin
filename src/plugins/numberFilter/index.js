const numberFilter = {
	install(Vue, options) {
		Vue.filter('number', function (val) {
			if (val < 10) {
				return '0' + val
			}else {
				return val
			}
		})
	}
}

export default numberFilter