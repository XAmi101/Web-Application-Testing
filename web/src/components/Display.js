import React from 'react'

const Display =  (props) => {
      const { strike, balls } = props;
        console.log(props);
      return (
        <div>
          <h3>Ball score: {balls}</h3>
          <h3>Strike score: {strike}</h3>
        </div>
      );
    };


export default Display;
