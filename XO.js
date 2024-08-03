let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winMsgMsgContainer= document.querySelector(".winMsg-container");
let msg = document.querySelector("#msg");

let turnX = true;
//2d array
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,5,7],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes. forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText = "X";
            turnX = false; 
        }
        else{
            box.innerText="O";
            turnX=true; 
        }
        box.disabled= true;
        checkWinner();
    });
});

const disableAll =() => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableAll =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner)=> {
    msg.innerText=`Congrulations, winner is ${winner}`; 
    winMsgMsgContainer.classList.remove("hide");
   disableAll();
};


const checkWinner = () => {
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="" &&
            pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner! ",pos1Val);
                showWinner(pos1Val);
            }
        
    }
  
};

const restartgame = () => {
    turnX=true;
    enableAll();
    winMsgMsgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", restartgame);