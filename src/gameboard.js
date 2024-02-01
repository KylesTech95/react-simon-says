import './App.css'    
import { useEffect,React,useRef } from 'react'

let human = []
export default function Gameboard({bg_count,tiles,tilesRef,start_count,comp_speed,setComp_speed,setComp_tile_delay,comp,setComp,index,setIndex,playRound,subRef,autoTextFn,setGameStarted,setLevel,playRef,controlRef,setDisabled,level}) {

  let soundRef = useRef()
  useEffect(()=>{
    if(level < 1) {
      setDisabled(true)
    }
  },[level])

  function clickFn(e){
    // let audio = soundRef.current
    console.log(comp)

    clicked(e.target.id)
    human.push(e.target.id)
    setIndex(index+1)
    console.log(human)
    if(human[index]!==comp[index]){
      gameOver('GAME OVER')
    }
    if(human[index]===comp[index] && human.length===comp.length-1 && index < 13){
      human=[]
      setIndex(0)
      setDisabled(true)
      autoTextFn(`You passed level ${level}!`,subRef.current)
      setTimeout(()=>{
        playRound()
      },1500)
      }
      if(index === 13){
        gameOver('you win!')
        }
      
    }
  function gameOver(txt){
    start_count=750 
    setDisabled(true)
    autoTextFn(txt,subRef.current)
    if(index === 13)subRef.current.style='color:green'
    else subRef.current.style='color:red'
    
    setIndex(0)
    playRef.current.classList.remove('disabled')
    controlRef.current.classList.remove('centered')
    controlRef.current.classList.add('space-evenly')
    setDisabled(true)
    setComp_speed(start_count)
    setComp_tile_delay(comp_speed/2)
    setLevel(0)
    setComp([])
    human = []
    setTimeout(()=>{
      setGameStarted(false)
      subRef.current.style=`color:${bg_count%2==0 ? `var(--black-color)` : `var(--white-color)`}`
    },index === 13 ? 3000 : 1500)
    
  }
  function clicked(col){
    let elem = document.getElementById(`${col}`)
        elem.classList.remove('deactivated-ready')
      setTimeout(()=>{
        elem.classList.add('deactivated-ready')
      },150)

  }
  return (
    <>
      <div id="gameboard-container" ref={tilesRef}>
        {tiles.map((tile)=>(
          <div className="tile deactivated-default" onClick={clickFn} key={tile.id} id={tile.color} style={{backgroundColor:`${level>0&&level%4==0 ? tile.alternate : tile.color}`, transition:`.3s`}}>
          </div>
        ))}
      </div>
    </>
  )
}
