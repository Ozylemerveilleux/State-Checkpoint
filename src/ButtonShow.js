import React, {useState} from "react"; 
import Profil from "./Profil"; 

function ButtonShow (){
    const [show , setShow] = useState(true)
    return(
      <div>
      {
        show? <Profil/> : null
      }
      <button onClick={() =>setShow (true)}>done</button>
      <button onClick={() =>setShow(false)}>undone</button>
      </div>
    )
  }
  export default ButtonShow;