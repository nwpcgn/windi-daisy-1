<script>
	import Virus from './Virus.svelte'
	import { path } from 'elegua'
	import { sleep, shuffleList } from './game'
	export let count = 20
	let daten = []
	let score = 0
	let duration = 20000
	let hits = new Set()

	function restart() {
		score = 0
		hits.clear()
		duration = count * 960 + 10000
		daten = shuffleList(count)
		promise = sleep(duration)
	}
	function exit() {
		score = 0
		hits.clear()
		duration = count * 960 + 10000
		daten = []
		$path = '/'
	}

	function handleClick(elem) {
		hits.add(elem)
		score = hits.size
	}

	const init = async () => {
		duration = count * 960 + 10000
		daten = shuffleList(count)
		await sleep(duration)
		return 'Game Over'
	}

	let promise = init()
</script>

{#await promise}
	<section class="layer">
		{#each daten as item, index}
			<Virus
				{item}
				{index}
				on:score={(e) => {
					handleClick(e.detail)
				}} />
		{/each}
		<div class="fixed top-0 inset-x-0">
			<div class="timer" style="--timer-duration: {duration}ms;" />
		</div>
	</section>
{:then value}
	<section class="layer grid place-content-center">
		<article class="content">
			<header class="space-y-6 text-center">
				<h1 class="font-semibold text-6xl">Css Game</h1>
				<h5 class="font-bold text-2xl">
					You catch {score} from {count} items
				</h5>
				<pre>{[...hits].join(', ')}</pre>
				<div class="grid gap-2">
					<button class="btn btn-neutral" on:click={restart}>Restart</button>
					<button class="btn btn-neutral" on:click={exit}>Exit</button>
				</div>
			</header>
		</article>
	</section>
{/await}
