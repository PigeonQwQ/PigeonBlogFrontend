<script lang="ts">
	import { onMount } from 'svelte';
	import { directus } from '$lib/directus';
	import { goto } from '$app/navigation';

	onMount(async () => {
		try {
			await directus.auth.logout()
		} catch (e) { console.log(e) }
		finally {
			await goto("/");
		}
	})
</script>
