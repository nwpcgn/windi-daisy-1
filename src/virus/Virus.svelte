<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	export let item = 1
	export let index = 0
	let hit = 0

	$: if (hit === item) {
		dispatch('score', item)
	}
</script>

<div
	class="corona-location corona-virus-{item}-location"
	style="--delay: {(index + 1) * 960}ms;">
	<label class="relative">
		<input type="radio" bind:group={hit} value={item} class="sr-only" />

		<div
			class="w-32 h-32 grid place-content-center rounded-full bg-black text-white transition transition-opacity duration-500 ease-out cursor-pointer"
			class:opacity-0={hit === item}>
			<span>Virus {index + 1}</span>
		</div>
	</label>
</div>
