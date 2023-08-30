import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'

const Nav = ({toggleSidebar}) => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
               {
                navLinks.map(link => (
                    <li key={link.label}><a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-all duration-300'>{link.label}</a></li>
                ))
               }
            </ul>
            <button className='hidden max-lg:block cursor-pointer' onClick={toggleSidebar}>
                <img src={hamburger} alt="hamburger" width={25} height={25}/>
            </button>
        </nav>
    </header>
  )
}

export default Nav