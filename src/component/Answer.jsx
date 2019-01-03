import React, { Component } from 'react'

class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input_val: null
    }
    this.giveAnswer = this.giveAnswer.bind(this)
    this.variantAnswer = this.variantAnswer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  giveAnswer(variant) {
    this.props.onResponse(variant)
  }
  handleChange(e) {
    (this.props.numQuestion < 4) ? this.props.onResponse(e.target.value) : this.setState({ input_val: e.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.onResponse(this.state.input_val)
    this.refs.num.value = ""
  }
  variantAnswer() {
    var variants = []
    if (this.props.numQuestion === 1) {
      variants = ["Today", "This week"]
    } else {
      variants = ["Always", "Sometimes"]
    }
    return (
        <div className="variant-answers">
          <div className="variants">
            <div className="variant-frame">
              <div className="variant" onClick={ () => {this.giveAnswer(3)} } id="first" data-val="3">{ variants[0] }</div>
              <div className="shadow-variant"></div>
            </div>
            <div className="variant-frame">
              <div className="variant" onClick={ () => {this.giveAnswer(1)} } id="third" data-val="1">Never</div>
              <div className="shadow-variant"></div>
            </div>
            <div className="variant-frame">
              <div className="variant" onClick={ () => {this.giveAnswer(2)} } id="second" data-val="2">{ variants[1] }</div>
              <div className="shadow-variant"></div>
            </div>
        </div>
        </div>
    )
  }
  personalAnswer() {
    if(this.props.numQuestion === 3) {
      return (
        <form className="variant-frame">
          <select id="gender" onChange={ this.handleChange } >
            <option defaultValue="" disabled selected>Gender</option>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select>
          <div className="shadow-variant"></div>
        </form>
      )
    } else {
      return (
        <form className="form num variant-frame" onSubmit={ this.handleSubmit }>
          <input required="required" className="age timeTogether" ref="num" type="number" onChange={ this.handleChange } title="if you done, click Enter" />
          <input className="btn" type="submit" value=">" />
          <div className="shadow-variant"></div>
        </form>
      )
    }
  }
  render() {
    return (
      <div className="Answer">{ (this.props.numQuestion < 3) ? this.variantAnswer() : this.personalAnswer() }</div>
    );
  }
}

export default Answer