import React from "react";

const TextError = (props) => {
  return (
    <div className="error">
      {/* {console.log(props)} */}
      {/* {console.log(props.children)} */}
      {props.children}
    </div>
  );
};

export default TextError;
