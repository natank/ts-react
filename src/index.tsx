import ReactDOM from 'react-dom';
import EventComponent from './events/eventComponent'
import React from 'react'

export default function App() {

  return (
    <div>
      <EventComponent />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)