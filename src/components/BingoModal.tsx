interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-4 border-glow/50 animate-bounce relative overflow-hidden">
        {/* Cosmic particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-glow rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.6 + 0.4
              }}
            />
          ))}
        </div>

        <div className="text-6xl mb-4 animate-bounce drop-shadow-2xl">🚀</div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-glow to-accent mb-2 drop-shadow-2xl animate-pulse">
          BINGO!
        </h2>
        <p className="text-white mb-6 font-semibold text-lg drop-shadow-lg">
          You've achieved cosmic alignment!
        </p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-gradient-to-r from-glow to-secondary text-black font-bold py-4 px-6 rounded-2xl shadow-2xl border-2 border-accent/50 hover:scale-105 transition-all duration-300 hover:shadow-glow/50 text-lg tracking-wide"
        >
          CONTINUE MISSION ▶
        </button>
      </div>
    </div>
  );
}
