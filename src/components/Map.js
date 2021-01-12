import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'

import LocationMarkerFire from './LocationMarkerFire'
import LocationMarkerVolcano from './LocationMarkerVolcano'
import LocationMarkerIce from './LocationMarkerIce'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ center, zoom, eventData }) => {

  const [locationInfo, setLocationInfo] = useState(null)

  const wildfireMarkers = eventData.map(ev => {
    //check is wildfire
    if( ev.categories[0].id === 8 ){
      let lat = ev.geometries[0].coordinates[1],
          lng = ev.geometries[0].coordinates[0],
          desc = "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade."
      if( lat && lng){
        return(
          <LocationMarkerFire
            key={ ev.id }
            lng={lng}
            lat={lat}
            onClick={ () => setLocationInfo({ desc: desc, id: ev.id, title: ev.title, sources: ev.sources  })}
          />)
      } else { return null }
    } else { return null }
  })
  const volcanoMarkers = eventData.map(ev => {
    //check is Volcano
    if( ev.categories[0].id === 12 ){
      let lat = ev.geometries[0].coordinates[1],
          lng = ev.geometries[0].coordinates[0],
          desc = "Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes)."
      if( lat && lng){
        return(
          <LocationMarkerVolcano
            key={ ev.id }
            lng={lng}
            lat={lat}
            onClick={ () => setLocationInfo({ desc: desc, id: ev.id, title: ev.title, sources: ev.sources })}
          />
        )
      } else { return null }
    } 
    else { return null }
  })
  const iceMarkers = eventData.map(ev => {
    //check is Ice
    if( ev.categories[0].id === 15 ){
      let lat = ev.geometries[0].coordinates[1],
          lng = ev.geometries[0].coordinates[0],
          desc = "Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs."
      if( lat && lng){
        return(
          <LocationMarkerIce
            key={ ev.id }
            lng={lng}
            lat={lat}
            onClick={ () => setLocationInfo({ desc: desc, id: ev.id, title: ev.title, sources: ev.sources })}
          />
        )
      } else { return null }
    } 
    else { return null }
  })

  return (
    <div className="map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBj2k9p6wvZnaJ5vWKNlNRJIqk24xIQIZs' }}
          defaultCenter={ center }
          defaultZoom={ zoom }
          onClick={ () => console.log('clicked map')}
      >
        { wildfireMarkers }
        { volcanoMarkers }
        { iceMarkers }
      </GoogleMapReact>
      { locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
      lat: 42.3265,
      lng: -122.8756
  },
  zoom: 6
}

export default Map

