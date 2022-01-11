<script>
	import { t } from '$lib/translations';
	import DateTimer from '../components/DateTimer.svelte';
</script>

<svelte:head>
	<title>{$t("common.page_name.timer")}</title>
</svelte:head>

<div class='container'>
	<DateTimer startAt={1636819200000}>
		<h2>🐼</h2>
	</DateTimer>
</div>

<style lang='scss'>
	@import "../../static/css/global.css";

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		user-select: none;
	}
</style>
