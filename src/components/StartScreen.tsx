interface StartScreenProps {
  onStart: (mode: 'bingo' | 'cards') => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-stars rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="text-center max-w-sm relative z-10">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-glow mb-4 animate-pulse drop-shadow-2xl">
          BINGO MIXER
        </h1>
        <p className="text-xl text-secondary mb-8 font-semibold tracking-wider drop-shadow-lg">
          Connect across the cosmos 🌌
        </p>
        
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-accent/30 mb-8">
          <h2 className="font-bold text-accent mb-3 text-lg drop-shadow-md">Mission Brief</h2>
          <ul className="text-left text-text-secondary text-sm space-y-2">
            <li className="flex items-center"><span className="text-glow mr-2">✨</span>Find cosmic connections with questions</li>
            <li className="flex items-center"><span className="text-glow mr-2">✨</span>Mark squares when you find matches</li>
            <li className="flex items-center"><span className="text-glow mr-2">✨</span>Complete 5 in a row to achieve BINGO!</li>
          </ul>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onStart('bingo')}
            className="w-full bg-gradient-to-r from-accent to-secondary text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-2xl border-2 border-glow/50 hover:scale-105 transition-all duration-300 hover:shadow-glow/50"
          >
            🎯 BINGO GRID MODE
          </button>

          <button
            onClick={() => onStart('cards')}
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-2xl border-2 border-glow/50 hover:scale-105 transition-all duration-300 hover:shadow-glow/50"
          >
            🃏 CARD DECK SHUFFLE
          </button>
        </div>
      </div>
    </div>
  );
}
