import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarea from './Tarea'

function App() {
  const inputTarea = useRef(null)
  const [tareas, setTareas] = useState([
    { id: 1, contenido: "lavar la ropa" },
    { id: 2, contenido: "cocinar" },
    { id: 3, contenido: "lavar la loza" },
  ])
  function CrearTarea(tareaContenido) {
    console.log(tareaContenido)
    let nuevatarea = {
      id: tareas.length+1,
      contenido: tareaContenido
    }
    setTareas([...tareas, nuevatarea])
    inputTarea.current.value=""

  }
  function borrarTarea(id) {
   let tareasActualizadas=tareas.filter((tarea)=>tarea.id!==id)
    setTareas(tareasActualizadas)
  }
  return (
    <div class="contenedor">
      <div class="titulo"> To Do List </div>
      <div class='ListContainer'>
        <input ref={inputTarea} type="text" name="tarea" id="tarea" onKeyUp={(e) => {
          if (e.key === "Enter") {
            CrearTarea(inputTarea.current.value)
          }
        }} />

        {tareas.map((tarea) => {
          return <Tarea id={tarea.id} contenido={tarea.contenido} delete={borrarTarea}/>
        })}
<div className='Footer'> faltan {tareas.length} elementos</div>
      </div>


    </div>

  )
}

export default App
