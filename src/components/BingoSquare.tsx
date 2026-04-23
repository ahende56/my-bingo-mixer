import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-xl transition-all duration-300 select-none min-h-[70px] text-xs leading-tight font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-bingo to-accent border-glow text-white shadow-glow/50 animate-pulse'
      : 'bg-gradient-to-br from-marked to-secondary border-marked-border text-white shadow-marked/50'
    : 'bg-black/60 backdrop-blur-sm border-accent/50 text-text-primary hover:border-glow hover:shadow-glow/30';

  const freeSpaceClasses = square.isFreeSpace ? 'text-lg animate-pulse border-glow shadow-glow/50 bg-gradient-to-br from-accent/20 to-secondary/20' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto drop-shadow-md">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-glow text-lg drop-shadow-2xl animate-bounce">✨</span>
      )}
      {isWinning && (
        <div className="absolute inset-0 rounded-xl border-2 border-glow animate-ping opacity-75 shadow-glow/50"></div>
      )}
    </button>
  );
}
