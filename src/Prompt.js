import React from "react";

//A single prompt for Madlibs

function Prompt({ changeAnswer, prompt }) {
  //Update parent with value after user input changes

  function handleChange(evt) {
    const { value } = evt.target;
    changeAnswer(prompt, value);
  }

  return (
    <div className="Prompt">
      <input placeholder={prompt} onChange={handleChange} />
    </div>
  );
}

export default Prompt;
