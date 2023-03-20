<script>
  import { navigate } from 'svelte-routing';
  import { each } from 'svelte/internal';
  import { course } from '.././stores.js';
  let choosen_course
  course.subscribe(val => choosen_course=val)
  let input_type
  function select_input(input){
    input_type=input;
  }
  let science = {
  "Nepali": [0, 0],
  "English": [0, 0],
  "Physics": [0, 0],
  "Chemistry": [0, 0],
  "Maths": [0, 0],
  "Computer": [0, 0],
  "Biology": [0, 0]
  };
  let gpa=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"]
  function update_gpap(event){
    const selected_value=event.target.value;
    const selected_class=event.target.className.split("s-")[0].toString().trim();
    
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0]);
    science[selected_class][0]=float_gpa
    update_gpa()
  }

  function update_gpat(event){
    const selected_value=event.target.value;
    const selected_class=event.target.className.split("s-")[0].toString().trim();
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0]);
    science[selected_class][1]=float_gpa
    update_gpa()
  }
  var calculated_gpa;
  function update_gpa()
  {
    calculated_gpa=(science["Nepali"][1]*2.25+science["English"][1]*3+science["Maths"][1]*3.75+science["Physics"][1]*3.75+science["Chemistry"][1]*3.75+science["Computer"][1]*2.5+science["Nepali"][0]*0.75+science["English"][0]*1+science["Maths"][0]*1.25+science["Physics"][0]*1.25+science["Chemistry"][0]*1.25+science["Computer"][0]*2.5+science["Biology"][0]*3.75+science["Biology"][0]*1.25)/27;
  }

</script>

<h2>Input Method</h2>
<button on:click={()=> select_input('gpa')}>GPA</button>
<button on:click={()=> select_input('marks')}>Marks</button>



<style>

</style>



{#if input_type==='gpa'}

{#each Object.keys(science) as subject}
<h2>{subject}</h2>
<h3>Practical:</h3><select class={subject} on:change={update_gpap}>
  <option disabled selected>Select</option>
  {#each gpa as g}
    <option>{g}</option><br>
  {/each}
</select>
<h3>Theory:</h3><select class={subject} on:change={update_gpat}>
  <option disabled selected>Select</option>
  {#each gpa as g}
    <option>{g}</option><br>
  {/each}
</select>
{/each}



{:else if input_type==='marks'}
<h2>Marks</h2>
{/if}
<h2>GPA : {calculated_gpa}</h2>