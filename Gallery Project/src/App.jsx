import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)
  const getData = async () => {
    // const randPage = Math.floor(Math.random() * 10)
    // const randImages = Math.floor(Math.random() * 50)
    // console.log(randPage)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=25`)
    // const response = await axios.get(`https://picsum.photos/v2/list?page=${randPage}&limit=${randImages}`)

    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])
  let printUserData = <h3 className="text-gray-400">
    Images loading...
  </h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, index) {
      return <div key={index}>
        <a href={elem.url} target="_blank">
          <div className="h-40 w-44">
            <img className="h-full object-cover" src={elem.download_url} alt="" />
          </div>
          <h2 className="font-bold">{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black text-white h-screen overflow-auto p-4'>
      <div className="flex flex-wrap gap-2">
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4  gap-6">
        <button onClick={() => {
          if(index > 1) {
            setIndex(index - 1)
            // getData()
          }
        }} className="bg-amber-500 text-black rounded px-4 py-2 font-semibold  cursor-pointer">Previous</button>
         <div className="font-bold h-8">{index}</div>
        <button onClick={() => {
          setIndex(index + 1)
          // getData() 
        }} className="bg-amber-500 text-black rounded px-4 py-2 font-semibold cursor-pointer">Next</button>
      </div>
    </div>
  )
}

export default App