import { createContext, useState } from "react";
export const musicContext = createContext();

export const MusicProvider = ({children}) =>{

    const playList = [
        {
            id:"1",
            nombre:"MAMMAMIA",
            autor:"Maneskin",
            soung:'../Mammamia.mp3'
        }
       
    ]
    const [soungActual,setSoung] = useState('1')

    const cancionActual = playList.find(x => x.id === soungActual);

    const [cancion, setCancion] = useState(cancionActual);

    return (
        <musicContext.Provider value={{playList,setSoung,soungActual,cancion}}>
            {children}
        </musicContext.Provider>
    )
}
