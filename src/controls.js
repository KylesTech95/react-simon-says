import './App.css'
import { React } from 'react'

export default function Controls({disabled,startGame,resetRef,controlRef,playRef,subRef,autoTextFn,level,setDisabled,setGameStarted,setComp,setComp_tile_delay,setLevel,comp_speed,start_count,setComp_speed,comp}) {
const resetFn = ()=>{
  let txt = level < 1 ? `Pass level 0 first` : `It's okay, try again!` //ternary condition for displaying a message based on level
  start_count=750 
  autoTextFn(txt,subRef.current)
  subRef.current.style='color:red'

    setDisabled(true)//setDisabled is set to true to prevent the user from clicking tiles
    setComp_speed(start_count)
    setComp_tile_delay(comp_speed/2)
    setLevel(0)
    setComp(level < 1 ? comp:[])//if level is less than 1 (or level === 0) computer's sequence remains, else it's an empty array

    playRef.current.classList.remove('disabled') //play button reappears
    controlRef.current.classList.remove('centered')
    controlRef.current.classList.add('space-evenly')
      setTimeout(()=>{
        setGameStarted(false)
        autoTextFn('Try to beat all 20 rounds!',subRef.current)
        if(disabled){subRef.current.style='color:#fff' //if disabled is true, set the color back to white
      }
      },1500)
      
}
  return (
    <div id="controls-wrapper" className='space-evenly' ref={controlRef}>
      <div className="controls-start">
        <span className="material-symbols-outlined play appeared" ref={playRef} onTouchStart={startGame} onClick={startGame}>play_arrow</span>
      </div>
      <div className="controls-reset" ref={resetRef}>
        <span className="material-symbols-outlined reset appeared" onTouchStart={resetFn} onClick={resetFn}>restart_alt</span>
      </div>
    </div>
  )
}

