import React, { useContext } from 'react';
import { Imagen } from '../Imagen/Imagen';
import './Tarjeta.css'
import { Menu } from '../Menu/Menu';
import { ListaCanciones } from '../ListaCanciones/ListaCanciones';
import { musicContext } from '../../Contexto/Contexto';


export const Tarjeta = () => {
    const otherContext = useContext(musicContext)
  return (

    <>

    
    
    <div className="target">

      <div className="image">
        <Imagen image="https://www.rockaxis.com/img/newsList/6639377.jpg"/>
      </div>
      <div className="contentTarget">
        
        <h2>{otherContext.cancion.nombre}</h2>
        <h3>{otherContext.cancion.autor}</h3>
        <div className="times">
          <span id="time-trans"></span>
          <span id="time-total"></span>
        </div>
        <progress id="file" value="0" max="100"></progress>
        <div className="menu">
          <audio id="cancion1" src=""></audio>
          <Menu/>
        </div>
      </div>
    </div>
    </>
  );
};
