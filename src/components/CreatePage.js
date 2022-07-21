import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
function CreatePage() {
  document.body.style.backgroundColor = "#f6f6f6";
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const [storyBlock, setStoryBlock] = useState([]);
  const [storyDecisionsArray, setStoryDecisionsArray] = useState([]);
  const [storyDecisions, setStoryDecisions] = useState([]);
  const [storyText, setStoryText] = useState("");
  const [storyImageURL, setStoryImageURL] = useState("");
  const [storyLevel, setStoryLevel] = useState("");
  const [storyDecisionState, setStoryDecisionState] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const changeStoryText = (event) => {
    setStoryText(event.target.value);
  };
  const changeStoryLevel = (event) => {
    setStoryLevel(event.target.value);
  };
  const changeStoryDecisions = (event) => {
    setStoryDecisions(event.target.value);
  };
  const changeStoryDecisionState = (event) => {
    setStoryDecisionState(event.target.value);
  };
  const changeStoryImageUrl = (event) => {
    setStoryImageURL(event.target.value);
  };
  const addToStoryDecisonsArray = () => {
    var ls = [];
    storyDecisionsArray.map((elem) => {
      ls.push(elem);
    });
    ls.push(storyDecisions);
    setStoryDecisionsArray(ls);
    setStoryDecisions("");
  };
  const openBlock = (event) => {
    var ds = event.target.value;
    var depth = ds.split(":")[0];
    var dstate = ds.split(":")[1];
    storyBlock[depth].map((elem) => {
      if (elem.decisionState == dstate) {
        console.log(elem);
        setStoryDecisionState(elem.decisionState);
        setStoryImageURL(elem.imageURL);
        setStoryText(elem.text);
        setStoryLevel(elem.level);
      }
    });
  };
  const publishStory = () => {
    var lx = [];
    storyBlock.map((elem) => {
      elem.map((e) => {
        lx.push(e);
      });
    });
    console.log(JSON.stringify(lx));
  };
  const updateStoryBlock = () => {};
  const addStoryBlock = () => {
    var lx = storyBlock;
    var ls = {
      id: storyLevel + ":" + storyDecisionState,
      level: storyLevel,
      decisionState: storyDecisionState,
      decisions: storyDecisionsArray,
      text: storyText,
      imageURL: storyImageURL,
    };
    if (storyLevel >= lx.length) {
      lx.push([ls]);
    } else {
      lx[storyLevel].push(ls);
    }
    setStoryBlock(lx);
    setStoryDecisionState("");
    setStoryImageURL("");
    setStoryText("");
    setStoryLevel("");
    setStoryDecisionsArray([]);
    console.log("this is normal output : ");
    console.log(storyBlock);
  };
  const print = (event) => {
    console.log("clicked" + event.target.value);
  };

  return (
    <>
      <div className="d-flex">
        <div
          className="p-2 my-3 mx-3"
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            width: "25%",
            height: "43rem",
          }}
        >
          <h3 style={{ textAlign: "center", width: "100%" }}>Story Timeline</h3>
          <hr color="black" />
          <div>
            <input
              placeholder="level"
              className="form-control my-2"
              value={storyLevel}
              onChange={changeStoryLevel}
            />
            <textarea
              style={{ height: "200px" }}
              placeholder="text"
              className="form-control my-2"
              type="tex"
              value={storyText}
              onChange={changeStoryText}
            />
            <input
              placeholder="decision state"
              className="form-control my-2"
              value={storyDecisionState}
              onChange={changeStoryDecisionState}
            />
            <div className="input-group">
              <input
                type="text"
                value={storyDecisions}
                onChange={changeStoryDecisions}
                placeholder="decisions"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
              />
              <button
                className="btn btn-outline-primary"
                onClick={addToStoryDecisonsArray}
              >
                + Add
              </button>
            </div>

            <input
              placeholder="image URL"
              className="form-control my-2"
              value={storyImageURL}
              onChange={changeStoryImageUrl}
            />
            <div className="input-group mb-3 my-2">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                Upload
              </label>
            </div>
            <hr color="black" />
            <button
              className="btn btn-outline-success my-2 mx-2"
              onClick={addStoryBlock}
            >
              + Add Story Block
            </button>
            <button
              className="btn btn-outline-success my-2 mx-2"
              style={{}}
              onClick={updateStoryBlock}
            >
              Update Story Block
            </button>
            <button
              className="btn btn-outline-danger my-2 mx-2"
              style={{}}
              onClick={updateStoryBlock}
            >
              - Delete Story Block
            </button>
          </div>
        </div>
        <div
          className="p-2 flex-grow-1 mx-3 my-3"
          style={{
            borderRadius: "20px",
            backgroundColor: "white",
            width: "75%",
            height: "43rem",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Story Canvas</h3>
          <button
            style={{ width: "200px" }}
            className="btn btn-outline-success my-2 mx-2"
            onClick={publishStory}
          >
            Publish Story
          </button>
          <hr color="black" />
          <div className="btn-group-vertical" style={{ width: "100%" }}>
            <table className="table">
              <tbody>
                <div
                  style={{  height: "520px",width: "1200px", overflow: "auto" }}
                >
                  {storyBlock.map((elem) => {
                    return (
                      <>
                        <tr>
                          <th>Level : {elem[0]["level"]}</th>
                          {elem.map((e) => {
                            return (
                              <td>
                                <button
                                  value={e.id}
                                  onClick={openBlock}
                                  className="btn btn-warning mx-3 my-3"
                                  style={{ width: "200px" }}
                                >
                                  {e.decisionState}
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      </>
                    );
                  })}
                </div>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
