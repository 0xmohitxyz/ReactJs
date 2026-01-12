import React from 'react'
import Section1 from './components/Section 1/Section1'
import Section2 from './components/Section 2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, rerum?',
      tag: 'Satisfied'
    },

     {
      img: 'https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro: 'w;knrfcmfu9 jkernfji sdjdknkj wdjj wfjn jjnffirjnjn',
      tag: 'Happy'
    },

     {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'qwerty uiop asdf ghjk llz xcvb nm mko',
      tag: 'Chad'
    },

    {
      img: 'https://media.istockphoto.com/id/2227426152/photo/focused-businesswoman-working-on-laptop-in-modern-office-with-plants.webp?a=1&b=1&s=612x612&w=0&k=20&c=wctKpc8alW1yN32seKE0ZmqAcPh2NK3VTlQmjKa1bDw=',
      intro: 'qwerty uiop asdf ghjk llz xcvb nm mko',
      tag: 'GiGaChad'
    },

    {
      img: 'https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww',
      intro: 'qwerty uiop asdf ghjk llz xcvb nm mko',
      tag: 'Average'
    }

  ]
  return (
    <>
      <Section1 users = {users}/>
      <Section2 />
    </>

  )
}

export default App