import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { categoriesList_sidebar } from '../../services/categoriesList_sidebar'

interface NavLink {
  title: string;
  link: string;
  icon: string;
}

interface SidebarState {
  navList: NavLink[]
}

export const SideBar = () => {

  const [navList, setNavList] = useState<SidebarState["navList"]>([])

  useEffect(() => {
    setNavList(categoriesList_sidebar)
  }, [])

  return (
    <div>
      {navList.map((navItems, index) => {
        return (
          <Link className="" key={index} to={navItems.link} >
            <p>{navItems.title}</p>
          </Link>
        )
      })}
    </div>
  )
}
