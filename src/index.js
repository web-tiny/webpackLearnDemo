import _ from 'lodash'
import './style/style.css'
import Img from './image/girl.jpg'
import Data from './data.xml'

function component () {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello','webpack'], ' ')
  element.classList.add('hello')

  let myImg = new Image()
  myImg.src = Img
  element.appendChild(myImg)

  console.log(Data)

  return element
}

document.body.appendChild(component())