import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const click = () =>{
setShowLinks(!showLinks)
    }
  return (
    <div className='navbar'>
      {/* <div className='hiddenLinks'>
      <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
      </div> */}
      <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <button onClick={click}><ReorderIcon /></button>
      </div> </div>
  )
}

export default Navbar