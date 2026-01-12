import { ArrowRight } from 'lucide-react';

const RightCard = (props) => {
    return (
        <div className='h-[95%] w-80 rounded-3xl m-2.5 gap-1 overflow-hidden relative shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="professional" />
            <div className="num bg-black flex text-white rounded-full w-10 h-10 pl-3 pt-2 top-4 left-5 items-center absolute font-medium">
                {props.id}
            </div>

            <div className='bottom-0'>
                <p className='text-white pl-4 text-xl bottom-45 absolute'>
                    {props.intro}
                </p>

                <div className='absolute bottom-7 flex justify-around gap-26'>
                    <button className='w-[150] p-1 bg-blue-800 rounded-full m-4 left-3 text-white'>
                        {props.tag}
                    </button>

                    <button>
                        <ArrowRight size={72} color="#000000" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightCard