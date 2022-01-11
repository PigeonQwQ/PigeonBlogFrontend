import { directus } from '$lib/directus';

export async function get({ params }) {
	const { id } = params;

	const res = await directus.items("TimerData").readOne(id);
	return {
		body: res,
	}
}
