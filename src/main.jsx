import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store/store'
import Counter from './components/count'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <Counter></Counter>
  </Provider>,
  document.getElementById('root')
)
