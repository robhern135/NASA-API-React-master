import React from "react"

import spinner from "../spinner.gif"

export default function Loader() {
  return (
    <div className="loader">
      <img src={spinner} alt="loading..." />
      <h1>Fetching data from NASA...</h1>
    </div>
  )
}
