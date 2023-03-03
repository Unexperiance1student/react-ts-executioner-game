import { useState } from 'react';
import { HangmanDrawing, HangmanWord, Keyboard } from './components';
import words from './wordList.json';

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [] = useState();

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}>
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
