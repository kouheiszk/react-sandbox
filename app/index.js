import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello_world.jsx'

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<HelloWorld/>, document.getElementById('app'))
})
