import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import locationIconVolcano from '@iconify-icons/wi/volcano';
import locationIconIce from '@iconify-icons/fa-solid/icicles';

export default function Header({ title }) {
  return (
    <div className="header">
      <h1 style={{ lineHeight: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Icon style={{ fontSize: 34 }} icon={locationIcon} />
        <Icon icon={locationIconVolcano} />
        <Icon style={{ transform: 'rotate(180deg)', marginLeft: 5, marginRight: 5 }} icon={locationIconIce} /> { title }</h1>
    </div>
  )
}
