import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* injeta o html dentro do elemento html */}
  </React.StrictMode>,
  document.getElementById('root'),
)
