"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello-world'
import Greeting from './components/greeting'


ReactDOM.render(
  <HelloWorld name="WDI" mood="tired"/>,
  document.getElementById("hello-world-component")
)

ReactDOM.render(
  <Greeting timeOfDay="night" object="moon"/>,
  document.getElementById("greeting-component")
)
