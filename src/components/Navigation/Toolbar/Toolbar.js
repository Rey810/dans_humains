import React from "react"
import MenuToggle from "../MenuToggle/MenuToggle"
import NavigationItems from "../NavigationItems/NavigationItems"
import "./Toolbar.css"

const Toolbar = props => {
  return (
    <header>
      {/* Menu Toggle displayed on <500px displays */}
      <MenuToggle />
      {/* Desktop Only displayed on >=500px displays */}
      <nav className="desktop-only">
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
