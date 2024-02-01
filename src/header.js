import React from 'react'

export default function header({subRef,headingRef}) {
  return (
    <header id="head">
      <h1 className="game-heading heading" ref={headingRef}>Simon Says</h1>
      <h3 className="sub-text" ref={subRef}></h3>
    </header>
    
  )
}
