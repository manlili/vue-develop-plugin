<!--使用方法1创建alert插件-->
<!--<template>

</template>-->

<!--使用方法2创建numberFilter插件-->
<template>
	<div id="app">
		{{num | number}}
	</div>
</template>
<script>
	export default {
		data () {
			return {
				num: 7   //将这行注释掉将发现页面显示的是3,是因为我在doubleNumber插件里面定义了这个变量
			}
		}
	}
</script>

<!--使用方法3创建ubt插件-->
<!--<template>
	<div id="app">
		<button @click="sendUbt">点击我发送ubt,注意观察console</button>
	</div>
</template>-->

<!--使用方法4创建doubleNumber 插件-->
<!--<template>
	<div id="app">
		<div>
			{{num}}
		</div>
		<button @click="double">点击我数字加倍</button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				num: 1   //将这行注释掉将发现页面显示的是3,是因为我在doubleNumber插件里面定义了这个变量
			}
		},
		methods: {
			double () {
				this.num = this.doubleNumber(this.num)
			}
		}
	}
</script>-->

<!--使用方法5创建loading 插件-->
<!--<template>
  <div id="app">
    <Loading></Loading>
  </div>
</template>-->