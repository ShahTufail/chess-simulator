import readline from 'readline';
import { getMoves } from './pieces';

function ask(query: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans.trim());
  }));
}

(async () => {
  const piece = (await ask("Enter piece (e.g., King, Queen, Pawn): ")).toLowerCase();
  const position = (await ask("Enter position (e.g., D5): ")).toUpperCase();

  const moves = getMoves(piece, position);
  if (!moves.length) {
    console.log(`⚠️ No valid moves found for ${piece} at ${position}`);
  } else {
    console.log(`\n🧠 Valid moves for ${piece.charAt(0).toUpperCase() + piece.slice(1)} at ${position}:`);
    console.log("→ " + moves.join(", "));
  }
})();