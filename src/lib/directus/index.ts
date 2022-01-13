import { BaseStorage, Directus } from '@directus/sdk';
import type { CustomCollections } from '$lib/directus/col';
import { deleteCookie, getCookie, setCookie } from '$lib/utils/cookie';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class CookieStorage extends BaseStorage {
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

export const getSeriesList = (limit = 10, page = 0) => {
	return directus.items("SeriesList").readMany({
		limit,
		page,
	})
}
