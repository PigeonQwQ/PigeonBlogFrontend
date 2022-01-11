import { browser } from '$app/env';

export const getQueryParam = (key: string) => {
	if (!browser) return '';
	return new URLSearchParams(window.location.search).get(key) || "";
}
