import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Lost: FC = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full text-center font-bold">
      <button   onClick={() => {
        navigate('/', {replace: true})
      }} className="bg-rose-700 text-3xl text-center rounded-xl font-semibold px-5"><i className="fa fa-refresh" aria-hidden="true"></i></button>
    </div>
  );
};

export default Lost;
