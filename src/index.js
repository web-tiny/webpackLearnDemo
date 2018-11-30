// import _ from 'lodash'
// import printMe from './print.js'
// import './style/styles.css'
// import { cube } from './math'

// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!');
// }

async function getComponent () {
  // let element = document.createElement('div')
  // let btn = document.createElement('button')

  // element.innerHTML = _.join(['Hello','webpack'], ' ')
  // btn.innerHTML = 'Click me and check the console!'
  // btn.onclick = printMe

  // element.appendChild(btn)
  // let element = document.createElement('div')
  // element.innerHTML = [
  //   'Hello webpack!', '5 cubed is equal to' + cube(5)
  // ].join('\n\n')

  // return element

  // return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
    var element = document.createElement('div')
    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    element.innerHTML = _.join(['Hello','webpack4'], ' ')

    return element
  // }).catch(error => 'An error occurred while loading the component')
}

// document.body.appendChild(component())
// let element = component()
// document.body.appendChild(component());

getComponent().then((component => {
  document.body.appendChild(component);
}))

// if(module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('accepting the updated printMe module !');
//     // printMe()
//     document.body.removeChild(element)
//     element = component()
//     document.body.appendChild(element)
//   })
// }