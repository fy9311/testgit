import React from 'react'
import { connect } from 'react-redux'
import * as action from '../store/action'
import { bindActionCreators } from 'redux'


function Counter ({count, increment, decrement}) {
  
  return <div>
    <div>{count}</div>
    <button onClick={() => increment(2)}>+</button>
    <button onClick={() => decrement(5)}>-</button>
  </div>
}

// connect 订阅store，当store中的属性发生更改，自动刷新
// 获取store中的状态，将状态通过组件的props属性映射给组件
// 可以让我们获取dispatch方法

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => bindActionCreators(action, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Counter)