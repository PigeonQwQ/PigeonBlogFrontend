<script context='module'>
	import { loadTranslations } from '$lib/translations';

	export const load = async ({ url }) => {
		const { pathname } = url;

		const locale = 'zh-Hans'; // TODO get from user session
		await loadTranslations(locale, pathname);

		return {};
	};
</script>

<slot></slot>
