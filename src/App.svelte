<script>
  import svelteLogo from './assets/svelte.svg'
  import Calculate from './lib/Calculate.svelte'
  import { Router, Link, Route } from "svelte-routing";
  import { navigate } from 'svelte-routing';
  import Stream from './lib/Stream.svelte'
  
  
</script>

<h1>NEB GPA Calculator</h1>
<div class="container">
  <Router>
    <Route path="*" component={Stream}/>
    <Route path="calculate" component={Calculate} />
  </Router>
</div>
<style>
</style>
