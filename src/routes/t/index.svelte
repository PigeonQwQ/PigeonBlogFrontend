<script lang='ts'>
	import { t } from '$lib/translations';
	import DateTimer from '../../components/DateTimer.svelte';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { directus } from '$lib/directus';
	import { SnackbarContainer } from 'attractions';
	import { browser } from '$app/env';

	let name: string | undefined;
	let startAt: number | undefined = NaN;
	let mobileBackground: string | undefined;
	let desktopBackground: string | undefined;
	let timezone: string | undefined;
	let headHtml: string | undefined;
	let warningBox;

	const unSubscriber = page.subscribe(async ({ url }) => {
		let id = url.searchParams.get('id');
		if (!id && browser) {
			id = new URLSearchParams(window.location.search).get('id');
		}
		try {
			const data = await directus.items('TimerData').readOne(id);
			name = data?.name;
			timezone = data?.timezone;
			startAt = parseInt(data?.start_at);
			if (typeof data?.mobile_bg === 'string') mobileBackground = data?.mobile_bg;
			if (typeof data?.desktop_bg === 'string') desktopBackground = data?.desktop_bg;
			if (typeof data?.head === 'string') headHtml = data?.head;
		} catch (e) {
			warningBox?.showSnackbar({
				props: { text: $t('common.network_notfound') }
			});
		}
	});

	onDestroy(unSubscriber);

</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>

<div class='container'>
	<DateTimer {startAt} {timezone} background={desktopBackground} mbackground={mobileBackground}>
		{#if typeof headHtml === 'string'}
			{@html { headHtml }}
		{/if}
	</DateTimer>
</div>
<SnackbarContainer bind:this={warningBox} />

<style lang='scss'>
	@import "../../../static/css/global.css";

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		user-select: none;
		background: linear-gradient(red, transparent),
		linear-gradient(to top left, lime, transparent),
		linear-gradient(to top right, blue, transparent);
		background-blend-mode: screen;
	}
</style>
