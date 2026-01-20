import { useEffect, useState } from "react"

const App = () => {
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)

  function numCalled() {
    console.log("Num is called")
  }

  function num1Called () {
    console.log("Num1 Called")
  }

  useEffect(() => {
    numCalled()
  }, [num])

  useEffect(() => {
    num1Called()},
    [num1]
  )
  
  

  return (
    <div>
      <h1>Num {num}</h1>
      <h1>Num1 {num1}</h1>
      <button onClick={()=> {
        setNum(num+1)
      }}>Chnage Num</button>

      <button
      onClick={()=> {
        setNum1(num1-1)
      }}>Change Num2</button>
    </div>
  )
}

export default App