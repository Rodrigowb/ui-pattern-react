// Import
import {useState} from "react"
import './Menu.css'
import assetArray from './data.js'


// Function
function Menu(props) {
  // State for the class
  const [active, setActive] = useState("nav")
  // Return
  return (
    <div>
      <div className="menu-open" onClick={() => setActive("nav active")}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={active}>
        <div className="menu-close" onClick={() => setActive("nav")}>
          <span></span>
          <span></span>
        </div>
        <ul>
          {assetArray.map((asset) => {
            return (<li>{asset}</li>)
          })}
        </ul>
      </nav>
    </div>
  )
}

// Export
export default Menu;