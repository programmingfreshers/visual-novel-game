import React from "react";
import Card from "./Card";
function Catalogue(props) {
  return (
    <>
      <div className="container my-3">
        {props.storyBook.map((elem) => {
          return <Card story={elem} />;
        })}
      </div>
    </>
  );
}

export default Catalogue;
