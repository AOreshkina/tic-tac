
  let player_robot = document.getElementsByClassName("choose-robot");
  let player_human = document.getElementsByClassName("choose-human");
  let choise;
  let first_player;
  let second_player;

 function ready() {


function disabledButtons(){
  if (choise==="Robot"){
   // console.log('Here');
   player_human.getElementsById("button_human").setAttribute("id","34");
  }
}
    
  function choiseRobot() {
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    choise = "Robot";
    disabledButtons();
  }
  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    choise = "human";
  }

  document.getElementById("button_ii").onclick = choiseRobot;
  document.getElementById("button_human").onclick = choiseHuman;

  
 
// document.getElementsByClassName('choose-robot').click = function(){alert("ROBOT")};
 // let imageRobot = chooseRobot.getElementsByTagName('img');
  //let buttonHuman =chooseHuman.getElementsByClassName('buttons');
 // buttonHuman.click()
 //   alert('Cgfcb,kkk!');
 //  imageRobot.setAttribute(`class`, `=.\img\you.jpg`);
 // }

 // alert("HELLO!");*
 
}
 
ready();