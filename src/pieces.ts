export function getMoves(piece: string, pos: string): string[] {
  if (piece.toLowerCase() !== 'pawn') return [];

  const col = pos.charCodeAt(0) - 65; // A-H → 0-7
  const row = 8 - parseInt(pos[1]);   // 1-8 → 7-0 (top-down)

  const possibleMoves: string[] = [];

  const forward = row - 1;

  const moves = (r: number, c: number) => {
    if (r >= 0 && r < 8 && c >= 0 && c < 8)
      possibleMoves.push(String.fromCharCode(65 + c) + (8 - r));
  };

  // single move +1 forward
  moves(forward, col);
  return possibleMoves;
}