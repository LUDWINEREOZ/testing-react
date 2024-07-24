import { useState, useEffect } from "react"
export const TextH2 = () => {

  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  }

  useEffect(() =>{
    console.log("Componenete montado");
    return () => {
      console.log("Componente desmontado");
    }
  },[]);
  // useEffect(() =>{
  //   console.log("Texto cambio");
  // },[text]);

  return (
    <div>
      <input type="text" onChange={handleText} />
      <p>{text}</p>
    </div>
    
  )
}