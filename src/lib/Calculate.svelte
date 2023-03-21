<script>
  import { navigate } from 'svelte-routing';
  import { each } from 'svelte/internal';
  import { course } from '.././stores.js';
  import { onMount } from 'svelte'
  let choosen_course
  let subjects
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
  "Biology": [0, 0],
  "Social": [0, 0]
  };
  let management = {
  "Nepali": [0, 0],
  "English": [0, 0],
  "Social": [0, 0],
  "Economics": [0, 0],
  "Account": [0, 0],
  "Computer": [0, 0],
  "Maths": [0, 0]
  };
  let select_style='background-color: grey';
  let gpa=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.8 or D+","1.6 or D"]
  function update_gpap(event){
    const selected_value=event.target.value;
    const selected_class1=event.target.className.trim();
    const selected_class=event.target.className.split(" ")[0].toString().trim();
    if(selected_value!=="Select")
    {
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0].trim());
    subjects[selected_class].splice(0, 1, float_gpa);
    }
    if(selected_value=="Select")
    {
      subjects[selected_class].splice(0, 1, 0);
    }
   
   update_gpa()
  }

  function update_gpat(event){
    const selected_value=event.target.value;
    const className=event.target.className;
    const selected_class=event.target.className.split(" ")[0].toString().trim();
    if(selected_value!=="Select")
    {
    let gpa_array=selected_value.split("or")
    let float_gpa=parseFloat(gpa_array[0]);
    subjects[selected_class].splice(1, 1, float_gpa);
    }
    if(selected_value=="Select")
    {
      subjects[selected_class].splice(1, 1, 0);
    }
    update_gpa()
    
  }
  var calculated_gpa;
  if (choosen_course==="science")
  {
    subjects=science
  }
  if (choosen_course==="management")
  {
    subjects=management
  }
  function update_gpa()
  {
    if (choosen_course==="science")
    {
      calculated_gpa=(subjects["Nepali"][1]*2.25+subjects["English"][1]*3+subjects["Maths"][1]*3.75+subjects["Physics"][1]*3.75+subjects["Chemistry"][1]*3.75+subjects["Computer"][1]*2.5+subjects["Nepali"][0]*0.75+subjects["English"][0]*1+subjects["Maths"][0]*1.25+subjects["Physics"][0]*1.25+subjects["Chemistry"][0]*1.25+subjects["Computer"][0]*2.5+subjects["Biology"][1]*3.75+subjects["Biology"][0]*1.25+subjects["Social"][1]*3.75+subjects["Social"][0]*1.25)/27;

    }
    if (choosen_course==="management")
    {
      calculated_gpa=(subjects["Nepali"][1]*2.25+subjects["English"][1]*3+subjects["Maths"][1]*3.75+subjects["Economics"][1]*3.75+subjects["Account"][1]*3.75+subjects["Computer"][1]*2.5+subjects["Nepali"][0]*0.75+subjects["English"][0]*1+subjects["Maths"][0]*1.25+subjects["Economics"][0]*1.25+subjects["Account"][0]*1.25+subjects["Computer"][0]*2.5+subjects["Social"][1]*3.75+subjects["Social"][0]*1.25)/27;
    }
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
    box-shadow: 0 2px 6px rgba(0, 255, 17, 0.639);
  }
  .inactive{
    box-shadow: 0 2px 6px rgba(161, 46, 4, 0.776)  }
  
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
  .center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(255, 166, 0)181;
  margin-top: 2rem;
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



{#if input_type==='gpa'}
<h2 ><i style="font-weight:100">Please only select the GPA for subjects that you have taken.</i></h2>
<div id="changing">
{#each Object.keys(subjects) as subject}
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
</div>



{:else if input_type==='marks'}
<h2>Under Construction</h2>

{/if}


{#if calculated_gpa!==undefined }
<h2 class="center">GPA: {calculated_gpa}</h2>
{/if}
