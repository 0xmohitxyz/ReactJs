import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='py-10 flex justify-between px-18 h-[90vh] '>
        <LeftContent />
        <RightContent users = {props.users} />
    </div>
  )
}

export default Content