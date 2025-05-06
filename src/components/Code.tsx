import { FaRegCopy } from "react-icons/fa";
export const Code = () => {
  return (
    <div className='w-85 h-200 p-2 mr-2 rounded-sm' 
        style={{backgroundColor: "#282828"}}>
        <div className='flex p-4 h-10 items-center justify-between '>
            <div className='flex gap-1.5'>
                <div className='w-2.5 h-2.5 rounded-full'
                style={{backgroundColor: "#F5655B"}}/>
                <div className='w-2.5 h-2.5 rounded-full'
                style={{backgroundColor: "#F6BD3B"}}/>
                <div className='w-2.5 h-2.5 rounded-full'
                style={{backgroundColor: "#43C645"}}/>
            </div>
            {/* setting Icon */}
            <div>
                {/* Tooltip 추가 필요 */}
              <FaRegCopy fill="#FFF" className="cursor-pointer"/>
            </div>
        </div>
            

    
  </div>
  )
}
