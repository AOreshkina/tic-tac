
  let the_buttons =  [];
  
  let choise;
  let first_player;
  let second_player;

 function ready() {

  the_buttons = document.getElementsByClassName("buttons");
  let player_robot = document.getElementById("button_ii");
  let player_human = document.getElementById("button_human");


/*function disabledButtons(){
  if (choise==="Robot"){
  the_buttons[1].setAttribute("class","disabled");
  }
  if(choise==="Human"){
    the_buttons[0].setAttribute("class","disabled");
   }
}*/
    
  

  the_buttons[0].onclick = choiseRobot;
  the_buttons[1].onclick = choiseHuman;

  function choiseRobot() {
    
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    player_human.disabled = true; 
   // player_human.classList.add("disabled");
    choise = 'robot';
    console.log(choise);
   // choise = "Robot";  
  }

  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    player_robot.disabled = true; 
   // player_robot.classList.add("disabled");
    choise = 'human';
    console.log(choise);
  }
 
 //chooseHuman.getElementsByClassName('buttons').onclick = function(){alert("ROBOT")};
  
 
// document.getElementsByClassName('choose-robot').click = function(){alert("ROBOT")};
 // let imageRobot = chooseRobot.getElementsByTagName('img');
  //let buttonHuman =chooseHuman.getElementsByClassName('buttons').onclick = unction(){alert("ROBOT")};
 // buttonHuman.click()
 //   alert('Cgfcb,kkk!');
 //  imageRobot.setAttribute(`class`, `=.\img\you.jpg`);
 // }

 // alert("HELLO!");*
 
}
 
ready();