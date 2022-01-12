<script lang="ts">

	export let background = "transparent";
	export let position = "absolute";

</script>

<div class='container' style='--background-data: {background}; --container-position: {position};'>
	<div style='align-self: flex-start; margin: auto 0.5rem;'><slot name='left'></slot></div>
	<div style='align-self: flex-end; margin: auto 0.5rem; width: 50%;'><slot name='right'></slot></div>
</div>

<style>
	.container {
		background: var(--background-data);
		position: var(--container-position);
		left: 0;
		right: 0;
		top: 0.5rem;
		display: flex;
		height: 3rem;
		flex-direction: column;
		align-items: center;
	}
</style>
