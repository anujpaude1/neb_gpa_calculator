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
<h1 class="main_text" on:click={()=>course.update(val => val=undefined)} > NEB GPA Calculator </h1>
<div class="container">
  {#if choosen_course}
    <Calculate></Calculate>
  {:else}
   <Stream></Stream>
   {/if}
</div>
</main>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
  .main_text{
    cursor: pointer;
    font-family: 'Bangers', cursive;
    font-size: 4.5em;
    margin-bottom: 6px;
  }
  @media screen and (max-width: 430px) {
  /* CSS rules for devices below width 420 */
  .main_text{
    font-size: 3.3em;
  }
  }

</style>
