<script>
  import { navigate } from 'svelte-routing';
  import { each } from 'svelte/internal';
  import { course } from '.././stores.js';
  import { onMount } from 'svelte'
  let choosen_course
  course.subscribe(val => choosen_course=val)
  let input_type
  let is_active1
  let is_active2
  function select_input(input){
    input_type=input;
    if(input==="gpa")
    {
      is_active1=true;
      is_active2=false;
    }
    if(input==="marks")
    {
      is_active2=true;
      is_active1=false;
    }
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
  let select_style='background-color: grey';
  let gpa=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"]
  function update_gpap(event){
    const selected_value=event.target.value;
    const selected_class1=event.target.className.trim();
    const selected_class=event.target.className.split("s-")[0].toString().trim();
    if(selected_value!=="Select")
    {
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0]);
    science[selected_class][0]=float_gpa
    update_gpa()
    
   }
  }

  function update_gpat(event){
    const selected_value=event.target.value;
    const className=event.target.className;
    const selected_class=event.target.className.split("s-")[0].toString().trim();
    if(selected_value!=="Select")
    {
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0]);
    science[selected_class][1]=float_gpa
    update_gpa()
    }
    
  }
  var calculated_gpa;
  function update_gpa()
  {
    calculated_gpa=(science["Nepali"][1]*2.25+science["English"][1]*3+science["Maths"][1]*3.75+science["Physics"][1]*3.75+science["Chemistry"][1]*3.75+science["Computer"][1]*2.5+science["Nepali"][0]*0.75+science["English"][0]*1+science["Maths"][0]*1.25+science["Physics"][0]*1.25+science["Chemistry"][0]*1.25+science["Computer"][0]*2.5+science["Biology"][0]*3.75+science["Biology"][0]*1.25)/27;
  }

</script>

<div id="input_method">
<h2>Input Method</h2>
<div class="buttons">
<button class="{is_active1 ? 'active' : 'inactive'}" on:click={()=> select_input('gpa')}> GPA </button>
<button class="{is_active2 ? 'active' : 'inactive'}" on:click={()=> select_input('marks')}>Marks</button>
</div>
</div>


<style>

  .active{
    box-shadow: 0 2px 6px rgba(0, 255, 17, 0.482);
  }
  .inactive{
    box-shadow: 0 2px 6px rgba(255, 0, 0, 0.482);
  }
  
  .buttons{
    display: flex;
    justify-content: space-between;
  }

  .active,.inactive{
    width:40%;
    display: inline-block;
    margin: auto auto;
    padding: auto auto;
  }
  #input_method{
    height:100%;

  }
  .center{
    text-align: center;
    overflow:hidden;
  }
  #each_subject{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    padding-bottom: 20px;
  }
  

  #changing{
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
  }
  .subject_name{
    display:inline-block;
    margin: 28px 0 0 0;
  }
</style>


<div id="changing">
{#if input_type==='gpa'}

{#each Object.keys(science) as subject}
<div id="combo">
<h2 class="subject_name">{subject}</h2>
<div id="each_subject">
<h3>Practical:</h3><select class={subject} on:change={update_gpap}>
  <option selected>Select</option>
  {#each gpa as g}
    <option>{g}</option><br>
  {/each}
</select>
<h3>Theory:</h3><select class={subject} on:change={update_gpat}>
  <option selected>Select</option>
  {#each gpa as g}
    <option>{g}</option><br>
  {/each}
</select>
</div>
</div>
{/each}




{:else if input_type==='marks'}
<h2>Under Construction</h2>

{/if}

</div>
{#if calculated_gpa!==undefined }
<h2 class="center">GPA : {calculated_gpa}</h2>
{/if}
