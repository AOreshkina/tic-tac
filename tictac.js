
  let the_buttons =  [];
  
  let choise;
  let first_player;
  let second_player;

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

  let table = document.getElementById("a1");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }

  let table = document.getElementById("a2");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  let table = document.getElementById("a3");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  let table = document.getElementById("b1");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  let table = document.getElementById("b2");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  let table = document.getElementById("b3");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  let table = document.getElementById("c1");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }

  let table = document.getElementById("c2");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }
  
  let table = document.getElementById("c3");
  table.onclick = function(){
    console.log(this)
     this.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`

  }

 /* tabels.forEach(function(item){
    if(choise==='human'){
      item.onclick=item.setAttribute("src",".\\img\\cross1.jpg")

    }
    
  })
*/

 
  /*if (choise=='robot'){
    console.log("jfgkgjfgfkg");
    
    your_symbol.innerHTML=`<img src=".\img\yourchoice2.jpg" alt="" id="symbol_zero">`;
  }*/
 
}
 
ready();