import React, { useContext } from 'react'
import { musicContext } from '../../Contexto/Contexto'
export const Cancion = () => {
    const audioContext = useContext(musicContext)
    
    return(
        <audio src='../../assets/canciones/Mammamia.mp3' controls></audio>
        // <audio src={musicContext.cancion} controls></audio>
    )
      
    }
