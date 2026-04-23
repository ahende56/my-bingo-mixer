import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="relative">
      {/* Cosmic grid effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px'
        }}></div>
      </div>

      <div className="grid grid-cols-5 gap-3 w-full max-w-md mx-auto aspect-square relative z-10 p-3 bg-black/30 backdrop-blur-xl rounded-3xl border-2 border-accent/50 shadow-2xl">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
