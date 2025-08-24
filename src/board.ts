export function printBoard(): void {
  console.log("\n");
  for (let row = 8; row >= 1; row--) {
    let line = "";
    for (let col = 0; col < 8; col++) {
      const file = String.fromCharCode(65 + col); // A–H
      line += `${file}${row} `.padEnd(5);
    }
    console.log(line.trim());
  }
  console.log("\n");
}