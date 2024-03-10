import React from 'react';
import construction from '../Media/under-construction.png';

console.log(construction);

const proj = () => {
  return (
    <div>
      <center>
        <br></br> 
        <h1>Sorry! Projects Are Under Construction</h1>
        <img src={construction} alt="Under Construction!" /> 
      </center>
    </div>
  );
}

export default proj;