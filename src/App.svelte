<script>
// import url from './lib/utils/url'
import Demo from './routes/Demo.svelte'
</script>

<!--
  {#if $url.hash === '' || $url.hash === '#/'}
  <h1>Home Sweet Home</h1>
{:else if $url.hash === '#/about'}
  <h1>About What?</h1>
{:else}
  <h1>404</h1>
{/if}
-->

<main class="main">
<Demo />
</main>
