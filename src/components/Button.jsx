const Button = ({label, iconURL, bgColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
    ${bgColor || 'bg-coral-red'} rounded-full ${textColor || 'text-white'} ${borderColor || 'border-coral-red'} 
    ${fullWidth && 'w-full'} transition-all duration-300 hover:bg-transparent hover:text-coral-red group hover:border-coral-red`}>
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5 group-hover:border group-hover:border-coral-red"/>}
    </button>
  )
}

export default Button