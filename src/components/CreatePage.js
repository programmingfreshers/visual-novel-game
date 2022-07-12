import React from "react";

function CreatePage() {
  return (
    <>
      <div className="d-flex">
        <div
          className="p-2"
          style={{ backgroundColor: "yellow", width: "25%", height: "100%" }}
        >
          <div>
            Story Line
          </div>
        </div>
        <div
          className="p-2 flex-grow-1"
          style={{
            backgroundColor: "yellowgreen",
            width: "75%",
            height: "100px",
          }}
        >
          <div>
            canvas
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
