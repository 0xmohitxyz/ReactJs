import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div className='h-screen bg-black text-white'>
      <h1 >
        <Navbar />
       
      </h1>
    </div>
  )
}

export default App