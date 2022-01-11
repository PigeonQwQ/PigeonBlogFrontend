<script lang="ts">
	import { Dialog } from 'attractions';
	import { t } from '$lib/translations';
	import { InfoIcon } from 'svelte-feather-icons';

	export let klass: undefined | string;
	export let onClose: () => never;
</script>

<div class='container {klass}'>
	<Dialog
		title={$t("common.cookie_warning_title")}
		closeCallback={onClose}
		class='heti'
	>
		<div slot="title-icon">
			<InfoIcon size="20" />
		</div>
		<p class='heti'>{$t("common.cookie_warning_content")}</p>
	</Dialog>
</div>

<style>
	.container {
		position: fixed;
		bottom: 0;
		right: 0;
		max-width: 36rem;
	}
</style>
