import React from 'react';
import '../style.scss'

const Konyvajanlo = ({nev, ar, akcio}) => {
  return (
    <>
        <h3>{nev}</h3>
        {akcio ? <p className='akcio'>{ar} Ft</p> : <p>{ar} Ft</p>}        
    </>
  )
}

export default Konyvajanlo