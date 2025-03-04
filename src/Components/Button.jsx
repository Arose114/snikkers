import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, hoverColor}) => {
  return (
    <div className={`flex justify-center items-center gap-2 leading-0 text-lg font-mono 
    
    ${backgroundColor ? `${backgroundColor } ${textColor} ${borderColor} ${hoverColor}` : 'bg-red-400  border-red-400 text-white'} px-7 py-4 rounded-full border hover:bg-red-500 hover:text-red-200 hover:shadow-2xl`}> 
     {label}
   {iconURL && <img src={iconURL}  className='ml-2 rounded-full w-5 h-5'/>}
    </div>
  )
}

export default Button
