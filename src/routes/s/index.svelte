<script lang="ts">
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import { getSeriesList } from '$lib/directus';
	import { SkeletonText } from "carbon-components-svelte";
	import { browser } from '$app/env';

	let loading = true;

	onMount(async () => {
		console.log(await getSeriesList())

		if (browser) {
			new SkeletonText({
				target: document.getElementById("test-div"),
			})
		}
	})

</script>

<svelte:head>
	<title>{$t("common.series")}</title>
</svelte:head>

<div class='container'>
	<p>1231231</p>
	<div id='test-div'></div>
</div>

<style lang='scss'>

	.container {
	}
</style>
