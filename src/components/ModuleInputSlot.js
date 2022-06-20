import React from 'react';
import './ModuleInputSlot.css';
function ModuleInputSlot() {
    const handleDrop = (event) =>{
        event.preventDefault();
        const moduleData = event.DataTransfer.getData("ModuleData");
        console.log(moduleData);
    }
    // Allows drop
    const dragOver = (event) => {
        event.preventDefault();
        return false;
    }
  return (
    <div className="Module-Input-Slot" onDrop={handleDrop} onDragOver={dragOver}></div>
  )
}

export default ModuleInputSlot