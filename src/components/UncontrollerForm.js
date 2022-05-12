import React, { useRef } from "react";

const Uncontrolled = props => {
  const inputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();

    const $inputDOMNode = inputRef.current;
    console.log('inputDOMNode', $inputDOMNode.value);

    // if ($inputDOMNode && $inputDOMNode.value) {
    //   props.handleSubmittedData({ uncontrolled: $inputDOMNode.value });
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled</h2>
      <input
        name="uncontrolled"
        placeholder="uncontrolled"
        type="text"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Uncontrolled;