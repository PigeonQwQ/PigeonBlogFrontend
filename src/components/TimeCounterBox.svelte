<script>
	export let data = 0;
	export let name = "";

	$: _text = data.toString().length === 1 ? `0${data.toString()}` : data.toString();
</script>

<div class='box'>
	{#each [..._text] as t}
	<span class='position'>
		<span class='digit' style='top: 0; opacity: 1;'>{t}</span>
	</span>
	{/each}
	<span class='name'>
		<span>{name}</span>
	</span>
</div>

<style>
	.box {
		background: transparent;
		display: inline-block;
		width: 5rem;
		height: 6rem;
		text-align: center;
	}

	.position {
		display: inline-block;
	}

	.digit {
		font-size: 2.8rem;
		font-stretch: 100%;
		font-weight: bold;
		color: #ffffff;
	}

	.name {
		width: 100%;
		font-size: 15px;
		color: #ffffff;
		font-weight: 400;
		padding: 2px;
		text-transform: uppercase;
		font-family: 'Open Sans', sans-serif;
	}
</style>
