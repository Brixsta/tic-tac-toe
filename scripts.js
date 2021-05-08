let container = $('.container');
let body = $('body');
let playBtn = $('.playBtn');
let countdown = 9;



function createGrid () {
    
    
    let $gameResult = $('<h1></h1>', {class:'gameResult'});
    for(let i=1; i<=9; i++) {
        let $gridSquare = $('<div></div>', {class:'gridSquare', id:i});
        let $X = $('<h1></h1>', {class:'X', text:'X'});
        let $O = $('<h1></h1>', {class:'O', text:'O'});
        var counter = 0;
        $gridSquare.appendTo('.container');


        $gridSquare.click(function(event){

            // alert user if grid square is already active
            if($gridSquare.hasClass('active')){
                alert('Invalid mouse click!');
                return;
            }

            // append x or o depending on click order
            if(counter === 0 || counter % 2 === 0) {
                $gridSquare.append($X);
                $gridSquare.addClass('active');
                counter++;
            } else {
                $gridSquare.append($O);
                $gridSquare.addClass('active');
                counter++;
            }
            let arrayOfGridSquares = $('.gridSquare');

            // Conditions for X to win
            if(arrayOfGridSquares[0].textContent === 'X' && arrayOfGridSquares[1].textContent === 'X'
            && arrayOfGridSquares[2].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
                console.log('X WINS 3 ON THE TOP');
            } else if (arrayOfGridSquares[0].textContent === 'X' && arrayOfGridSquares[4].textContent === 'X'
            && arrayOfGridSquares[8].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[0].textContent === 'X' && arrayOfGridSquares[3].textContent === 'X'
            && arrayOfGridSquares[6].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[1].textContent === 'X' && arrayOfGridSquares[4].textContent === 'X'
            && arrayOfGridSquares[7].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[2].textContent === 'X' && arrayOfGridSquares[5].textContent === 'X'
            && arrayOfGridSquares[8].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[2].textContent === 'X' && arrayOfGridSquares[4].textContent === 'X'
            && arrayOfGridSquares[6].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[3].textContent === 'X' && arrayOfGridSquares[4].textContent === 'X'
            && arrayOfGridSquares[5].textContent === 'X') {
                $gameResult.appendTo('body');
                $gameResult.text('X wins!');
                $('.gridSquare').addClass('active');
            }

            // Conditions for O to win
            else if(arrayOfGridSquares[0].textContent === 'O' && arrayOfGridSquares[1].textContent === 'O'
            && arrayOfGridSquares[2].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[0].textContent === 'O' && arrayOfGridSquares[4].textContent === 'O'
            && arrayOfGridSquares[8].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[0].textContent === 'O' && arrayOfGridSquares[3].textContent === 'O'
            && arrayOfGridSquares[6].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[1].textContent === 'O' && arrayOfGridSquares[4].textContent === 'O'
            && arrayOfGridSquares[7].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[2].textContent === 'O' && arrayOfGridSquares[5].textContent === 'O'
            && arrayOfGridSquares[8].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[2].textContent === 'O' && arrayOfGridSquares[4].textContent === 'O'
            && arrayOfGridSquares[6].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            } else if (arrayOfGridSquares[3].textContent === 'O' && arrayOfGridSquares[4].textContent === 'O'
            && arrayOfGridSquares[5].textContent === 'O') {
                $gameResult.appendTo('body');
                $gameResult.text('O wins!');
                $('.gridSquare').addClass('active');
            }
            countdown--;

            // countdown for a cats game
            if(countdown === 0 && $gameResult.text().length < 1) {
                $gameResult.appendTo('body');
                $gameResult.text('Cats Game!');
            }
        });

        playBtn.click(function(event){

            return location.reload();
        });
    }  

}

createGrid();



