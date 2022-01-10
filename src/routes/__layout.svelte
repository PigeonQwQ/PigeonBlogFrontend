<script context='module'>
	import { loadTranslations } from '$lib/translations';
	import { showBreadcrumbs } from '$lib/stores/common';

	export const load = async ({ url }) => {
		const { pathname } = url;

		const locale = 'zh-Hans'; // TODO get from user session
		await loadTranslations(locale, pathname);

		return {};
	};

	export const setShowBreadcrumbs = (value) => {
		showBreadcrumbs.set(value);
	}
</script>

<script>
	import { page } from '$app/stores';
	import { t } from '$lib/translations';
	import { Breadcrumbs, Button, Chip } from 'attractions';
	import { HomeIcon, ArrowRightIcon } from 'svelte-feather-icons';

	let pathItems = [];
	page.subscribe(({ url }) => {
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
</script>

{#if $showBreadcrumbs}
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
{/if}

<slot></slot>
