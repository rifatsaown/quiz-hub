import React from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();
  return (
    <div>
      <div className="hero min-h-[50vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Quiz</h1>
            <p className="py-6">
              This Quiz will Help You to Get Knolwdge about web Programming
            </p>
            <button className="btn btn-primary">
              <a href="#quiz">Get Started</a>
            </button>
          </div>
        </div>
      </div>
      <div id="quiz" className="flex flex-wrap justify-between mx-16">
        {data.data.map((item,index) => <Card key={index} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
