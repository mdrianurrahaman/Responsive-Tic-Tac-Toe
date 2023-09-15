let board  = ["","","","","","","","",""];

let currentPlayer = "X";

let cells = document.querySelectorAll(".cell");

let resetButton = document.querySelector('#reset');

let messageElement = document.querySelector("#message");


// add event listener to itself to each cell 

cells.forEach((cell , index) =>{
   cell.addEventListener("click", () => {
    if(board[index] === "" && !isGameOver()){
        board[index] = currentPlayer;
        cell.classList.add
        (currentPlayer.toLowerCase());
        cell.innerHTML = currentPlayer;


   if(isGameOver()){

    messageElement.innerHTML = currentPlayer + " wins! ";
    cells.forEach((cell) =>
    cell.removeEventListener("click",handleCellClick));

   }

   else if(!board.includes("")){
    // update the msg game is draw

    messageElement.innerHTML = "Its's  a draw! ";
   }else{
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    messageElement.innerHTML = currentPlayer + " 's turn"
   }

    }
   });
});

resetButton.addEventListener("click",() => {
    board = ["" , "" , "" , "" , "" , "" ,"" , "","" ];
    currentPlayer = "X";

    cells.forEach((cell) =>{
        cell.classList.remove("x" , "o");
        cell.innerHTML = "" ;
    } );

 messageElement.innerHTML = "X's Turn" ; 
 cells.forEach((cell) => cell.addEventListener("click",handleCellClick));


})

function isGameOver(){

//   define the possible winning combinations 

const winningCombos = [
  
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 
];
return winningCombos.some((combo) => {


    return (

    board[combo[0]] !== ""&& 
    board[combo[0]] === board
    [combo[1]]&&
    board[combo[1]] === board
     [combo[2]]   

    );
}) ;

}


function handleCellClick(){
    console.log("Cell clicked");
}