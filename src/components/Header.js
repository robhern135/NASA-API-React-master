import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import locationIconVolcano from '@iconify-icons/wi/volcano'
import locationIconIce from '@iconify-icons/fa-solid/icicles'


const Header = ({ title, checkFire, checkIce, checkVolcano, fireChecked, iceChecked, volcanoChecked }) => {


  return (
    <React.Fragment>
    <div className="header">
      <h1>{ title }</h1>
    </div>
    <div className="toggles">
      <label>
        <input
          name="fire"
          type="checkbox"
          value={fireChecked}
          checked={fireChecked}
          onChange={ () => checkFire() }
          defaultChecked={true}
          />
        <Icon style={{ fontSize: 34 }} icon={locationIcon} color={'white'} />
      </label>
      <label>
        <input
          name="ice"
          type="checkbox"
          value={iceChecked}
          checked={iceChecked}
          onChange={ () => checkIce() }
          defaultChecked={true}
          />
        <Icon style={{fontSize: 24 , transform: 'rotate(180deg)', marginLeft: 5, marginRight: 5 }} icon={locationIconIce} color={'white'}  /> 
      </label>
      <label>
        <input
          name="Volcano"
          type="checkbox"
          value={volcanoChecked}
          checked={volcanoChecked}
          onChange={ () => checkVolcano() }
          defaultChecked={true}
          />
        <Icon  style={{ fontSize: 34 }} icon={locationIconVolcano} color={'white'}  />
        
      </label>
        


    </div>

    </React.Fragment>

  )
}
export default Header