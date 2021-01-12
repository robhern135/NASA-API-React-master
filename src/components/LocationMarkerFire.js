import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarkerFire = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick} >
      <Icon icon={locationIcon} className="location-icon-fire" />
    </div>
  )
}

export default LocationMarkerFire
