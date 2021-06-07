
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


  the_buttons[0].onclick = choiseRobot;
  the_buttons[1].onclick = choiseHuman;

  function choiseRobot() {
    
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    player_human.disabled = true; 
    opponent.innerText=`Статус игры`;
    the_buttons[1].innerText=`Ты`;
    your_symbol.innerHTML=`<div id="victory_text">Ты играешь ноликами</div>`;//<img src=".\\img\\yourchoice2.jpg" alt="" id="symbol_zero">
    choise = 'robot';
    console.log(choise);
  }
  

  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    player_robot.disabled = true; 
    opponent.innerText=`Статус игры`;
    the_buttons[0].innerText=`Ты`;
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
  
    if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует
  
    //highlight(target); // подсветить TD

    if(choise==='human'){
      if(count%2==0){
       target.innerHTML=`<img src=".\\img\\cross1.jpg" alt="" class="void">`;
       target.disabled = true;
        count=count+1;
        //tabel_elem[0][0]='iscross';
        //checkingTheWinner();
      }else{
        target.innerHTML=`<img src=".\\img\\zero1.jpg" alt="" class="void">`;
        target.setAttribute("contenteditable","false");
        count=count+1;
        target.disabled = true;
     //  tabel_elem[0][0]='isnull';
       // checkingTheWinner();

      }

  }};
  


 
 
          }ready();