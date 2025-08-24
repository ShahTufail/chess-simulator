export function getMoves(piece: string, pos: string): string[] {
  const possibleMoves: string[] = [];
  const col = pos.charCodeAt(0) - 65; // A–H → 0–7
  const row = 8 - parseInt(pos[1]);   // 1–8 → 7–0

  const moves = (r: number, c: number) => {
    if (r >= 0 && r < 8 && c >= 0 && c < 8) {
      possibleMoves.push(String.fromCharCode(65 + c) + (8 - r));
    }
  };

  const pieceType = piece.toLowerCase();
  // assumption all pices provided are white as we are not specifying color
  
  // ♟️ Pawn ( moving up)
  if (pieceType === 'pawn') {
    const forward = row - 1;

    moves(forward, col); // single move
  }

  // ♚ King
  else if (pieceType === 'king') {
    [-1, 0, 1].forEach(dr => {
      [-1, 0, 1].forEach(dc => {
        if (dr !== 0 || dc !== 0) moves(row + dr, col + dc);
      });
    });
  }

  // ♛ Queen
  else if (pieceType === 'queen') {
    const directions = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [1, 1], [-1, -1], [1, -1], [-1, 1]
    ];
    for (const [dr, dc] of directions) {
      for (let i = 1; i < 8; i++) {
        const newRow = row + dr * i;
        const newCol = col + dc * i;
        if (newRow < 0 || newRow >= 8 || newCol < 0 || newCol >= 8) break;
        moves(newRow, newCol);
      }
    }
  } else {
    throw new Error(`Unknown/Uncalculated piece: ${piece}`); // Error for pices other than given 3
  }

  return possibleMoves;
}