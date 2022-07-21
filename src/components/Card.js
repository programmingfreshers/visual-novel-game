import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <>
      <Link to={`/storyboard2/${props.story.storyID}`} style={{ textDecoration: 'none',color:'black'}}>
        <div
          className="card d-inline-flex p-2 mx-3 my-3"
          style={{ width: " 25rem" }}
        >
          <img
            src="https://images.hdqwalls.com/download/small-memory-8k-2a-7680x4320.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.story.storyName}</h5>
            <p className="card-text">{props.story.storyDescription}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
