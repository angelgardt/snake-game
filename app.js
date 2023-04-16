var GAME_BOARD_SIZE = 16
var CELL_SIZE = 16


function drawGameField() {
    var canvas = document.getElementById("game-board");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        canvas.width = CELL_SIZE*GAME_BOARD_SIZE;
        canvas.height = CELL_SIZE*GAME_BOARD_SIZE;

        for (let i=0; i<GAME_BOARD_SIZE; i++) {
            for (let j=0; j<GAME_BOARD_SIZE; j++) {
                if (i%2==1 && j%2==0 || i%2==0 && j%2==1) {
                    ctx.fillStyle = "rgb(30,30,30)";
                    ctx.fillRect (i*CELL_SIZE, j*CELL_SIZE, CELL_SIZE, CELL_SIZE);
                } else  {
                    ctx.fillStyle = "rgb(40,40,40)";
                    ctx.fillRect (i*CELL_SIZE, j*CELL_SIZE, CELL_SIZE, CELL_SIZE);
                }
            }
        }
    }
}
