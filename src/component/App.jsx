import React, { Component } from 'react'
import '../App.css'
import Question from './Question'
import Answer from './Answer'
import shareImg from '../images/share-circle.png'

var temp = [
  "When your spouse succeeds, are you truly happy for her?",
  "When was the last time you complimented your spouse for doing well?",
  "Do you tell your spouse you like what she is doing?",
  "What is your gender?",
  "What is your age?",
  "How many years are you together"
]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestion: 0,
      record: 0,
      gender: null,
      age: null,
      timeTogether: null,
    }
    this.response = this.response.bind(this)
    this.form = this.form.bind(this)
  }
  response(ans) {
    var newNumQuestion = this.state.numQuestion + 1
    if (this.state.numQuestion < 3) {
      var newRecord = this.state.record + ans
      this.setState({
        numQuestion: newNumQuestion,
        record: newRecord
      })
    } else if (this.state.numQuestion === 3) {
      this.setState({
        numQuestion: newNumQuestion,
        gender: ans
      })
    } else if (this.state.numQuestion === 4) {
      this.setState({
        numQuestion: newNumQuestion,
        age: ans
      })
    } else if (this.state.numQuestion === 5) {
      this.setState({
        numQuestion: newNumQuestion,
        timeTogether: ans
      })
    } else {
      return;
    }
  }
  form() {
    if (this.state.numQuestion <= 5){
      return (
        <div>
          <Answer numQuestion={ this.state.numQuestion } onResponse={ this.response }/>
        </div>
      )
    } else {

      // console.log("rec: " + this.state.record)
      // console.log("gender: " + this.state.gender)
      // console.log("age: " + this.state.age)
      // console.log("time together: " + this.state.timeTogether )

      var result = ((this.state.record / 3) / 3) * 100
      // var diagnosis = Math.round(Math.abs(100 + (this.state.age * (-0.22)) + (this.state.timeTogether * (-0.8)) + (result * 1.2) + (Number(this.state.gender) * 1.22)) / 10)
      var diagnosis = Math.round(60 + ((-0.3 * result) + (-0.3 * this.state.timeTogether) + (-0.3 * this.state.age)));
      var message = ""
      if (result >= 30 && result < 50) {
        message = "People need support, and you aren't providing much of it."
      } else if (result >= 50 && result < 80) {
        message = "You can be more supporting - keep working on it!"
      } else if (result >= 80) {
        message = "You are doing well - keep supporting your other half!"
      } else {
        message = "You are agoist."
      }
      return (
        <div className="result">
          <h2>Your chance of divorce in the next two years is:</h2>
          <h1>{ diagnosis }%</h1>
          <center>
            <a href="">
              <div className="share">
                <span className="inner-share text">Share</span>
                <span className="inner-share img"><img src={ shareImg } /></span>
              </div>
            </a>
          </center>
        </div>
      )
    }
  } 
  render() {
    return (
      <div className="App">
        <div className="frame">
          <a href="/#"><div className="x"></div></a>
          <Question numQuestion={ this.state.numQuestion } content={ temp[this.state.numQuestion] }/>
          { 
            this.form()
          }
        </div>
        <div className={ "subframe frame-" + this.state.numQuestion }></div>
      </div>
    );
  }
}

export default App