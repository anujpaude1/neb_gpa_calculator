<script>
    import { course } from '.././stores.js';
    function goToPage(course1) {
    course.update(val => val=course1)
    }
    var className1="upward"
    var show_info=true
    function change_info(){
        show_info=!show_info
        if (show_info===true){
            className1="upward"
        }
        else{
            className1="right"
        }
    }
</script>

<body>
<h2>Choose Stream</h2>
<div class="buttons">
<button on:click={() => goToPage('science')}>Science</button>
<button on:click={() => goToPage('management')}>Management</button>
</div>
<div class="trigger_info">
<div id="arrow" on:click={change_info}><div class="{className1}"></div></div><h2 on:click={change_info} class="how">How does GPA calculation work ?</h2>
</div>
{#if show_info===true}
<div class="info">
<h3>Overall GPA for NEB class 12 is calculated by</h3> <div id="math_formula">  <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><munderover accent='false' accentunder='false'><mo>&#x2211;</mo><mrow/><mrow/></munderover><mi>G</mi><mi>P</mi><mi>A</mi><mo>(</mo><mi>T</mi><mi>h</mi><mo>)</mo><mo>&#xd7;</mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo>&#xA0;</mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi><mo>(</mo><mi>T</mi><mi>h</mi><mo>)</mo><mo>+</mo><mi>G</mi><mi>P</mi><mi>A</mi><mo>(</mo><mi>P</mi><mi>r</mi><mo>)</mo><mo>&#xA0;</mo><mo>&#xd7;</mo><mo>&#xA0;</mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo>&#xA0;</mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi><mo>(</mo><mi>P</mi><mi>r</mi><mo>)</mo></mrow><mrow><mi>T</mi><mi>o</mi><mi>t</mi><mi>a</mi><mi>l</mi><mo>&#xA0;</mo><mi>C</mi><mi>r</mi><mi>e</mi><mi>d</mi><mi>i</mi><mi>t</mi><mo>&#xA0;</mo><mi>H</mi><mi>o</mi><mi>u</mi><mi>r</mi></mrow></mfrac></math> </div>
<h3 class="long_text">It was quite easy to calculate GPA till grade ten as credit hour of both practical and theory used to be same. But in grade 12 it may vary according to subjects. For eg. credit hour of Nepali(Theory) is 2.25 but Nepali(Practical) is 0.75 and for English(Therory) credit hour is 3 but for English(Practical) is 1. In order to get A+ in Nepali(Theory) you need to get 90% of 75 which is 67.5 and for Nepali(Practical) 90% of 25 = 22.5 is required. </h3>
<table class="customTable">
  <tbody><tr>
      <th>
          Grade
      </th>
  
      <th>
          Scale
      </th>
  
      <th>
          Scale 2
      </th>
  
      <th>
          Grade Description
      </th>
  
  
      <th>
           Grade
      </th>
  
  
  </tr>
  <tr>
                      <td align="center">
              A+  
          </td>
                      <td style="white-space:nowrap;">
              90.00 - 100.00
          </td>
                      <td style="white-space:nowrap;">
              4.00
          </td>
                      <td>
              Outstanding
          </td>
                                  <td align="center">
              A+  
          </td>
                          </tr>
  <tr>
                      <td align="center">
              A   
          </td>
                      <td style="white-space:nowrap;">
              80.00 - 89.00
          </td>
                      <td style="white-space:nowrap;">
              3.60
          </td>
                      <td>
              Excellent
          </td>
                                  <td align="center">
              A   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              B+  
          </td>
                      <td style="white-space:nowrap;">
              70.00 - 79.00
          </td>
                      <td style="white-space:nowrap;">
              3.20
          </td>
                      <td>
              Very Good
          </td>
                                  <td align="center">
              B+   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              B   
          </td>
                      <td style="white-space:nowrap;">
              60.00 - 69.00
          </td>
                      <td style="white-space:nowrap;">
              2.80
          </td>
                      <td>
              Good
          </td>
                                  <td align="center">
              B   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              C+  
          </td>
                      <td style="white-space:nowrap;">
              50.00 - 59.00
          </td>
                      <td style="white-space:nowrap;">
              2.40
          </td>
                      <td>
              Above Average
          </td>
                                  <td align="center">
              C+   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              C   
          </td>
                      <td style="white-space:nowrap;">
              40.00 - 49.00
          </td>
                      <td style="white-space:nowrap;">
              2.00
          </td>
                      <td>
              Average
          </td>
                                  <td align="center">
              C   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              D+  
          </td>
                      <td style="white-space:nowrap;">
              30.00 - 39.00
          </td>
                      <td style="white-space:nowrap;">
              1.80
          </td>
                      <td>
              Below Average
          </td>
                                  <td align="center">
              D+   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              D   
          </td>
                      <td style="white-space:nowrap;">
              20.00 - 29.00
          </td>
                      <td style="white-space:nowrap;">
              1.60
          </td>
                      <td>
              Above Insufficient
          </td>
                                  <td align="center">
              D   
          </td>
                          </tr>
  <tr>
                      <td align="center">
              E   
          </td>
                      <td style="white-space:nowrap;">
              0.00 - 19.00
          </td>
                      <td style="white-space:nowrap;">
              0.80
          </td>
                      <td>
              Insufficient
          </td>
                                  <td align="center">
              F   
          </td>
                          </tr>
  </tbody></table>



</div>
{/if}
</body>


<style>
    .trigger_info{
        display: flex;
    }
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
    .how{
        cursor: pointer;
        font-weight: 400;
    }
    #arrow{
        background: black;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        margin: 4px;
        transition: 0.4s ease;
        cursor: pointer;
        position: relative;
        top: 27px;
        left: -8px;
    }
    #arrow:hover{
        box-shadow: 10px red;
    }
    .right,.upward{
        height: 40%;
        width: 40%;
        border-top: 4px solid white;
        border-left: 4px solid white;
        transform: rotate(45deg);
        z-index: 2;
        position: relative;
    }
    .right{
        transform: rotate(135deg);
        top: 8px;
        left: 8px;
    }
    .upward{
        transform: rotate(45deg);
        top: 11px;
        left: 8px;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .long_text{
        width:60%;
        margin-bottom: 20px;
    }
    #math_formula{
        margin-bottom: 20px;
    }
    .customTable{
        font-size: 1.1rem;
    }
    @media screen and (max-width: 430px) {
  /* CSS rules for devices below width 420 */
    .how{
        font-size: 1.3em;
    }
    #arrow{
        position: relative;
        top: 11px;
        left: -4px;
    }
    .upward{
        top: 11px;
        left: 8px;
    }
    h3{
        font-size: 1.3em;
    }
    .customTable,.long_text{
        margin: 0;
        width: 100%;
        font-weight: 300;
        margin-bottom: 20px;
    }
    }
    h3{
        font-weight: 300;
    }
</style>