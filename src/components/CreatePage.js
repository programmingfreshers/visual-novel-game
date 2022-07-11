import React from "react";

function CreatePage() {
  return (
    <>
      <div className="d-flex">
        <div
          className="p-2"
          style={{ backgroundColor: "yellow", width: "25%", height: "100%" }}
        >
          Flex item snfks hdfhskjdh fj hsjdhfglsdhsj
        </div>
        <div
          className="p-2 flex-grow-1"
          style={{
            backgroundColor: "yellowgreen",
            width: "75%",
            height: "100px",
          }}
        >
          Flex item
        </div>
      </div>
    </>
  );
}

export default CreatePage;
