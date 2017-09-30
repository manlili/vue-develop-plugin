const alert = {
	install (Vue, options) {
		Vue.alert = function () {
			window.alert('这是全局方法alert')
		}
	}
}

export default alert