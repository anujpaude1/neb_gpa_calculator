<script>
  import banner from '../assets/aakhyan.png';
  import { navigate } from 'svelte-routing';
  import { each } from 'svelte/internal';
  import { course } from '.././stores.js';
  import { onMount } from 'svelte'
  let choosen_course
  let ng=[];
  let subjects={}
  const num_to_gpa={
  "4.0-3.6": "A+",
  "3.6-3.2": "A",
  "3.2-2.8": "B+",
  "2.8-2.4": "B",
  "2.4-2.0": "C+",
  "2.0-1.6": "C",
  "1.6-0.0": "D"
}
function getGPA(num) {
  for (let range in num_to_gpa) {
    let [upper, lower] = range.split("-").map(parseFloat);
    if (num > lower && num <= upper) {
      return num_to_gpa[range];
    }
  }
  return "";
}
  course.subscribe(val => choosen_course=val)
  let always_true=true
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
    if (choosen_course==="science")
    {
      subjects=JSON.parse(JSON.stringify(science));
    }
    if (choosen_course==="management")
    {
      subjects=JSON.parse(JSON.stringify(management));
    }
    update_gpa()
    
  }
  let science = {
  "Nepali": [0, 0, 75,25,2.25,0.75,0],
  "English": [0, 0, 75,25,3,1,0],
  "Physics": [0, 0, 75,25,3.75,1.25,0],
  "Chemistry": [0, 0, 75,25,3.75,1.25,0],
  "Maths": [0, 0, 75,25,3.75,1.25,0],
  "Computer": [0, 0, 50,50,2.5,2.5,0],
  "Biology": [0, 0, 75,25,3.75,1.25,0],
  "Social": [0, 0, 75,25,3.75,1.25,0]
  };
  let management = {
  "Nepali": [0, 0, 75,25,2.25,0.75,0],
  "English": [0, 0, 75,25,3,1,0],
  "Social": [0, 0, 75,25,3.75,1.25,0],
  "Economics": [0, 0, 75,25,3.75,1.25,0],
  "Account": [0, 0, 75,25,3.75,1.25,0],
  "Computer": [0, 0, 50,50,2.5,2.5,0],
  "Maths": [0, 0, 75,25,3.75,1.25,0],
  };
  let select_style='background-color: grey';
  let gpa=["4.0 or A+","3.6 or A","3.2 or B+","2.8 or B","2.4 or C+","2.0 or C","1.6 or D"]
  function update_gpap(event){
    const selected_value=event.target.value;
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
  function calculate_gpa(event){

    const selected_value=event.target.value;
    
    
    const classarr=event.target.className.split(" ");
    const selected_class=classarr[0].toString().trim();
    let marks_to_gpa_result=marks_to_gpa(selected_class,parseInt(classarr[1]),selected_value);
    if(classarr[1]=="2")
    {
      subjects[selected_class].splice(1, 1, marks_to_gpa_result);
    }
    if(classarr[1]=="3")
    {
      subjects[selected_class].splice(0, 1, marks_to_gpa_result);
    }
    always_true=!always_true
    update_gpa()
    


  }

  function marks_to_gpa(subject_name,position,value){
      if (((90/100) * subjects[subject_name][position]) <= value) {
      return 4
        }
        if (((90/100) * subjects[subject_name][position]) > value && value >= ((80/100) * subjects[subject_name][position])) {
      return 3.6;
      }

      if (((80/100) * subjects[subject_name][position]) > value && value >= ((70/100) * subjects[subject_name][position])) {
        return 3.2;
      }
      if (((70/100) * subjects[subject_name][position]) > value && value >= ((60/100) * subjects[subject_name][position])) {
        return 2.8;
      }
      if (((60/100) * subjects[subject_name][position]) > value && value >= ((50/100) * subjects[subject_name][position])) {
        return 2.4;
      }
      if (((50/100) * subjects[subject_name][position]) > value && value >= ((40/100) * subjects[subject_name][position])) {
        return 2;
      }
      if (((40/100) * subjects[subject_name][position]) > value && value >= ((35/100) * subjects[subject_name][position])) {
        return 1.6;
      }
      if(value===""){
        return 0;
      }
      else
      {
        return null
      }
      
  }
    


  var calculated_gpa;
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
    eachsubjectgpa()
  }
  function eachsubjectgpa(){
    for (const subject of Object.keys(subjects)) {
      let val=((subjects[subject][0]*subjects[subject][5])+(subjects[subject][1]*subjects[subject][4]))/(subjects[subject][4]+subjects[subject][5]);
      subjects[subject][6]=getGPA(val);
      
  }
  console.log(getGPA(3.8))
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
  .go_back{
    position: absolute;
    left:30px;
  }

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
  .glow {
  /* font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 1.4rem;
  margin-bottom: -8px;
  animation: glow 1s ease-in-out infinite alternate; */
  font-size: 3em;
  color: #fff;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}
@keyframes glow {
  from {
    text-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #0077be, 0 0 16px #0077be, 0 0 20px #0077be, 0 0 25px #0077be, 0 0 30px #0077be;
  }
  
  to {
    text-shadow: 0 0 4px #fff, 0 0 8px #00bfff, 0 0 12px #00bfff, 0 0 16px #00bfff, 0 0 20px #00bfff, 0 0 25px #00bfff, 0 0 30px #00bfff;
  }
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
  #combo{
    margin:0px 7px;
  }

  #text_box{
    width: 36px;
    height: 29px;
    position: relative;
    padding: 0 9px;
    margin: 0 0 0 9px;
    background-color: rgba(194, 136, 219, 0.808);
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.4em;
    border: none;
    border-radius: 23px;
  }
  .outof{
    font-size: 1.6em;
    position: relative;
    top:3px;
    margin-right: 10px;
  }

  .banner{
    padding-top: 30px;
    width: 100%;
    height: 100%;
    max-width: 600px;
    /* display: flex; */
    /* justify-content: center; */
    align-items: center;
  }
  .banner img{
    width: 100%;
    height: 100%;
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
<h2 ><i style="font-weight:100">Please enter marks for only subjects that you have taken.</i></h2>
<div id="changing">
  {#each Object.keys(subjects) as subject}
  <div id="combo">
  <h2 class="subject_name">{subject}</h2>
  <div id="each_subject">
  <h3>Practical :</h3>
  <input type="text" id="text_box" class={subject+' 3'} on:change={calculate_gpa}><h2 class="outof">/{subjects[subject][3]}</h2>
  <h3>Theory :</h3>
    <input type="text" id="text_box" class={subject+' 2'} on:change={calculate_gpa}><h2 class="outof">/{subjects[subject][2]}</h2>
  </div>
  </div>
  {/each}
  </div>

{/if}


{#if calculated_gpa!== undefined}
    <h2 class="glow">GPA: {Math.trunc(calculated_gpa * 1000) / 1000}</h2>
    {#if always_true===true}
    {#each Object.keys(subjects) as subject}
    {#if subjects[subject][0] === null || subjects[subject][1] === null}
      <h2 style="color:rgb(173 26 26);">Oops you are NG in {subject}</h2>
    {:else if subjects[subject][0] !== 0 && subjects[subject][1] !== 0}
      <h2 style="color:rgb(34, 163, 23);">{subject} : {subjects[subject][6]}</h2>    
    {/if}

    {/each}
    {/if}
    {#if always_true===false}
    {#each Object.keys(subjects) as subject}
    {#if subjects[subject][0] === null || subjects[subject][1] === null}
      <h2 style="color:rgb(173 26 26);">Oops you are NG in {subject}</h2>
      {:else if subjects[subject][0] !== 0 && subjects[subject][1] !== 0}
      <h2 style="color:rgb(34, 163, 23);">{subject} : {subjects[subject][6]}</h2>
    {/if}
    {/each}
    {/if}
{/if}

{#if choosen_course==="science" }
<a href="https://www.facebook.com/aakhyaanacademy">
  <img src={banner} class="banner" alt="aakhyan academy ">
</a>
{/if}


