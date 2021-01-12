import { useState, useEffect } from 'react'


//Components
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [ eventData, setEventData] = useState([])
  const [ loading, setLoading] = useState(false)

  useEffect(() => {
    //setEffect has to return a function so create it...
    const fetchEvents = async () => {

      setLoading(true)

      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')

      //only pull out data of 'events' from response and json it
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)

      console.log(events)

    }

    //... before calling it immediately
    fetchEvents()

  }, [])

  return (
    <div>
      <Header title={"Natural Event Tracker (powered by NASA)"} />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
