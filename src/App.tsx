import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { CardDeckScreen } from './components/CardDeckScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const [gameMode, setGameMode] = useState<'bingo' | 'cards' | null>(null);

  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleStart = (mode: 'bingo' | 'cards') => {
    setGameMode(mode);
    startGame();
  };

  const handleReset = () => {
    setGameMode(null);
    resetGame();
  };

  if (gameState === 'start' || gameMode === null) {
    return <StartScreen onStart={handleStart} />;
  }

  if (gameMode === 'cards') {
    return <CardDeckScreen onReset={handleReset} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={handleReset}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
