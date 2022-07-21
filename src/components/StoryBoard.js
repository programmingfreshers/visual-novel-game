import React, { useState, componentDidMount } from "react";
import { useParams } from "react-router-dom";

function StoryBoard() {
  const storyTimeline = [
    {
      level: 0,
      text: "you have been in jungle and the sun is setting, you are lost and decided to wait",
      decisions: ["next"],
      decisionState: "next",
      imageURL:
        "https://img.freepik.com/free-vector/night-forest-landscape-with-trees-rocks-dark-wild-wood-natural-background-mysterious-place-with-plants-grass-ground-spots-moonlight-falling-through-crowns-cartoon-vector-illustration_107791-9231.jpg",
      audio: "",
    },
    {
      level: 1,
      text: "there was some voice in the bushes",
      decisions: ["next"],
      decisionState: "next",
      imageURL:
        "https://img.freepik.com/free-vector/night-forest-landscape-with-trees-rocks-dark-wild-wood-natural-background-mysterious-place-with-plants-grass-ground-spots-moonlight-falling-through-crowns-cartoon-vector-illustration_107791-9231.jpg",
      audio: "",
    },
    {
      level: 2,
      text: "oh ! a lion has come and is chasing you decide what to do",
      decisions: ["run randomly", "climb a tree and wait", "stand still"],
      decisionState: "next",
      imageURL: "https://c.tenor.com/aYbgN_a2HYEAAAAC/stalk-walk.gif",
      audio:
        "https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
    },
    {
      level: 3,
      text: "lions are faster than you, it chased ate you ",
      decisions: ["re-start game"],
      decisionState: "run randomly",
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/178/441/133/tigers-tiger-bushes-grass-wallpaper-preview.jpg",
      audio: "",
    },
    {
      level: 3,
      text: "the tiger got bored after some time and moved away you won !",
      decisions: ["re-start game"],
      decisionState: "climb a tree and wait",
      imageURL:
        "https://ak.picdn.net/shutterstock/videos/1054585877/thumb/8.jpg?ip=x480",
      audio: "",
    },
    {
      level: 3,
      text: "the tiger noticed you after some time and ate you away ",
      decisions: ["re-start game"],
      decisionState: "stand still",
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/178/441/133/tigers-tiger-bushes-grass-wallpaper-preview.jpg",

      audio: "",
    },
  ];
  const { storyID } = useParams();
  const [storyAudio, setStoryAudio] = useState(storyTimeline[0].audio);
  const [storyImage, setStoryImage] = useState(storyTimeline[0].imageURL);
  const [decisionVisibility, setDecisionVisibility] = useState("");
  const [level, setLevel] = useState(0);
  const [text, setText] = useState(storyTimeline[0].text);
  const [decisions, setDecisions] = useState(["next"]);
  const [decisionState, setDecisionState] = useState("next");
  const audio = new Audio(storyAudio);

  const upgradeLevelAndDecisionState = () => {
    setLevel(level + 1);
  };
  const selectedMessage = (event) => {
    var msg = event.target.value;
    setDecisionState(msg);
    storyTimeline.map((elem) => {
      if (elem.level === level) {
        if (elem.decisionState === msg) {
          setText(elem.text);
          setDecisions(elem.decisions);
          setStoryImage(elem.imageURL);
          setStoryAudio(elem.audio);
          console.log(
            "block details : " +
              elem.level +
              " : " +
              elem.decisionState +
              " : " +
              elem.decisions
          );
        }
      }
    });
    setLevel(1 + level);
    if (msg === "re-start game") {
      console.log("re-start game");
      setLevel(0);
      setText(storyTimeline[0].text);
      setDecisions(storyTimeline[0].decisions);
      setDecisionState("next");
      setStoryImage(storyTimeline[0].imageURL);
    }
    console.log(
      `current level : ${level} and decision state : ${decisionState}`
    );
  };

  return (
    <>
      <div className="container my-4">
        <div
          className="card"
          style={{
            width: "60rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={storyImage}
            style={{ height: "450px" }}
            className="card-img-top"
            alt="..."
          />

          <div
            style={{
              width: "100%",
              height: "100px",
              padding: "20px",
              color: "black",
            }}
            id="primaryInput"
            onClick={upgradeLevelAndDecisionState}
          >
            {text}
          </div>
          
          <div
            style={{
              position: "absolute",
              right: "10px",
              top: "50px",
              height: "100%",
            }}
          >
            {decisions.map((elem) => {
              return (
                <>
                  <button
                    className="btn btn-primary mx-3 my-3"
                    style={{
                      height: "50px",
                      width: "200px",
                      borderRadius: "20px",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                    value={elem}
                    onClick={selectedMessage}
                    autoFocus="true"
                  >
                    {elem}
                  </button>
                  <br />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryBoard;
