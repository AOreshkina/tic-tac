
 function ready() {

  /*(".choose-human .buttons").click(function(){ // задаем функцию при нажатиии на элемент <button>
    ; // вызываем событие click на элементе <div>
  });*/

    
  function displayDate() {
    document.getElementById("humanjpg").setAttribute("src", ".\\img\\you.jpg");
  }

  document.getElementById("button_ii").onclick = displayDate;
 
 document.getElementsByClassName('choose-robot').click = function(){alert("ROBOT")};
 // let imageRobot = chooseRobot.getElementsByTagName('img');
  //let buttonHuman =chooseHuman.getElementsByClassName('buttons');
 // buttonHuman.click()
 //   alert('Cgfcb,kkk!');
 //  imageRobot.setAttribute(`class`, `=.\img\you.jpg`);
 // }

 // alert("HELLO!");*
 
}
 
ready();