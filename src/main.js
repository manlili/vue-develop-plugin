import Vue from 'vue'
import App from './App.vue'

//使用方法3创建sendUbt组件
import sendUbt from './components/sendUbt'
Vue.use (sendUbt)

//使用方法1创建alert插件
//import alert from './components/alert'
//Vue.use(alert)
////注意这里是alert使用的方式,因为alert是Vue全局方法
//Vue.alert()   

//使用方法4创建doubleNumber 插件
//import doubleNumber from './components/doubleNumber'
//Vue.use(doubleNumber)

//使用方法5创建loading 插件
//import Loading from './components/loading'
//Vue.use(Loading)

new Vue({
  el: '#app',
  render: h => h(App)
})
