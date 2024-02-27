<script>
	import { path } from 'elegua'
	import { sleep } from './game'
	export let count
	const startGame = () => {
		sleep(100).then(() => {
			$path = '/game'
		})
	}
</script>

<section class="layer grid place-content-center">
	<article class="content">
		<header class="space-y-6 text-center">
			<h1 class="font-semibold text-6xl">Css Game</h1>
			<h5 class="font-bold text-2xl">
				Size <em>{count} Parts</em>
			</h5>
			<button class="btn btn-lg btn-wide btn-neutral" on:click={startGame}
				>Start</button>
		</header>
	</article>
</section>
