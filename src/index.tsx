import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch'
import React from 'react'

export default function App() {
  return (
    <div>
      <UserSearch />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)