import React, { useState } from 'react'
const App = () => {
  const [num, setnum] = useState(0);

  function increaseNum() {
    setnum(num + 1)
  }

  function decreaseNum() {
    setnum(num - 1)
  }

  function jump() {
    setnum(num + 5)
  }
  return (
    <div>
      <div className="num">
        {num}
      </div>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default App

// import React, { useState } from 'react'


// const App = () => {
//   const [num, setNum] = useState(0);

//   function changeNum() {
//     setNum(num+1)
//   }
//   return (
//     <div>
//       <h1>The value of num is {num}</h1>
//       <button onClick={changeNum}>
//         Change value
//       </button>
//     </div>
//   )
// }

// export default App

