import React, { useEffect, useState } from 'react'
import "./ProjectNavigation.css"

const ProjectNavigation = ({
  tabs = [],
  onChange,
}) => {
  const [active,setActive] = useState("All");
  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(active);
    }
  }, [active]);
  return (
    <div className='project_navigation'>
      {
        tabs.map((name,index)=>(
          <button onClick={() =>{
            setActive(name)
          }}
          className={`${active === name ? 'active' : ''}`}
          key={index}
          >
            {name}
            </button>
        ))
      }

    </div>
  )
}

export default ProjectNavigation