import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify-icons/wi/volcano';

const LocationMarkerIce = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick} >
      <Icon icon={locationIcon} className="location-icon-volcano" />
    </div>
  )
}

export default LocationMarkerIce
