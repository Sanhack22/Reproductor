import React from 'react'
import { useContext } from 'react'
import { musicContext } from '../../Contexto/Contexto'
import './ListaCanciones.css'
import { MdPlayCircleFilled } from "react-icons/md";




export const ListaCanciones = () => {
    const musicsContext = useContext(musicContext);

    function soungActual(id) {
        musicsContext.setSoung(id)
    }

  return (
    <div className='listaCanciones'>
    
        {
             musicsContext.playList.map(x=>(
                <div className='cancion'>
                    <p className='name'>
                        {x.nombre}
                    </p>
                    <p className='autor'>
                        {x.autor}
                    </p>
                    <div className='icon' onClick={()=>soungActual(x.id)}>
                        <MdPlayCircleFilled/>
                    </div>
                   
                </div>
            ))
        } 

        

    </div>
  )
}
