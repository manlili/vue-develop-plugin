import loadingComponent from './loading.vue'

const loading = {
	install (Vue, option) {
		Vue.component('Loading', loadingComponent)
	}
}
export default loading