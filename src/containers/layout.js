import React, { useState } from "react"
import Toolbar from "../components/Navigation/Toolbar/Toolbar"
import Menu from "../components/Navigation/Menu/menu"
import menuToggle from "../components/Navigation/MenuToggle/MenuToggle"

const Layout = ({ children }) => {
  // array destructuring: 1st value returned by useState is assigned to showMenu, 2nd value is assigned to setShowMenu
  const [showMenu, setShowMenu] = useState(false)

  const menuToggleHandler = () => {
    console.log("clicked!")
    setShowMenu(!showMenu)
  }

  const menuCloseHandler = () => {
    setShowMenu(false)
  }

  return (
    <>
      {/* Needs to be responsive */}
      <Toolbar toggle={menuToggleHandler} />
      <Menu open={showMenu} closeMenu={menuCloseHandler} />
      <div>{children}</div>
    </>
  )
}

export default Layout
