import "./Tarea.css"


function Tarea(params) {

    return <div className='Tarea' id={'tarea_' + params.id}> {params.contenido}<i className="fa-solid fa-xmark"onClick={()=>{
        params.delete(params.id)
    }}></i></div>


}
export default Tarea
