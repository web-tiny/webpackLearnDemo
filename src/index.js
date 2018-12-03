// import _ from 'lodash'
// import Print from "./print.js";
// import 'babel-polyfill'
// import { file, parse } from './globals'
// import './style/styles.css'
// import { cube } from './math'
// if (process.env.NODE_ENV !== 'production') {
//   console.log('Looks like we are in development mode!');
// }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log("SW registered: ", registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    })
  })
}

// function getComponent () {
//   let element = document.createElement('div')
//   // let btn = document.createElement('button')
//   // let br = document.createElement('br')

//   element.innerHTML = join(['Hello','webpack'], ' ')
//   // btn.innerHTML = 'Click me and check the console!'
//   // element.onclick = Print.bind(null, 'hello webpack !')
//   // element.appendChild(br)
//   // element.appendChild(button)

//   // this.alert("Hmmm, this probably isn't a great idea...");
//   /**
//    * 目前还不支持import 在函数中引入模块的写法，所以代码分离和懒加载测试失败
//    */
//   // btn.onclick = e => import (/*webpackChunkName: "print"*/'./print').then(m => {
//   //   let print = module.default
//   //   print()
//   // })

//   // element.appendChild(btn)
//   // let element = document.createElement('div')
//   // element.innerHTML = [
//   //   'Hello webpack!', '5 cubed is equal to' + cube(5)
//   // ].join('\n\n')

//   return element

//   // return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
//     // var element = document.createElement('div')
//     // const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
//     // element.innerHTML = _.join(['Hello','webpack4'], ' ')

//     // return element
//   // }).catch(error => 'An error occurred while loading the component')
// }

// document.body.appendChild(component())
// let element = component()
// document.body.appendChild(getComponent());
// getComponent().then((component => {
//   document.body.appendChild(component);
// }))

// if(module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('accepting the updated printMe module !');
//     // printMe()
//     document.body.removeChild(element)
//     element = component()
//     document.body.appendChild(element)
//   })
// }