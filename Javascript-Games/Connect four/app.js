document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player');
    let currentPlayer = 1;
  
    const width = 7; // 7 columns
    const height = 6; // 6 rows
  
    // All possible winning combinations
    const winningArrays = [];
  
    // Generate all horizontal wins
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width - 3; col++) {
        const start = row * width + col;
        winningArrays.push([start, start + 1, start + 2, start + 3]);
      }
    }
  
    // Generate all vertical wins
    for (let col = 0; col < width; col++) {
      for (let row = 0; row < height - 3; row++) {
        const start = row * width + col;
        winningArrays.push([start, start + width, start + width * 2, start + width * 3]);
      }
    }
  
    // Generate all diagonal wins (top-left to bottom-right)
    for (let row = 0; row < height - 3; row++) {
      for (let col = 0; col < width - 3; col++) {
        const start = row * width + col;
        winningArrays.push([start, start + width + 1, start + (width + 1) * 2, start + (width + 1) * 3]);
      }
    }
  
    // Generate all diagonal wins (top-right to bottom-left)
    for (let row = 0; row < height - 3; row++) {
      for (let col = 3; col < width; col++) {
        const start = row * width + col;
        winningArrays.push([start, start + width - 1, start + (width - 1) * 2, start + (width - 1) * 3]);
      }
    }
  
    function checkBoard() {
      for (let y = 0; y < winningArrays.length; y++) {
        const square1 = squares[winningArrays[y][0]];
        const square2 = squares[winningArrays[y][1]];
        const square3 = squares[winningArrays[y][2]];
        const square4 = squares[winningArrays[y][3]];
  
        // Check Player 1
        if (
          square1.classList.contains('player-one') &&
          square2.classList.contains('player-one') &&
          square3.classList.contains('player-one') &&
          square4.classList.contains('player-one')
        ) {
          result.innerHTML = 'Player One Wins!';
          return;
        }
  
        // Check Player 2
        if (
          square1.classList.contains('player-two') &&
          square2.classList.contains('player-two') &&
          square3.classList.contains('player-two') &&
          square4.classList.contains('player-two')
        ) {
          result.innerHTML = 'Player Two Wins!';
          return;
        }
      }
    }
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].onclick = () => {
        // Find the bottom-most available square in the column
        for (let row = height - 1; row >= 0; row--) {
          const index = row * width + (i % width); // Calculate index for the current column
  
          // Check if the square is available
          if (!squares[index].classList.contains('taken')) {
            // Assign class based on the current player
            if (currentPlayer === 1) {
              squares[index].classList.add('taken', 'player-one');
              currentPlayer = 2;
            } else {
              squares[index].classList.add('taken', 'player-two');
              currentPlayer = 1;
            }
            displayCurrentPlayer.innerHTML = currentPlayer;
            checkBoard();
            return; // Exit loop after placing the piece
          }
        }
  
        // If column is full
        alert("Invalid move! This column is full.");
      };
    }
  });
  