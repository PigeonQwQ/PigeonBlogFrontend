<script lang='ts'>
	import { Button, Card, FormField, SnackbarContainer, TextField } from 'attractions';
	import { t } from '$lib/translations';
	import { AtSignIcon } from 'svelte-feather-icons';
	import { directus } from '$lib/directus';
	import { getQueryParam } from '$lib/utils/query';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { updateUser } from '$lib/stores/identify';

	let emailValue = "";
	let passwordValue = "";
	let disableSubmit = false;
	let warnBox;

	const jumpBack = () => {
		let fromLoc = getQueryParam("from");
		if (fromLoc.length === 0) fromLoc = '/';
		setTimeout(() => goto(fromLoc), 2000);
	}

	const login = async () => {
		emailValue = emailValue.trim();
		passwordValue = passwordValue.trim();
		if (emailValue.length === 0) return warnBox?.showSnackbar({ props: { text: $t("common.email.help") } });
		if (passwordValue.length === 0) return warnBox?.showSnackbar({ props: { text: $t("common.password.help") } });
		disableSubmit = true;
		try {
			const result = await directus.auth.login({
				email: emailValue,
				password: passwordValue,
			});
			warnBox?.showSnackbar({ props: { text: $t("common.signin.success") } });
			jumpBack()
		} catch (e) {
			warnBox?.showSnackbar({ props: { text: $t("common.signin.failed") } });
			disableSubmit = false;
		}
	}

	onMount(async () => {
		const user = await updateUser();
		if (user) {
			warnBox?.showSnackbar({ props: { text: $t("common.signin.already") } });
			jumpBack()
		}
	});

</script>

<svelte:head>
	<title>{$t("common.signin")}</title>
</svelte:head>

<div class='container blended-color'>
	<div class='box'>
		<Card class='login'>
			<h1>{$t("common.signin")}</h1>

			<div class='form-area'>
				<TextField autofocus outline label={$t("common.email")} on:change={(value) => {emailValue = value?.detail?.value || "";}} withItem>
					<AtSignIcon size='24' class='item' />
				</TextField>
				<br/>
				<TextField autofocus type='password' label={$t("common.password")} outline on:change={(value) => {passwordValue = value?.detail?.value || "";}} />
			</div>

			<Button disabled={disableSubmit} style='justify-self: flex-end;' outline on:click={login}>{$t("common.signin")}</Button>
		</Card>
	</div>
	<SnackbarContainer bind:this={warnBox} />
</div>

<style lang='scss'>
	@import "../../../static/css/global.css";

	.container.blended-color {
		background: repeating-linear-gradient(
				#F3F5C4 0,
				#F3F5C4 3em,
				#F19181 3em,
				#F19181 6em
		),
		repeating-linear-gradient(
				90deg,
				#F9CB8F 0,
				#F9CB8F 3em,
				#3CBAC8 3em,
				#3CBAC8 6em
		),
		repeating-linear-gradient(
				45deg,
				transparent 0,
				transparent 6em,
				#F19181 12em
		),
		repeating-linear-gradient(
				-45deg,
				transparent 0,
				transparent 6em,
				#F19181 12em
		);

		background-blend-mode: multiply;
	}

	.container {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.box {
		display: flex;
		justify-items: center;
		align-items: center;
		width: 36rem;
	}

	.box :global(.login) {
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
	}

	.form-area {
		height: 65%;
	}

	@media all and (min-width: 1024px) {
		.box {
			h1 {
				margin-bottom: 5rem;
			}
		}
		.box :global(.login) {
			text-align: center;
		}
	}

	@media all and (max-width: 768px) {
		.box {
			max-width: unset;
			width: 100vw;
		}

		.box :global(.login) {
			height: 60%;
			mix-blend-mode: screen;
		}
	}

</style>
