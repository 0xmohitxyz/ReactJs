import React from 'react'

const App = () => {
  // localStorage.setItem('user', 'mohit')
  // const user = localStorage.getItem('user', 'mohit')

  // console.log(`user: ${user}`)

  const user = {
    username: "Mohit",
    age: 21,
    city: 'Jaipur'
  }

  localStorage.setItem('user',JSON.stringify(user))
  console.log(user)

  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)
  return (
    <div>App</div>
  )
}

export default App