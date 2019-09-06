
import React from "react";

const Dashboard = props => {
  const { BallsUp, StrikeUp, Hit, Foul } = props;

  return (
    <div>
      <button onClick={BallsUp}>BALL</button>
      <button onClick={StrikeUp}>STRIKE</button>
      <button onClick={Foul}>FOUL</button>
        <button onClick={Hit}>HIT</button>
    </div>
  );
};

export default Dashboard;
