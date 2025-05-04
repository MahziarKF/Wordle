import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import "./App.css";
import Board from "./components/board";
import { Outlet } from "react-router-dom";
const socket = io("http://localhost:3001");
function App() {
  const [word, setWord] = useState("wandy");
  const [guesses, setGuesses] = useState(new Array(6).fill(null));
  const [guessCount, setGuessCount] = useState(6);
  const [guessesState, setGuessesState] = useState("");
  const [state, setState] = useState("playing");

  useEffect(() => {
    socket.on("wordSent", ({ word }) => {
      setWord(word);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (guessCount == 0) {
      setState("lost");
    }
    const matches = guesses.find((g) => g === word);
    if (matches) {
      setState("win");
      console.log("win");
    }
  }, [guesses, word]);

  const guess = (g: string) => {
    const guessList = [...guesses];
    const firstNullIndex = guessList.findIndex((element) => element === null);
    if (firstNullIndex !== -1) {
      guessList[firstNullIndex] = g; // Place the guess in the first null position
      setGuesses(guessList);
      setGuessCount((prevGuessCount) => prevGuessCount - 1);
    }
  };
  const color = (letter: string, i: number, isActive: boolean): string => {
    if (!isActive) {
      if (letter == word[i]) return "green-600 gu";
      else if (word.includes(letter)) {
        return "orange-400 gu";
      } else {
        return "stone-950 gu";
      }
    }
    return "";
  };
  // Example button to trigger guesses
  // const handleGuess = () => {
  //   guess("wands");
  //   guess("wande");
  // };

  return (
    <>
      <div className="w-full h-screen bg-stone-900 pt-2">
        <Outlet />
        <div className="flex items-center justify-center w-full h-9/10">
          <Board guess={guess} color={color} state={state} />
        </div>
      </div>
    </>
  );
}

export default App;
