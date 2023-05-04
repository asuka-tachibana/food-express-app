import MenuItem  from '../components/MenuItem'
import React, { useState, useEffect } from 'react'
import axiosInstance from '../util/axiosInstance';
import '../styles/Menu.css'

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get('/menu')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className='menu'>
      <h1 className="menuTitle">Our Menu</h1>
      <div className='menuList'>
        {data.map((menuItem, key) => {
          return <MenuItem name={menuItem.name} price={menuItem.price} image={menuItem.image} key={key} />
        })}
      </div>
    </div>
  )
}

export default Menu
