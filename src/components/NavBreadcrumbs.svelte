<script>
	import { onDestroy } from 'svelte';
	import { Breadcrumbs, Button, Chip } from 'attractions';
	import { HomeIcon, ArrowRightIcon } from 'svelte-feather-icons';
	import { page } from '$app/stores';
	import { t } from '$lib/translations';

	let pathItems = [];
	const unsubscribe = page.subscribe(({ url }) => {
		const { pathname } = url;
		let currentHref = '/';
		const newItem = [];
		pathname.split('/').forEach((elem, index) => {
			if (index === 0) newItem.push({ href: '/', text: 'Home' });
			else {
				currentHref += elem;
				newItem.push({ href: currentHref, text: $t(`common.page_name.${elem}`) });
			}
		});
		pathItems = newItem;
	});

	onDestroy(unsubscribe)
</script>

<Breadcrumbs items={pathItems}>
	<div slot='item' let:item>
		{#if item.href === '/'}
			<Button href='/' round small>
				<HomeIcon size='20' />
			</Button>
		{:else}
			<Chip>{item.text}</Chip>
		{/if}
	</div>
	<ArrowRightIcon slot='separator' size='20' />
</Breadcrumbs>
