import { writable } from 'svelte/store';
import { directus } from '$lib/directus';

export const CurrentUser = writable(null);

export const updateUser = async () => {
	try {
		CurrentUser.set(await directus.users.me.read())
		return CurrentUser;
	} catch (e) {
		return null;
	}
}
