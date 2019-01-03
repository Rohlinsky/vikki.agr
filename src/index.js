import React from 'react'
import ReactDOM from 'react-dom'
import Site from './component/Site'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();
