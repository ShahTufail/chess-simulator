export abstract class Piece {
  constructor(public col: string, public row: number) {}
  abstract getMoves(): string[];
}