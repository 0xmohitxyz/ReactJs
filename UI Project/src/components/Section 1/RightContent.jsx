import RightCard from "./RightCard"
const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-3/4 flex rounded-4xl overflow-x-auto flex-nowrap gap-1  '>
       {
        props.users.map(function(elem, index){
          return <RightCard key = {index} id = {index+1} img = {elem.img} intro = {elem.intro} tag = {elem.tag}/>
        })
       }
    </div>
  )
}

export default RightContent