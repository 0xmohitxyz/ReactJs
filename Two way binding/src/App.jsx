import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted")
    setTitle('')
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='Enter Your Name'
        value={title} 
        onChange={(e) => {
          setTitle(e.target.value)
          console.log(e.target.value)
         
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App