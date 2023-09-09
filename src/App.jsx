import { useState } from "react"

function App() {

  const [color, setColor] = useState("skyblue")

  // const handleButtonClick = (color) =>{
  //   setColor(color)
  // }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded">
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>{setColor('red')}}>Red</button>
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"brown"}} onClick={()=>{setColor('brown')}}>Brown</button>
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>{setColor('green')}}>Green</button>
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=>{setColor('orange')}}>Orange</button>
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>{setColor('pink')}}>Pink</button>
          <button className="outline-none px-4 py-2 rounded text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>{setColor('blue')}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
