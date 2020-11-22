
document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded verfica quando a página carregar

    let squares = document.querySelectorAll(".square"); //Retorna todos objetos de determinado seletor.

    squares.forEach((square) => { //Passa por todos os squares
        square.addEventListener("click", handleClick); //adiciona o onclick em todos.
    })

})

function handleClick(event){
    
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(()=> {
            let player='';
            if(playerTime == 0){
                player = "Escudo"
            }
            else{
                player = "Espada"
            }
            alert("O Jogo Acabou - O Vencedor foi "+ player);
        }, 10)
        
    }
    else{
        if(tie){
            setTimeout(() => {
                alert("EMPATE - Ninguém ganhou!")
            }, 10)
        } 
    }

    
    updateSquare(position);
    
}

function updateSquare(position){
    //Por algum motivo ele identifica o x e o como click, e manda um '' de position.
    if(position != ''){
        let square = document.getElementById(position.toString());
        let symbol = board[position];
    
        square.innerHTML = `<div class='${symbol}'></div>`
    }
    
    
    
}

function reset(){
    onReset();
    clearStage();
}

function clearStage(){
    let squares = document.querySelectorAll(".square"); //Retorna todos objetos de determinado seletor.

    squares.forEach((square) => { //Passa por todos os squares
        square.innerHTML = '<div></div>'
    })
}