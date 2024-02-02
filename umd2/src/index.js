import React from 'react'
import ReactDOM from 'react-dom';


let DIV = document.createElement('div')
DIV.setAttribute('id', 'hkk')
document.body.appendChild(DIV)

const reactElement = React.createElement('button', {className: 'sssss'}, ['hello world'])
const domContainer = document.getElementById('hkk')
console.log(reactElement, domContainer)
ReactDOM.render(reactElement, domContainer)

console.log(window.React)