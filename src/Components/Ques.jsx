import React from "react";
import { toast } from "react-hot-toast";

const Ques = ({ ques, setTotalAns }) => {
  const [selected, setSelected] = React.useState("");

  const handleClick = (e) => {
    if (e.target.value == ques.correctAnswer) {
      toast.success("correct");
      setTotalAns((prev) => prev + 1);
    } else {
      toast.error("wrong");
    }
    document.getElementsByName(e.target.name).forEach((radio) => {
      radio.disabled = true;
    });
  };

  const handleCurrect = (ques) => {
    const values = document.getElementsByName(ques.question);
    if (values[0].disabled == true) {
      setSelected(ques.correctAnswer);
    } else {
      toast.error("Please select an option");
    }
  };

  return (
    <div className="card card-side bg-red-200 shadow-xl w-fit p-2 m-2">
      <h1 className="text-lg w-80 flex justify-start items-center font-semibold p-2">
        {ques.question}
      </h1>
      <div className="card-body bg-base-200 rounded-xl w-60 relative">
        {ques.options.map((option, index) => {
          return (
            <div key={index} className="flex justify-start items-center">
              <input
                onClick={handleClick}
                className="radio"
                type="radio"
                name={ques.question}
                id="option"
                value={option}
              />
              <p>{option}</p>
            </div>
          );
        })}
        <p className="text-center text-lg font-bold">{selected}</p>
        <div className="card-actions  absolute bottom-2 right-2">
          <button onClick={() => handleCurrect(ques)} className="btn btn-ghost">
            👁️‍🗨️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ques;
