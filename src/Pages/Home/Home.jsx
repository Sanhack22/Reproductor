import React from 'react'
import { Tarjeta } from '../../Components/Tarjeta/Tarjeta'
import { ListaCanciones } from '../../Components/ListaCanciones/ListaCanciones'



export const Home = () => {
  return (
    
    <>
      <ListaCanciones/>
      <Tarjeta></Tarjeta>
      <audio src="../../../assets/canciones/a.ogg" type='audio/mp3' controls></audio>

    </>
  )
}
