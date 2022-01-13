<script lang="ts">
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { getSeriesList } from '$lib/directus';
	import { SkeletonText } from "carbon-components-svelte";

	let loading = true;

	onMount(async () => {
		console.log(await getSeriesList())
	})

</script>

<svelte:head>
	<title>{$t("common.series")}</title>
</svelte:head>

<div class='container'>
	<p>1231231</p>
</div>

<style lang='scss'>
	@import "/static/css/global.css";

	.container {
	}
</style>
