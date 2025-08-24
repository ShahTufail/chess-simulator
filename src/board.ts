export function renderBoard(piece: string, pos: string, moves: string[]): void {
  console.log("\n");

  const p = piece === 'king' ? '♚' : piece === 'queen' ? '♛' : piece === 'pawn' ? '♟️' : piece;

  for (let row = 8; row >= 1; row--) {
    let line = "";
    for (let col = 0; col < 8; col++) {
      const square = String.fromCharCode(65 + col) + row;

      if (square === pos) {
        line += `${p.padEnd(4)}`; // Show the piece
      } else if (moves.includes(square)) {
        line += `*   `; // Highlight move
      } else {
        line += `${square.padEnd(4)}`; // Default label
      }
    }
    console.log(line.trim());
  }

  console.log("\n");
}