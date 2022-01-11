import { Directus } from '@directus/sdk';
import type { CustomCollections } from '$lib/directus/col';

export const directus = new Directus<CustomCollections>(import.meta.env.VITE_API_BASEURL, {});
