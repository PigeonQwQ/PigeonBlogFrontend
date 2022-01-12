<script lang="ts">
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import StarFlow from '../components/StarFlow.svelte';
	import "carbon-components-svelte/css/white.css";
	import NavBar from '../components/NavBar.svelte';
	import { Button, ButtonSet } from 'carbon-components-svelte';
	import Login16 from "carbon-icons-svelte/lib/Login16";
	import { LetterAa16, LogoGithub16 } from 'carbon-icons-svelte';
	import { updateUser } from '$lib/stores/identify';

	let textElem;
	let headerElem;
	let currentUserName: string;

	onMount(() => {
		anime
			.timeline({loop: true})
			.add({
				targets: textElem,
				scale: [0, 1],
				duration: 1500,
				elasticity: 600,
				delay: (el, i) => 45 * (i+1)
			})
			.add({
				targets: headerElem,
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
	});

	onMount(async () => {
		const user = await updateUser();
		currentUserName = user?.first_name;
	});

</script>

<svelte:head>
	<title>{$t("common.page_name.index")}</title>
</svelte:head>

<div class='container'>
	<StarFlow />
	<NavBar>
		<div slot='right'>
			{#if currentUserName}
			<p style='color: #eeeeee'>{$t("common.welcome")}{currentUserName}</p>
			{/if}
		</div>
	</NavBar>
	<h1 class="ml9" bind:this={headerElem}>
  	<span class="text-wrapper">
    	<span class="letter" bind:this={textElem}>Pigeon Blog</span>
  	</span>
	</h1>
	<ButtonSet style='justify-content: center;'>
		{#if currentUserName === undefined}
			<Button kind="tertiary" icon={Login16} iconDescription={$t("common.signin")} href='auth/signin'>
				{$t("common.signin")}
			</Button>
		{:else}
			<Button kind="tertiary" icon={Login16} iconDescription={$t("common.signout")} href='auth/signout'>{$t("common.signout")}</Button>
		{/if}
		<Button kind='tertiary' size="field" style='width: 2.5rem;' icon={LogoGithub16} iconDescription='Github' href='https://github.com/PigeonQwQ/PigeonBlogFrontend'/>
		<Button kind='tertiary' icon={LetterAa16} iconDescription={$t("common.articles")}>{$t("common.articles")}</Button>
	</ButtonSet>
</div>

<style lang='scss'>
	@import "../../static/css/global.css";

	.container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		flex-direction: column;
		overflow-x: hidden;
	}

	.ml9 {
		position: relative;
		font-weight: 200;
		font-size: 4em;
		user-select: none;
	}

	.ml9 .text-wrapper {
		position: relative;
		display: inline-block;
		padding-top: 0.2em;
		padding-right: 0.05em;
		padding-bottom: 0.1em;
		overflow: hidden;
	}

	.ml9 .letter {
		transform-origin: 50% 100%;
		display: inline-block;
		line-height: 1em;
		color: #eeeeee;
	}
</style>
