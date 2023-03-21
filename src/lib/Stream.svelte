<script>
    import { navigate } from 'svelte-routing';
    import { course } from '.././stores.js';
    function goToPage(course1) {
    course.update(val => val=course1)
    }
</script>

<body>
<h2>Choose Stream</h2>
<div class="buttons">
<button on:click={() => goToPage('science')}>Science</button>
<button on:click={() => goToPage('management')}>Management</button>
</div>
</body>


<style>
    .buttons{
        display: flex;
        flex-direction: column;
    }
    h2{
        display: inline;
    }
    button{
        display: inline-block;
        margin:20px;
    }
</style>