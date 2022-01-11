<script context='module'>
	import { loadTranslations } from '$lib/translations';

	export const load = async ({ url }) => {
		const { pathname } = url;

		const locale = 'zh-Hans'; // TODO get from user session
		await loadTranslations(locale, pathname);

		return {};
	};
</script>
<script>
	import CookieWarning from '../components/CookieWarning.svelte';
	import { getCookie, setCookie } from '$lib/utils/cookie';

	let showCookieWarning = false;

	const warnStatus = getCookie("disable-cookie-warn")
	if (warnStatus !== 'true') showCookieWarning = true;
</script>

<slot></slot>
{#if showCookieWarning}
	<CookieWarning onClose={() => {showCookieWarning = false; setCookie("disable-cookie-warn", "true")}} />
{/if}
