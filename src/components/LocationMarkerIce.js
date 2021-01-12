import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify-icons/fa-solid/icicles';

const LocationMarkerIce = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker-ice" onClick={onClick} >
      <Icon icon={locationIcon} className="location-icon-ice" />
    </div>
  )
}

export default LocationMarkerIce
