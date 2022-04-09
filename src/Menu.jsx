// Import
import {useState} from "react"
import './Menu.css'
import assetObj from './data.js'
import {Link} from "react-router-dom"


// Function
function Menu({setAsset}) {
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
          {Object.keys(assetObj).map((key, value) => (
            <li>
              <Link to={assetObj[key]} style={{textDecoration: 'none', color: 'whitesmoke'}}onClick={() => setAsset(Object.keys(assetObj)[value])}
              key={value}
              >{assetObj[key]}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

// Export
export default Menu;