import React, { Component } from 'react'

class Question extends Component {
	append(n) {
		if (n === 0 || n === 2) {
			return "extra-space-1"
		} else if (n === 3) {
			return "extra-space-2"
		} else if (n === 4) {
			return "extra-space-3"
		} else if (n === 5) {
			return "extra-space-4"
		} else {
			return
		}
	}
  render() {
    return (
      <div className="Question">
        <h2 className={ this.append( this.props.numQuestion ) }>{ this.props.content }</h2>
      </div>
    );
  }
}

export default Question;
