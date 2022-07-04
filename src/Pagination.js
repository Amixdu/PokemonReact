import React from 'react'

export default function Pagination({ goToNext, goToPrev }) {
  return (
    <div>
      <br></br>
      {goToPrev && <button onClick={goToPrev}>Previous</button>}
      {goToNext && <button onClick={goToNext}>Next</button>}
    </div>
  )
}
