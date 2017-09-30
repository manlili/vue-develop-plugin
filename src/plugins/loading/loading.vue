<template>
    <div class="loading-wrap">
    	<h4>组件一:loading组件展示</h4>
        <div class="loading-cont">
        	Loading...
        </div>
    </div>
</template>

<script>
//	控制2秒后消失
	setTimeout(function () {
		document.querySelector('.loading-cont').setAttribute('style', 'display: none')
	}, 2000)
</script>

<style>
	.loading-cont {
		width: 100px;
		height: 100px;
		line-height: 100px;
		background-color: rgba(0, 0, 0, .5);
		border-radius: 5px;
		padding: 5px;
		text-align: center;
		color: #fff;
		margin: 0 auto;
	}
</style>