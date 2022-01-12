import { directus } from '$lib/directus';

export const updateUser = async () => {
	try {
		return await directus.users.me.read();
	} catch (e) {
		return null;
	}
}
