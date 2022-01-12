import { browser } from '$app/env';

export const setCookie = (name: string, value: string, days = 7, path = '/') => {
	if (!browser) return;

	const expires = new Date(Date.now() + days * 864e5).toUTCString()
	document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

export const getCookie = (name: string) => {
	if (!browser) return '';

	return document.cookie.split('; ').reduce((r, v) => {
		const parts = v.split('=')
		return parts[0] === name ? decodeURIComponent(parts[1]) : r
	}, '')
}

export const deleteCookie = (name: string, path = '') => {
	if (!browser) return '';

	setCookie(name, '', -1, path)
}

export default {
	setCookie,
	getCookie,
	deleteCookie,
};
