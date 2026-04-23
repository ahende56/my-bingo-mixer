import { useState } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onReset: () => void;
}

export function CardDeckScreen({ onReset }: CardDeckScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [drawnCards, setDrawnCards] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  const drawCard = () => {
    setIsAnimating(true);

    // Get available questions (not yet drawn)
    const availableQuestions = questions.filter(q => !drawnCards.has(q));

    if (availableQuestions.length === 0) {
      // Reset deck if all cards drawn
      setDrawnCards(new Set());
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      setCurrentQuestion(randomQuestion);
      setDrawnCards(new Set([randomQuestion]));
    } else {
      const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
      setCurrentQuestion(randomQuestion);
      setDrawnCards(prev => new Set([...prev, randomQuestion]));
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleSuccess = () => {
    // Could track successful connections here
    drawCard();
  };

  const handleFail = () => {
    // Skip to next card
    drawCard();
  };

  return (
    <div className="flex flex-col min-h-full relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-black">
      {/* Card table background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-black/50 backdrop-blur-lg border-b border-red-500/30 relative z-10">
        <button
          onClick={onReset}
          className="text-white text-sm px-3 py-1.5 rounded border border-red-500/50 hover:bg-red-500/20 transition-colors"
        >
          ← BACK TO MENU
        </button>
        <h1 className="font-bold text-red-400 text-xl tracking-wider drop-shadow-lg">CARD DECK SHUFFLE</h1>
        <div className="text-white text-sm">Cards: {drawnCards.size}</div>
      </header>

      {/* Instructions */}
      <p className="text-center text-white/80 text-sm py-2 px-4 font-semibold tracking-wide">
        Tap the deck to draw a question card!
      </p>

      {/* Card Display */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="relative">
          {/* Card Deck (stack of cards) */}
          <div
            onClick={drawCard}
            className="relative w-48 h-72 cursor-pointer group"
          >
            {/* Stack of cards */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 bg-red-600 border-2 border-white rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
                style={{
                  transform: `translate(${i * 2}px, ${i * -2}px) rotate(${i * 0.5}deg)`,
                  zIndex: 5 - i
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-4xl opacity-20">♠</div>
                </div>
              </div>
            ))}

            {/* Hover effect */}
            <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>

          {/* Current Card */}
          {currentQuestion && (
            <div className={`absolute -right-8 top-0 w-48 h-72 bg-white border-4 border-red-600 rounded-lg shadow-2xl flex flex-col items-center justify-center p-4 transition-all duration-500 ${isAnimating ? 'animate-bounce' : ''}`}>
              <div className="text-red-600 text-6xl mb-2">♥</div>
              <p className="text-gray-800 text-center font-semibold text-sm leading-tight">
                {currentQuestion}
              </p>
              <div className="absolute top-2 right-2 text-red-600 text-xl">♦</div>
              <div className="absolute bottom-2 left-2 text-red-600 text-xl">♣</div>
            </div>
          )}
        </div>
      </div>

      {/* Feedback Buttons */}
      <div className="flex gap-4 mt-6 px-4">
        <button
          onClick={handleFail}
          className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Skip this one
        </button>
        <button
          onClick={handleSuccess}
          className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          This helped me connect
        </button>
      </div>

      {/* Footer */}
      <div className="text-center pb-4">
        <p className="text-white/60 text-xs">
          {currentQuestion ? 'Tap deck for next card' : 'Tap deck to start'}
        </p>
      </div>
    </div>
  );
}