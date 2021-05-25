
 function ready() {

  var player_robot = document.getElementsByClassName("choose-robot");
  var player_human = document.getElementsByClassName("choose-human");
  let choise;
  let first_player;
  let second_player;

    
  function choiseRobot() {
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
    //document.getElementsById("button_ii").setAttribute("id", "deactive1");
   // document.getElementsById("button_human").setAttribute("id", "deactive2");

    choise = "Robot";
  }
  function choiseHuman() {
    document.getElementById("robotjpg").setAttribute("src", ".\\img\\you.jpg");
    choise = "human";
  }

  document.getElementById("button_ii").onclick = choiseRobot;
  document.getElementById("button_human").onclick = choiseHuman;

  if (choise==="robot"){
    console.log('Here');
    player_human.getElementsByClass("buttons").setAttribute("id", " ");
  }
 
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