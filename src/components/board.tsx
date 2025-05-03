import { FC, useEffect, useState } from "react";
import Line from "./line";
import { useNavigate } from "react-router-dom";
interface propTypes {
  guess: any;
  color: any;
  state: string;
}
const Board: FC<propTypes> = ({ guess, color, state }) => {
  const navigate = useNavigate();
  const [activeComponents, setActiveComponents] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    if (state == "win") {
      const newData: boolean[] = [false, false, false, false, false, false];
      setActiveComponents(newData);
      navigate('/win',{replace: true})
    } else if (state == 'lost') {
      navigate('/lost',{replace: true})
    }
  }, [state]);
  const setActive = (index: number): void => {
    const updatedData = [...activeComponents];
    updatedData[index] = !updatedData[index];
    if (index + 1 < updatedData.length + 1) {
      updatedData[index + 1] = !updatedData[index + 1];
    }
    setActiveComponents(updatedData);
  };
  useEffect(() => {}, [activeComponents]);
  return (
    <div className="w-2/5 h-3/4">
      <div className="w-full h-1/6 flex gap-1">
        <Line
          i={0}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[0]}
          wordLength={5}
        />
      </div>
      <div className="w-full h-1/6 flex gap-1">
        <Line
          i={1}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[1]}
          wordLength={5}
        />
      </div>
      <div className="w-full flex h-1/6 gap-1">
        <Line
          i={2}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[2]}
          wordLength={5}
        />
      </div>
      <div className="w-full flex h-1/6 gap-1">
        <Line
          i={3}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[3]}
          wordLength={5}
        />
      </div>
      <div className="w-full flex h-1/6 gap-1">
        <Line
          i={4}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[4]}
          wordLength={5}
        />
      </div>
      <div className="w-full flex h-1/6 gap-1">
        <Line
          i={5}
          setActive={setActive}
          color={color}
          guess={guess}
          isActive={activeComponents[5]}
          wordLength={5}
        />
      </div>
    </div>
  );
};

export default Board;
