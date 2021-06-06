
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

  let tabel_elem =[ ['n','n','n'],
                    ['n','n','n'],
                    ['n','n','n']
                  ];

  function checkingTheWinner(){
    if((tabel_elem[0][0]==tabel_elem[0][1]==tabel_elem[0][2])||(tabel_elem[1][0]==tabel_elem[1][1]==tabel_elem[1][2])||(tabel_elem[2][0]==tabel_elem[2][1]==tabel_elem[2][2])||(tabel_elem[0][0]==tabel_elem[1][0]==tabel_elem[2][0])||(tabel_elem[0][1]==tabel_elem[1][1]==tabel_elem[2][1])||(tabel_elem[0][2]==tabel_elem[1][2]==tabel_elem[2][2])||(tabel_elem[0][0]==tabel_elem[1][1]==tabel_elem[2][2])||(tabel_elem[0][2]==tabel_elem[1][1]==tabel_elem[2][0])){
      if(tabel_elem[0][0]=='iscross'){
       console.log('rtrtrtrtrt');
      }
    }

  }

 
  let table = document.getElementById("table_c");

  table.onclick = function(event) {
    let target = event.target; // где был клик?
  
    if (target.tagName != 'div') return; // не на TD? тогда не интересует
  
    highlight(target); // подсветить TD
  };
  


  document.getElementById("a1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("a1").setAttribute("id", "a10");
        count=count+1;
        tabel_elem[0][0]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("a1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("a1").setAttribute("id", "a10");
        count=count+1;
        tabel_elem[0][0]='isnull';
        checkingTheWinner();

      }}}
    
           
  document.getElementById("a2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("a2").setAttribute("id", "a20");
        count=count+1;
        tabel_elem[0][1]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("a2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("a2").setAttribute("id", "a20");
        count=count+1;
        tabel_elem[0][1]='isnull';
        checkingTheWinner();

      }}}
      
  document.getElementById("a3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("a3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("a3").setAttribute("id", "a30");
        count=count+1;
        tabel_elem[0][2]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("a3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("a3").setAttribute("id", "a30");
        count=count+1;
        tabel_elem[0][2]='isnull';
        checkingTheWinner();

      }}}

  document.getElementById("b1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("b1").setAttribute("id", "b10");
        count=count+1;
        tabel_elem[1][0]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("b1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("b1").setAttribute("id", "b10");
        count=count+1;
        tabel_elem[1][0]='isnull';
        checkingTheWinner();

      }}}
    
           
  document.getElementById("b2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("b2").setAttribute("id", "b20");
        count=count+1;
        tabel_elem[1][1]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("b2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("b2").setAttribute("id", "b20");
        count=count+1;
        tabel_elem[1][1]='isnull';
        checkingTheWinner();

      }}}
      
  document.getElementById("b3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("b3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("b3").setAttribute("id", "b30");
        count=count+1;
        tabel_elem[1][2]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("b3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("b3").setAttribute("id", "b30");
        count=count+1;
        tabel_elem[1][2]='isnull';
        checkingTheWinner();
      }}}

document.getElementById("c1").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c1").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("c1").setAttribute("id", "c10");
        count=count+1;
        tabel_elem[2][0]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("c1").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("c1").setAttribute("id", "c10");
        count=count+1;
        tabel_elem[2][0]='isnull';
        checkingTheWinner();

      }}}
    
           
  document.getElementById("c2").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c2").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("c2").setAttribute("id", "c20");
        count=count+1;
        tabel_elem[2][1]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("c2").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("c2").setAttribute("id", "c20");
        count=count+1;
        tabel_elem[2][1]='isnull';
        checkingTheWinner();

      }}}
      
  document.getElementById("c3").onclick = function(){
    if(choise==='human'){
      if(count%2==0){
        document.getElementById("c3").innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
        document.getElementById("c3").setAttribute("id", "c30");
        count=count+1;
        tabel_elem[2][2]='iscross';
        checkingTheWinner();
      }else{
        document.getElementById("c3").innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        document.getElementById("c3").setAttribute("id", "c30");
        count=count+1;
        tabel_elem[2][2]='isnull';
        checkingTheWinner();

      }}}
 
          }ready();