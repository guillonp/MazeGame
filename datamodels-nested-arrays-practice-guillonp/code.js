 /////////////SHOWING MAZE ON SCREEN///////////////
const map = [
  " WWWWWWWWWWWWWWWWWWWWW ",
  " W   W     W     W   W ",
  " W W W WWW WWWWW W WWW ",
  " W W W  W      W W   W ",
  " W WWWWWWW W WWW W W W ",
  " W         W     W W W ",
  " W WWW WWWWW WWWWW W W ",
  " W W   W   W W     W W ",
  " W WWWWW W W W WWW W FB",
  "LS     W W W W W W WWW ",
  " WWWWW W W W W W W W W ",
  " W     W W W   W W W W ",
  " W WWWWWWW WWWWW W W W ",
  " W       W       W   W ",
  " WWWWWWWWWWWWWWWWWWWWW "
];

let divCol
let divCells
let winningDiv
for(let i = 0; i < map.length; i++){
  divCol = document.createElement("div")
  document.body.append(divCol)
  divCol.classList.add("rows")
  for(let j = 0; j < map[i].length; j++){
    divCells = document.createElement("div")
    divCol.append(divCells)
    divCells.innerText = map[i][j]
    divCells.classList.add("cells")

    if(divCells.innerText === "W"){
      divCells.classList.add("border")
      divCells.innerText = ""
      divCells.style.backgroundColor = "blue"
    }

    else if(divCells.innerText === "S" ) {
      divCells.classList.add("start")
      divCells.innerText = ""
      
    }

    else if(divCells.innerText === "F"){
      divCells.classList.add("finish")
      divCells.innerText = ""
    }
    else if(divCells.innerText === "L"){
      divCells.classList.add("border")
      divCells.innerText = ""
    }

    else if(divCells.innerText === "B"){
      divCells.classList.add("border")
      divCells.innerText = ""
    }
  }

}
/////////////////////////////////MOVEMENT OF THE PLAYER////////////////////////////////////////////////
let boxTop = 341;
let boxLeft = 43;

let player = document.getElementById("player")
let coloredCell = document.querySelector(".cells")
let invPlayer = document.getElementById("invPlayer")
let rightLimit = document.getElementById("rightLimit")

function onKeyPress(event){
  

  switch(event.code){
      case "ArrowDown":
        
          boxTop+=35    
          player.style.top = boxTop + "px"
          break;

      case "ArrowUp":
          boxTop-=35
          player.style.top = boxTop + "px"

      break;

      case "ArrowLeft":
          boxLeft-=35
          player.style.left = boxLeft + "px"
 
      break;

      case "ArrowRight":
          boxLeft+=35
          player.style.left = boxLeft + "px"

      break;
    
  }
  //console.log(player.getBoundingClientRect())
  
  let playerPos = player.getBoundingClientRect()
  let start = document.querySelector(".start")  
  let finish = document.querySelector(".finish")
  let finishPos = finish.getBoundingClientRect()
  let border = document.querySelectorAll(".border") 

  for(let limit of border){             
    let limits = limit.getBoundingClientRect()
    if(JSON.stringify(limits) === JSON.stringify(playerPos)){
      switch(event.code){
        case "ArrowDown" :
        boxTop-=35    
        player.style.top = boxTop + "px"
      break;

        case "ArrowUp":
          boxTop+=35
          player.style.top = boxTop + "px"
      break;

      case "ArrowLeft":
        boxLeft+=35
        player.style.left = boxLeft + "px"
      break;

      case "ArrowRight":
        boxLeft-=35
        player.style.left = boxLeft + "px"
    break;
  
      }

    }

    else if(JSON.stringify(finishPos) === JSON.stringify(playerPos)){  
        winningDiv = document.createElement("div")
        document.body.append(winningDiv)
        winningDiv.classList.add("winningDiv")
        winningDiv.innerText = "YOU WIN!!!"
        break;

    }
  }

}


document.addEventListener("keydown", onKeyPress)





