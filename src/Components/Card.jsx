import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
    const navigate = useNavigate();
    const {logo,name,total,id} = item;
    const handleclick = (id) => {
        navigate(`/quiz/${id}`);
    }

  return (
    <div className="mb-32 mt-4">
      <div className="card w-80 bg-secondary shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
            <p>Total Question: {total}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleclick(id)} className="btn btn-primary">Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;