import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function getData () {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData = async () => {
  //   const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)

  //   const data = await response.json()
  //   console.log(data)
  // }

  // const getData = async () => {
  //   const response =await axios.get('https://jsonplaceholder.typicode.com/users')

  //   console.log(response.data)

  // }

  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Get Images</button>
      <div>
        {data.map(function(elem, index){
          return <h3>hello, {elem.author} {index+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App