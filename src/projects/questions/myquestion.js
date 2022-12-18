import React, { useState } from "react";
const MyQuestion = ({ question, answer }) => {
    const [ visible ,setVisible ] = useState(false);
  return (
    <>
      <div className="main">
        <div className="ask">
          <div className="add" onClick={()=> setVisible(!visible)} >+</div>
          <h1>{question}</h1>
        </div>
         {visible && <h2>{answer}</h2>}
      </div>
    </>
  );
};
export default MyQuestion;
