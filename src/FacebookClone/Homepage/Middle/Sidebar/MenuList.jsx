import React from 'react'
import "./MenuList.css"
const Menulist = ({Icon,title}) => {
  return (
    <div className='Menulist'>
    <div className="MenuIcon">
    {Icon}
     </div>
     <div className="Menutitle">
    {title}
    </div>      
    </div>
  )
}

export default Menulist
