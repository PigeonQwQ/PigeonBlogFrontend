<script>
	import { t } from '$lib/translations';
</script>

<svelte:head>
	<title>{$t("common.page_name.index")}</title>
</svelte:head>

<div class='container'>
	<div style='max-width: 800px;'>
	</div>
</div>

<style lang='scss'>
	@import "../../static/css/global.css";

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
