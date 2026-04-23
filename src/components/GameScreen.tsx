import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-stars rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
        {/* Nebula effects */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-black/50 backdrop-blur-lg border-b border-accent/30 relative z-10">
        <button
          onClick={onReset}
          className="text-text-secondary text-sm px-3 py-1.5 rounded border border-accent/50 hover:bg-accent/20 transition-colors"
        >
          ← MISSION ABORT
        </button>
        <h1 className="font-bold text-accent text-xl tracking-wider drop-shadow-2xl">BINGO MIXER</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-text-secondary text-sm py-2 px-4 font-semibold tracking-wide drop-shadow-md">
        Mark squares when you find cosmic connections.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-gradient-to-r from-bingo to-accent text-white text-center py-3 font-bold text-sm shadow-2xl border-y border-glow/50 animate-pulse drop-shadow-2xl">
          🚀 BINGO ACHIEVED! 🚀
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3 relative z-10">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
