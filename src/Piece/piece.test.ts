import { getMoves } from './piece';

describe('getMoves', () => {
  test('pawn at D2 should move to D3', () => {
    expect(getMoves('pawn', 'D2')).toEqual(['D3']);
  });

  test('pawn at H7 should move to H8', () => {
    expect(getMoves('pawn', 'H7')).toEqual(['H8']);
  });

  test('pawn at A8 should have no moves', () => {
    expect(getMoves('pawn', 'A8')).toEqual([]);
  });

  test('king at D4 should return 8 surrounding squares', () => { // king in center
    const expected = ['C3', 'C4', 'C5', 'D3', 'D5', 'E3', 'E4', 'E5'];
    expect(getMoves('king', 'D4').sort()).toEqual(expected.sort());
  });

  test('king at A1 should return 3 valid moves', () => { // king at corner
    const expected = ['A2', 'B1', 'B2'];
    expect(getMoves('king', 'A1').sort()).toEqual(expected.sort());
  });

  // ♛ Queen
  test('queen at D4 should return all valid directions', () => { // queen in center
    const result = getMoves('queen', 'D4');
    expect(result).toContain('D5'); // vertical
    expect(result).toContain('E4'); // horizontal
    expect(result).toContain('E5'); // diagonal
    expect(result).toContain('A4'); // left
    expect(result).toContain('D1'); // down
    expect(result.length).toBeGreaterThan(20); // sanity check
  });

  test('queen at H8 should return only inward moves', () => { // queen at corner
    const result = getMoves('queen', 'H8');
    expect(result).not.toContain('H9');
    expect(result).toContain('G8');
    expect(result).toContain('H7');
    expect(result).toContain('G7');
  });

  // ❌ Invalid piece
  test('invalid piece should throw error', () => { // only 3 pices implemented
    expect(() => getMoves('knight', 'D4')).toThrow('Unknown/Uncalculated piece: knight');
  });
});