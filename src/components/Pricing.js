import React, { Component } from "react";
document.body.style.backgroundColor = 'smokewhite'
export default class Pricing extends Component {
  state = {
    color: "black",
    left: 210,
    top: 110,
    block:[window.screen.height*0.8,window.screen.width*0.8,100,200]
  };
  onkeydown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      this.setState({
        color: this.state.color === "black" ? "red" : "black",
      });
    } else if (e.key === "ArrowUp") {
      if(this.state.top>100){
          this.setState({
        left: this.state.left,
        top: this.state.top - 10,
      })};
    } else if (e.key === "ArrowDown") {
      if(this.state.top < ( 40 + this.state.block[0]) ){
          this.setState({
        left: this.state.left,
        top: this.state.top + 10,
      })};
    } else if (e.key === "ArrowRight") {
      if(this.state.left < ( 140 + this.state.block[1])){
          this.setState({
        left: this.state.left + 10,
        top: this.state.top,
      })};
      if (this.state.left > 500) {
        this.setState({
          color: "green",
        });
      }
    } else if (e.key === "ArrowLeft") {
      if(this.state.left > 200)
     {
          this.setState({
        left: this.state.left - 10,
        top: this.state.top,
      })};
    }
  };
  componentDidMount() {
     console.log( window.screen.height );
    document.onkeydown = this.onkeydown;
  }
  render() {
    return (
      <>
        <div
          style={{
            height: this.state.block[0],
            width: this.state.block[1],
            backgroundColor: 'white',
            position: "absolute",
            top: this.state.block[2],
            left: this.state.block[3],
            border:'black solid 1px',
            borderRadius:'5px'
          }}
        ></div>
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius:'50px',
            backgroundColor: this.state.color,
            position: "absolute",
            top: this.state.top,
            left: this.state.left,
          }}
        ></div>
      </>
    );
  }
}
