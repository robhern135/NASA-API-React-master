import React from 'react'

export default function LocationInfoBox({ info }) {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <h3 style={{ fontWeight: 100 }}>{ info.desc }</h3>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>Title: <strong>{info.title}</strong></li>
      </ul>
      { info.sources && (
        <React.Fragment>
          <h3 style={{ marginBottom:0 }}>Sources:</h3>
          <ol>
          {info.sources.map( (source) => {
            
            const { id, url } = source
            console.log(id, url)
            return (
              <li key={id}>
                <a style={{ color: '#fff',  }} target="_blank" rel="noreferrer" href={url}>{id}</a>
              </li>
            )
          })}
          </ol>
        </React.Fragment>
      )}
    </div>
  )
}
