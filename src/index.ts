import readline from 'readline';
import { getMoves } from './Piece/piece';
import { renderBoard } from './board';

function ask(query: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans.trim());
  }));
}

(async () => {
  console.log("♟️ Welcome to Chess Move Calculator ♟️ \n");
  console.log("Calculate valid moves for a chess piece on an empty board.\n");

  const piece = (await ask("Enter piece (e.g., King, Queen, Pawn): ")).toLowerCase();
  const position = (await ask("Enter position | A-H & 1-8 | (e.g., D5): ")).toUpperCase();

  const moves = getMoves(piece, position);
  if (!moves.length) {
    console.log(`⚠️ No valid moves found for ${piece} at ${position}`);
  } else {
    console.log(`\n🧠 Valid moves for White ${piece.charAt(0).toUpperCase() + piece.slice(1)} at ${position}:`);
    renderBoard(piece, position, moves);
    console.log("→ " + moves.join(", "));
  }
})();