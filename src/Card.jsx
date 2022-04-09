// Import
import './Card.css'

// Function
function Card(props) {
  // Return
  return (
    <div className='card-container'>
      <div className='top-info'>
        <p className='asset'>{props.asset}</p>
        <p>{props.time}</p>
        <p>{props.dif}</p>
        <p>{props.percDiff}</p>
      </div>
      <div className='bottom-info'>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

// Export
export default Card