<script>
	import Settings from './Settings.svelte'
	import Game from './Game.svelte'
	import Start from './Start.svelte'
	import { path } from 'elegua'
	import { sleep } from './game'
	let count = 20
	$path = '/'
	let promise = sleep(100)
</script>

{#await promise then value}
	{#if $path === '/settings'}
		<Settings />
	{:else if $path === '/game'}
		<Game bind:count />
	{:else}
		<Start bind:count />
	{/if}
{/await}
