// Import 
import {useState, useEffect} from "react"
import Card from './Card.jsx'

// Function
function Api({asset}) {
  // Use state for the current asset
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [dif, setDif] = useState("")
  const [percDiff, setPercDiff] = useState("")
  const [price, setPrice] = useState("")

  // Round number function
  function roundNumber(number, places) {
    let roundedNum = (Math.round(number * 100) / 100).toFixed(places);
    return roundedNum;
  }

  // Creating a date obj
  function currentDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
  }

  // Setting the yahoo finance API request
  const configuration = {
    method: 'GET',
    headers: {
    'x-api-key': 'wb62oKe7T7X1lmjqff5a8s4WorS5h5cazj2TlhZh'
    }
  }

  // Call yahoo api for clickable elements
  const handleClick = (event) => {
    fetch(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${asset}`, configuration)
      .then(response => response.json())
      .then(data => {
        const rootArray = (data.quoteResponse.result[0])
        setName(rootArray.shortName)
        setTime(() => currentDate())
        setDif(roundNumber(rootArray.regularMarketChange, 3))
        setPercDiff(`${roundNumber(rootArray.regularMarketChangePercent, 3)}%`)
        setPrice(roundNumber(rootArray.regularMarketPrice, 2))
      })
  }

  // Call when renders the page
  useEffect(() => {
    handleClick()
  }, [asset])

  // Return
  return (
    <Card
      asset={name}
      time={time}
      dif={dif}
      percDiff={percDiff}
      price={price}
    />
  )
}

// Export
export default Api