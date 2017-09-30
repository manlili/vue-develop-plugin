const sendUbt = {
	install (Vue, options) {
		Vue.mixin ({
			methods: {
				sendUbt: function () {
					console.log('ubt has sended')
				}
			}
		})
	}
}

export default sendUbt
