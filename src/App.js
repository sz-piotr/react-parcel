import React, { useState, useEffect } from 'react'

export function App () {
  return (
    <>
      <Header color="wheat" />
      <div style={{ color: 'red' }}>Hello World!</div>
    </>
  )
}

function Header ({ color }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setValue(value + 1), 1000)
    return () => clearInterval(interval)
  })

  return (
    <header style={{ backgroundColor: color }}>
      HEADER {value}
    </header>
  )
}