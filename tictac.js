
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
  //let tabels = [];
  let opponent = document.getElementById("choose_opponent");
  tabels= document.getElementsByClassName("void");
 // let view_table_element = document.getElementsByClassName("void");

  let winners_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  the_buttons[0].onclick = choiseRobot;
  the_buttons[1].onclick = choiseHuman;

  function choiseRobot() {
    
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    player_human.disabled = true; 
    player_robot.disabled = true; 
    opponent.innerText=`Статус игры`;
    the_buttons[1].innerText=`Ты`;
    your_symbol.innerHTML=`<div id="victory_text">Ты играешь ноликами</div>`;//<img src=".\\img\\yourchoice2.jpg" alt="" id="symbol_zero">
    choise = 'robot';
    console.log(choise);
  }
  

  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    player_robot.disabled = true; 
    player_human.disabled = true;
    opponent.innerText=`Статус игры`;
    the_buttons[0].innerText=`Ты`;
    your_symbol.innerHTML=`<div id="victory_text">Ты играешь крестиками</div>`;
    choise = 'human';
    console.log(choise);
    
  }

  

  function checkingTheWinnerForHuman(){
    let row_1 = winners_arr[0]+winners_arr[1]+winners_arr[2];
    let row_2 = winners_arr[3]+winners_arr[4]+winners_arr[5];
    let row_3 = winners_arr[6]+winners_arr[7]+winners_arr[8];
    let column_1 = winners_arr[0]+winners_arr[3]+winners_arr[6];
    let column_2 = winners_arr[1]+winners_arr[4]+winners_arr[7];
    let column_3 = winners_arr[2]+winners_arr[5]+winners_arr[8];
    let diagonal_1 = winners_arr[0]+winners_arr[4]+winners_arr[8];
    let diagonal_2 = winners_arr[2]+winners_arr[4]+winners_arr[6];
    if ((row_1===6)||(row_2===6)||(row_3===6)||(column_1===6)||(column_2===6)||(column_3===6)||(diagonal_1===6)||(diagonal_2===6)){
      your_symbol.innerHTML=`<div id="victory_text">Ты выиграл!</div>`;
    } else if ((row_1==27)||(row_2==27)||(row_3==27)||(column_1==27)||(column_2==27)||(column_3==27)||(diagonal_1==27)||(diagonal_2==27)){
      your_symbol.innerHTML=`<div id="victory_text">Выиграл твой друг!</div>`;
    } else {
      your_symbol.innerHTML=`<div id="victory_text">Ничья!</div>`;
    }

      }
    

 
  let table = document.getElementById("table_c");

  table.onclick = function(event) {
    let target = event.target; // где был клик?
  
    if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует
  
    //highlight(target); // подсветить TD

    if(choise==='human'){
      if(count%2==0){
       target.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
       let target_id = target.getAttribute("id");
       let num_array = Number(target_id) ;
       winners_arr[num_array] = 2;
       console.log(winners_arr);
       target.disabled = true;
        count=count+1;
        checkingTheWinnerForHuman();
        //tabel_elem[0][0]='iscross';
        //checkingTheWinner();
      }else{
        target.innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        target.setAttribute("contenteditable","false");
        let target_id = target.getAttribute("id");
       let num_array = Number(target_id) ;
       winners_arr[num_array] = 9;
       console.log(winners_arr);
        count=count+1;
        target.disabled = true;
     //  tabel_elem[0][0]='isnull';
       // checkingTheWinner();
       checkingTheWinnerForHuman();

      }

  }};
  


 
 
          }ready();