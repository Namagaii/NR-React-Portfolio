import React from 'react'

function Module(props) {
  const handleDragStart = (e) => {
    e.DataTransfer.setData("ModuleData", props.title ? props.title : "unknown module");
  }

  const handleDrag = (e) => {
    //TODO: Delete if this has no use Nothing rn
  }

  return (
    <img className="module" src={props.sprite} title={props.title} onDragStart={handleDragStart} onDrag={handleDrag}/>
  )
}

export default Module