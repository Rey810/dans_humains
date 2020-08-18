import React from "react"
import MenuToggle from "../MenuToggle/MenuToggle"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./Toolbar.css"

const toolbar = () => {
  return (
    <header>
      <MenuToggle />
      <nav className="desktop-only">
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar
