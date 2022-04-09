// Import 
import {useState, useEffect} from "react"
import Card from './Card.jsx'

// Function
function Api(props) {
  // Use state for the current asset
  // TODO: lift this state to receive info from the buttons
  const [asset, setAsset] = useState("BTC-USD")
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
    'x-api-key': 'AiP36bAlD85Ll8ruQTJUyRtF35ca0qj7MEjfweW1'
    }
  }

  // Call yahoo api
  const handleClick = (event) => {
    fetch(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${asset}`, configuration)
      .then(response => response.json())
      .then(data => {
        const rootArray = (data.quoteResponse.result[0])
        setAsset(rootArray.shortName)
        setTime(() => currentDate())
        setDif(roundNumber(rootArray.regularMarketChange, 3))
        setPercDiff(`${roundNumber(rootArray.regularMarketChangePercent, 3)}%`)
        setPrice(roundNumber(rootArray.regularMarketPrice, 0))
      })
  }

  // Call when renders the page
  useEffect(() => {
    handleClick()
  }, [])

  // Return
  return (
    <Card
      asset={asset}
      time={time}
      dif={dif}
      percDiff={percDiff}
      price={price}
    />
  )
}

// Export
export default Api