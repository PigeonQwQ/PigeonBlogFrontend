
<script lang="ts">
	import { Card } from 'attractions';
	import moment from 'moment-timezone';
	import { onDestroy } from 'svelte';
	import TimeCounterBox from './TimeCounterBox.svelte';

	export let timezone = "Asia/Shanghai";
	export let startAt = 0;
	export let background = "https://cdn.jsdelivr.net/gh/DarcJC/pictures-host/imgs/20220110235907.jpg";
	export let mbackground = "https://cdn.jsdelivr.net/gh/DarcJC/pictures-host/imgs/20220111005734.jpg"

	$: _background = `url("${background}")`;
	$: _mbackground = `url("${mbackground}")`;
	$: startTime = moment(startAt).tz(timezone);

	let timerArray = [];
	const units = ["天", "时", "分", "秒"];
	const interval = setInterval(() => {
		const now = moment().tz(timezone);
		const duration = moment.duration(now.diff(startTime));
		const newArr = [];
		newArr.push(duration.asDays().toFixed(0), duration.hours(), duration.minutes(), duration.seconds())
		timerArray = newArr;
	}, 1000)

	onDestroy(() => clearInterval(interval));

</script>

<div class='container shadow' style='--background-img: {_background}; --background-img-phone: {_mbackground}'>
	<Card style='
	background-color: rgba(255, 255, 255, 0);
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0;
'
	>
		<div class='head'>
			<slot></slot>
		</div>
		<div class='content'>
			<div class='text-block'>
				{#each timerArray as t, i}
					{#if i === 0}
						<br/>
					{/if}
				<TimeCounterBox name={units[i]} data={t} />
				{/each}
			</div>
		</div>
		<div class='comment'>
			<h1 class='heti' style='justify-self: flex-end; align-self: flex-end'>时区：{timezone}</h1>
		</div>
	</Card>
</div>

<style lang='scss'>

	.container {
		width: 80rem;
		height: 50rem;
		background-image: var(--background-img);
		background-size: 100% 100%;
	}

	.content {
		align-self: center;
		height: 85%;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: row;
	}

	.content .text-block {
		border: #eeeeee 1px solid;
		padding: 5.5rem;
	}

	.shadow {
		box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgb(71, 173, 170);
		animation: fontShine 10s linear infinite;
		font-size: 0.9rem;
		font-family: Baskerville, "Baskerville Old Face", "Hoefler Text", Garamond, "Times New Roman", serif;
	}

	.comment {
		color: rgba(112, 96, 96, 0.43);
		font-size: 0.75rem;
		height: calc(15% + 1.5rem);
		justify-items: flex-end;
	}

	@media all and (max-width: 768px) {
		.container {
			width: 100vw;
			height: 100vh;
			background-image: var(--background-img-phone);
		}
		.content .text-block {
			width: 100%;
			padding: 4rem;
		}
	}
</style>
