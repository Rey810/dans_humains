import React, { useState } from "react"
import Toolbar from "../components/Navigation/Toolbar/Toolbar"
import Menu from "../components/Navigation/Menu/menu"
import menuToggle from "../components/Navigation/MenuToggle/MenuToggle"

const Layout = ({ children }) => {
  const { showMenu, setShowMenu } = useState(false)

  // const menuClosedHandler = () => setshowMenu(false)

  // const menuToggleHandler = () => {
  //   console.log("clicked!")
  //   setShowMenu(!showMenu)
  // }

  return (
    <>
      {/* Needs to be responsive */}
      {/* <Toolbar open={menuToggleHandler} /> */}
      <Menu />
      <div>{children}</div>
    </>
  )
}

export default Layout
