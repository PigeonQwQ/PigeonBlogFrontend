import { BaseStorage, Directus } from '@directus/sdk';
import type { CustomCollections } from '$lib/directus/col';
import { deleteCookie, getCookie, setCookie } from '$lib/utils/cookie';

class SessionStorage extends BaseStorage {
	prefix = "cms_"

	get(key) {
		return getCookie(key)
	}
	set(key, value) {
		setCookie(key, value)
		return getCookie(key)
	}
	delete(key) {
		deleteCookie(key)
		return getCookie(key)
	}
}

export const directus = new Directus<CustomCollections>(import.meta.env.VITE_API_BASEURL, {});
