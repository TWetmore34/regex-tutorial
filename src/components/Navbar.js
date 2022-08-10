import { FaTimes } from 'react-icons/fa'
import NavEntry from './NavEntry'
import { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'

const Navbar = ({ navbar, changeIndex }) => {

      // 
      let [regexTutorialDisplay, setRegexTutorialDisplay] = useState(false)
       // navbar entry render
       const navEntryHandler = () => {
        setRegexTutorialDisplay(!regexTutorialDisplay)
      }

  return (
    <nav style={{cursor: 'pointer'}} className="navbar">
        <FaTimes onClick={navbar} style={{color: 'red', cursor: 'pointer'}} />
        <ul style={{listStyle: 'none'}}>
          <li onClick={navEntryHandler}>
            Regex Tutorial
            <IoIosArrowDropdown />
          </li>
          {regexTutorialDisplay ? 
            (
              <li className="nav-entry">
            <NavEntry changeIndex={changeIndex} id={0} title={'Home'} />
            <NavEntry changeIndex={changeIndex} id={1} title={'.test'} />
            <NavEntry changeIndex={changeIndex} id={2} title={'.match'} />
             </li>
            ) :
            null}
            <li>
            Regex Maker (W.i.P)
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar