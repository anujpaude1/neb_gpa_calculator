<script>
  import svelteLogo from './assets/svelte.svg'
  import Calculate from './lib/Calculate.svelte'
  // import { Router, Link, Route } from "svelte-routing";
  // import { navigate } from 'svelte-routing';
  import Stream from './lib/Stream.svelte'
  import { course } from './stores.js';
  let choosen_course
  course.subscribe(val => choosen_course=val)
  
  
</script>
<main>
<h1>NEB GPA Calculator</h1>
<div class="container">
  {#if choosen_course}
    <Calculate></Calculate>
  {:else}
   <Stream></Stream>
   {/if}
</div>
</main>
<style>
  
</style>
