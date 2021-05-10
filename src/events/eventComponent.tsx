import React from "react";

const EventComponent: React.FC = ()=>{
  const onChange = (event: React.ChangeEventHandler<HTMLInputElement>)=>{
    console.log(event.target.value)
  }
  
  return <div>
    <input onChange={onChange} />
  </div>
}

export default EventComponent;