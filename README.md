# Chess Simulator ♟️ 
A TypeScript-based CLI chess simulator with modular logic and test coverage. Built for clarity, extensibility..

---

## 📦 Setup
```git clone https://github.com/your-username/chess-simulator.git
cd chess-simulator
npm install
```


## ▶️ Run the Simulator
```
npm start
```

## Make sure your entry point (e.g. index.ts) is configured in package.json under "main" or "scripts".
```
🧪 Run Tests
npm test
```

## 📊 Check Coverage
```
npm run test:coverage
```

Generates a coverage report in /coverage. Open coverage/lcov-report/index.html for a visual breakdown.

## 🛠️ Project Structure
```
src/
├── Piece/
│   ├── piece.ts         # Core logic for move generation
│   └── piece.test.ts    # Unit tests for getMoves()
├── index.ts             # CLI entry point
├── board.ts             # Optional: visual guide to how a chess board and moves will look
```


## ✅ Tech Stack
```
- TypeScript
- Jest + ts-jest
- Node.js CLI
```
