import { FC, useEffect, useState } from "react";

interface propTypes {
  wordLength: number;
  isActive: boolean;
  i: number;
  setActive: any;
  guess: any;
  color: any;
}

const Line: FC<propTypes> = ({ wordLength, isActive, i, setActive,guess,color }) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    if (isActive) {
      window.addEventListener("keydown", handleKeyPress);
    }

    // Cleanup the event listener on component unmount or when isActive changes
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isActive, word]); // Add isActive as a dependency

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (word.length >= wordLength) {
        // de activates the current tile/row and activates the next one!
        setActive(i);
        // guessing tries : 6 total
        guess(word)
      }
    } else if (e.key === "Backspace") {
      
      setWord((prevWord) => prevWord.slice(0, -1)); // Remove last character
    } else if (e.key.length === 1 && word.length < 5) {
      // Check if it's a single character
      setWord((prevWord) => prevWord + e.key);
    }
  };

  useEffect(() => {
  }, [word]); // Add word as a dependency

  const divs = [];
  for (let i: number = 0; i < wordLength; i++) {
    divs.push(
      <div
        key={i}
        className={`ring-${
          isActive ? "stone-600 shadow-[0px_10px_10px_rgba(255,255,255,.2)]" : "stone-800"
        } ring-2 flex h-full bg-${color(word[i],i,isActive)} w-full justify-center items-center text-white uppercase font-semibold text-5xl`}
      >
        {word[i] || ""} {/* Display empty string if undefined */}
      </div>
    );
  }

  return (
    <>
      {divs.map((div) => {
        return div;
      })}
    </>
  );
};

export default Line;
