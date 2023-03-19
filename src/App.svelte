<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import {Router,Route} from 'svero';
  import Stream from './lib/Stream.svelte';
</script>

<h1>NEB GPA Calculator</h1>
<Router>
  <Route path="*" component={Stream} />
</Router>

<style>
</style>
