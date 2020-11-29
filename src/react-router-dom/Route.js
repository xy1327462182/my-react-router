import React from 'react'
import { Consumer } from './context'

function Route() {
  return (
    <Consumer>
      {
        //定义一个函数，来消费Provider提供的数据
        value => {
          console.log('value::', value);
          return null
        }
      }
    </Consumer>
  )
}

export default Route
