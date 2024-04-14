import { CiPlay1 } from "react-icons/ci";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useContext, useRef, useState, useEffect } from "react";
import { musicContext } from "../../Contexto/Contexto";
import  './Menu.css'




export const Menu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContext = useContext(musicContext);
  const audioRef = useRef(null);
  const handleTogglePlay = () => {
    // setIsPlaying(!isPlaying);
    // if (!isPlaying) {
    //   audioRef.current.play();
    // } else {
    //   audioRef.current.pause();
    // }
  };
  return (
    <ul>
      <li>
        <GrCaretPrevious />
      </li>
      <li id="reproducir" onClick={handleTogglePlay}>
        <CiPlay1 />
      </li>
      <li>
        <GrCaretNext />
      </li>
    </ul>
  );
};
