import { useState, useEffect } from 'react'


//Components
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [ eventData, setEventData] = useState([])
  const [ loading, setLoading] = useState(false)


  const [fireChecked, setFireChecked] = useState(true)
  const [volcanoChecked, setVolcanoChecked] = useState(true)
  const [iceChecked, setIceChecked] = useState(true)

  useEffect(() => {
    //setEffect has to return a function so create it...
    const fetchEvents = async () => {

      setLoading(true)

      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      //only pull out data of 'events' from response and json it
      const { events } = await res.json()

      setEventData(events)
      setLoading(false) 

    }

    //... before calling it immediately
    fetchEvents()

  }, [])

  const checkFire = () => {
    setFireChecked(!fireChecked)
  }
  const checkIce = () => {
    setIceChecked(!iceChecked)
  }
  const checkVolcano = () => {
    setVolcanoChecked(!volcanoChecked)
  }

  return (
    <div>
      <Header title={"Natural Event Tracker (powered by NASA)"} checkFire={checkFire} checkIce={checkIce} checkVolcano={checkVolcano} />
      { !loading ? <Map eventData={eventData}  fireChecked={fireChecked} iceChecked={iceChecked} volcanoChecked={volcanoChecked} /> : <Loader />}
    </div>
  );
}

export default App;
