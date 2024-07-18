let num = 0;

function add() {
  //Escribir tu código que aumenta
  num++;
  document.querySelector("#number").innerHTML = num;
}

function reset() {
  //Escribir tu código que hace un reset a 0
  num = 0;
  document.querySelector("#number").innerHTML = num;
}

function decrease() {
  //Escribir tu código que resta
  if(num>0){
    num--;
  }
  document.querySelector("#number").innerHTML = num;
  
}

export { add, reset, decrease };
