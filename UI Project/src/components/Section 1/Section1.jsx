import Navbar from '../Section 1/Navbar'
import Content from './Content'
const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-white'>
          <Navbar />
          <Content users= {props.users}/>
    </div>
  )
}

export default Section1