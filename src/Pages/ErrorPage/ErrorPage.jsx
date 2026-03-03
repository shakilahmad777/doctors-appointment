import React from 'react'

export default function ErrorPage() {
    const errorComp = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
    }
  return (
    <div style={errorComp} className=''>
        <h1>Oooopppp!!!!</h1>
    </div>
  )
}
