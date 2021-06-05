
  let the_buttons =  [];
  
  let choise;
  let first_player;
  let second_player;
  let count = 0;
  let counter_on_page = document.getElementById("counter");
 function ready() {

  the_buttons = document.getElementsByClassName("buttons");
  let player_robot = document.getElementById("button_ii");
  let player_human = document.getElementById("button_human");
  let your_symbol = document.getElementById("victoria");
  let tabels = [];
  tabels= document.getElementsByClassName("void");
 // let view_table_element = document.getElementsByClassName("void");


  the_buttons[0].onclick = choiseRobot;
  the_buttons[1].onclick = choiseHuman;

  function choiseRobot() {
    
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    player_human.disabled = true; 
    your_symbol.innerHTML=`<div id="victory_text">Ты играешь ноликами</div>`;//<img src=".\\img\\yourchoice2.jpg" alt="" id="symbol_zero">
    choise = 'robot';
    console.log(choise);
  }
  

  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    player_robot.disabled = true; 
    your_symbol.innerHTML=`<div id="victory_text">Ты играешь крестиками</div>`;
    choise = 'human';
    console.log(choise);
    
  }

 
  document.getElementById("a1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("a1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
    
           
  document.getElementById("a2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("a2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
      
  document.getElementById("a3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("a3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}

  document.getElementById("b1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("b1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
    
           
  document.getElementById("b2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("b2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
      
  document.getElementById("b3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("b3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}

document.getElementById("c1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("c1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
    
           
  document.getElementById("c2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("c2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
      
  document.getElementById("c3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        count=count+1;
      }else{
        document.getElementById("c3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        count=count+1;

      }}}
 
          }ready();