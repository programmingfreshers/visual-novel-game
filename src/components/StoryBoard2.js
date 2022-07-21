import React, { useState, useEffect } from "react";
import Sound from "react-sound";
import roarSound from "../Assets/sounds/tiger-roar.mp3";
import { useParams } from "react-router-dom";

function StoryBoard2() {
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
      audio: roarSound,
    },
    {
      level: 3,
      text: "lions are faster than you, it chased ate you ",
      decisions: ["game ended"],
      decisionState: "run randomly",
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/178/441/133/tigers-tiger-bushes-grass-wallpaper-preview.jpg",
      audio: "",
    },
    {
      level: 3,
      text: "the tiger got bored after some time and moved away you won !",
      decisions: ["game ended"],
      decisionState: "climb a tree and wait",
      imageURL:
        "https://ak.picdn.net/shutterstock/videos/1054585877/thumb/8.jpg?ip=x480",
      audio: "",
    },
    {
      level: 3,
      text: "the tiger noticed you after some time and ate you away ",
      decisions: ["game ended"],
      decisionState: "stand still",
      imageURL:
        "https://c4.wallpaperflare.com/wallpaper/178/441/133/tigers-tiger-bushes-grass-wallpaper-preview.jpg",

      audio: "",
    },
  ];
  const [textStatus, setTextStatus] = useState(false);
  const [storyAudio, setStoryAudio] = useState(storyTimeline[0].audio);
  const [storyImage, setStoryImage] = useState(storyTimeline[0].imageURL);
  const [decisionVisibility, setDecisionVisibility] = useState("");
  const [level, setLevel] = useState(0);
  const [text, setText] = useState(storyTimeline[0].text);
  const [decisions, setDecisions] = useState(["next"]);
  const [decisionState, setDecisionState] = useState("next");
  const { storyID } = useParams();

  useEffect(() => {
    setTextStatus(false);
    var box = document.getElementById("speaking-box");
    const textLength = text.length + 1;
    let i = 0;
    const writter = setInterval(() => {
      if (i === textLength) {
        setTextStatus(true);
        clearInterval(writter);
      } else {
        box.innerHTML = text.substring(0, i);
        i++;
      }
    }, 40);
  }, [text]);

  const selectedMessage = (event) => {
    var cmd = event.target.value;
    console.log(cmd + " : " + level);
    setDecisionState(cmd);
    storyTimeline.map((elem) => {
      if (elem.decisionState === cmd && elem.level === level+1) {
        setText(elem.text);
        setDecisions(elem.decisions);
        setStoryImage(elem.imageURL);
        setStoryAudio(elem.audio);
        setTextStatus(true);
        setLevel(level + 1);
      }
    });
  };

  const onkeydown = (e) => {
    console.log(e.key);
    console.log(decisions);
    if (
      e.key === " " &&
      textStatus === true &&
      storyTimeline[level].decisions.length === 1 &&
      storyTimeline[level].decisions[0] !== 'game ended'
    ) {
      console.log("Level : " + level);
      setText(storyTimeline[level + 1].text);
      setStoryImage(storyTimeline[level + 1].imageURL);
      setDecisions(storyTimeline[level + 1].decisions);
      setStoryAudio(storyTimeline[level + 1].audio);
      setTextStatus(false);
      setLevel(level + 1);
    } else if (e.key === "Home") {
      setLevel(0);
      setText(storyTimeline[0].text);
      setDecisions(storyTimeline[0].decisions);
      setDecisionState("next");
      setStoryImage(storyTimeline[0].imageURL);
    }
  };
  document.onkeydown = onkeydown;

  return (
    <>
      <div
        style={{
          height: "650px",
          width: "1000px",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={storyImage}
          style={{
            borderRadius: "20px",
            width: "100%",
            height: "100%",
          }}
        ></img>

        <div
          style={{
            position: "absolute",
            padding: "5px",
            top: "625px",
            height: "100px",
            width: "1000px",
            paddingLeft: "25px",
            borderRadius: "10px",
            backdropFilter: "blur(80px)",
            color: "white",
          }}
        >
          <h5 id="speaking-box"></h5>
        </div>
        {/* <Sound url={storyAudio} playStatus={Sound.status.PLAYING}></Sound> */}
        <div
          style={{
            position: "absolute",
            padding: "5px",
            top: "100px",
            height: "500px",
            width: "300px",
            paddingLeft: "25px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          {decisions.map((elem) => {
            if (decisions.length > 1) {
              return (
                <>
                  <button
                    className="btn btn-outline"
                    style={{
                      color: "white",
                      height: "50px",
                      width: "300px",
                      backdropFilter: "blur(80px)",
                      marginTop: "20px",
                    }}
                    value={elem}
                    onClick={selectedMessage}
                  >
                    {elem}
                  </button>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default StoryBoard2;
