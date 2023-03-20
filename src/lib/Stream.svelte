<script>
    import { navigate } from 'svelte-routing';
    import { course } from '.././stores.js';
    function goToPage(course1) {
    navigate('/calculate');
    course.update(val => val=course1)
    }
</script>

<h2>Choose Stream</h2>
<button on:click={() => goToPage('science')}>Science</button>
<button on:click={() => goToPage('management')}>Management</button>