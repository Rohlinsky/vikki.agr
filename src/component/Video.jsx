import React, { Component } from 'react'
import '../Video.css'

class Video extends Component {
  render() {
    return (
      <div className="Video">
      		<a href="/#"><div className="x"></div></a>
      		<iframe width="1380" height="770" src="https://www.youtube.com/embed/6iVKq2IW3Rs?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Video