import {LiaTimesSolid} from 'react-icons/lia'
import {navLinks} from '../constants'

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <aside>
        <div className={`fixed bg-black-300 min-h-screen min-w-full inset-0 z-20 transition-all duration-300 ${isSidebarOpen ? 'visible' : 'invisible'}`}>
          <div className={`fixed top-0 right-0 bg-[#fff]  min-h-screen w-[300px] p-11 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}>
            <button type='button' className='absolute top-10 right-8 text-3xl text-coral-red' onClick={toggleSidebar}><LiaTimesSolid /></button>
            <ul className='mt-8'>
                {navLinks.map(link => (
                    <li key={link.label} className='p-4 flex items-center font-semibold text-lg hover:text-coral-red transition-all duration-300' onClick={toggleSidebar}><a href={link.href}>{link.label}</a></li>
                ))}
            </ul>
          </div>
        </div>
    </aside>
  )
}

export default Sidebar