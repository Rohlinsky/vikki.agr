import React, { Component } from 'react'
import '../Presentation.css'

class Presentation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			n: 0 
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(n) {
		if ( this.state.n === 7 && n > 0) {
			this.setState({
				n: 0
			})
		} else if(this.state.n === 0 && n < 0) {
			this.setState({
				n: 7
			})
		} else {
			var newNum = this.state.n + n
			this.setState({
				n: newNum
			})
		}
	}
	render() {
		return (
			<div id="anima" className={ "Presentation frame-num-" + this.state.n } >
				<div className="control">
					<div onClick={ ()=>{ this.handleClick(1) } } className="arrow right"></div>
					<div onClick={ ()=>{ this.handleClick(-1) } } className="arrow left"></div>
				</div>
			</div>
		)
	}
}

export default Presentation