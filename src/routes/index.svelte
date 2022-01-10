<script>
	import { t } from '$lib/translations';
	import { Card } from 'attractions';
</script>

<svelte:head>
	<title>{$t("common.page_name.index")}</title>
</svelte:head>

<div class='container'>
	<div style='max-width: 800px;'>
		<Card>
		</Card>
	</div>
</div>

<style lang='scss'>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
