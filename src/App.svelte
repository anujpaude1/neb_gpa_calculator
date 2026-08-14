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
<!-- hehe -->
<main>
<h1 class="main_text" on:click={()=>course.update(val => val=undefined)} > NEB GPA Calculator </h1>
<div class="container">
  {#if choosen_course}
    <Calculate></Calculate>
  {:else}
   <Stream></Stream>
   {/if}
</div>
<footer class="site_footer">
  <a href="web-scientific-calculator/">Free Online Scientific Calculator</a>
  <span class="sep">·</span>
  <a href="https://widemath.com/scientific-calculator/" target="_blank" rel="noopener">Casio fx-991ES PLUS calculator by WideMath</a>
</footer>
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

  .site_footer {
    margin-top: 3em;
    padding: 1em 0 0.5em;
    text-align: center;
  }
  .site_footer a {
    font-size: 0.75em;
    opacity: 0.45;
    text-decoration: none;
  }
  .site_footer a:hover {
    opacity: 0.8;
  }
  .site_footer .sep {
    font-size: 0.75em;
    opacity: 0.35;
    margin: 0 0.5em;
  }
</style>
