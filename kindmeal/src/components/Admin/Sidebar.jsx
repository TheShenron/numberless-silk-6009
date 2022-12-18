import React from 'react'
import { FaBars, FaHotel, FaTh, FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import styles from "./Sidebar.module.css"
const Sidebar = () => {
    const menuItem = [
        {
            path:"/dashboard/admin",
            name:'Dashboard',
            icon:<FaTh/>
        },
        {
            path:"/resaurants",
            name:'Restaurant',
            icon:<FaHotel/>
        },
        {
            path:"/users",
            name:'Users',
            icon:<FaUser/>
        }
    ]
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <div className={styles.top_section}>
                <h1 className={styles.logo}>Logo</h1>
                <div className={styles.bars}>
                    <FaBars/>
                </div>
            </div>
            {menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index}  className={({ isActive }) => {
                    const linkClasses = [styles.link];
                    if (isActive) linkClasses.push(styles.active);
                    return linkClasses.join(" ");
                  }}>
                    <div className={styles.icon}>{item.icon}</div>
                    <div className={styles.link_text}>{item.name}</div>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Sidebar