import React from 'react'
import data from '../data/ProjectData';
import Module from './Module';
import './ModuleDisplayArea.css'

function ModuleDisplayArea() {
    const generateModules = () => {
        const modules = [];
        for(let i = 0; i < data.length; i++){
          modules.push(<Module sprite={data[i].moduleSprite} title={data[i].title} key={i}/>);
        }
        return modules;
    };
  return (
    <div className='module-display-area'>
        {generateModules()}
    </div>
  )
}

export default ModuleDisplayArea