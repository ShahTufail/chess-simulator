import  King  from "./models/King";
import Queen  from "./models/Queen";
import { Pawn } from "./models/Pawn";

const input = process.argv[2]; // e.g. "Queen,E4"
if (!input) throw new Error("Please provide input like 'King,D5'");

const type = 'King'
const col = 'D';
const row = '1'

let piece;
switch (type.toLowerCase()) {
  case "king": piece = new King(col, row); break;
  case "queen": piece = new Queen(col, row); break;
  case "pawn": piece = new Pawn(col, row); break;
  default: throw new Error("Unsupported piece type");
}

console.log(piece.getMoves().join(", "));