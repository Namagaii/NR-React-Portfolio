import React from 'react'
import data from '../data/ProjectData';
import Module from './Module';
import './ModuleDisplayArea.css'

function ModuleDisplayArea() {
    const generateModules = () => {
        const modules = [];
        const additionalIterations = 10;
        for (let additional = 0; additional < additionalIterations; additional++){
          for(let i = 0; i < data.length; i++){
            modules.push(<Module sprite={data[i].moduleSprite} title={data[i].title} key={additional * additionalIterations + i}/>);
          }
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