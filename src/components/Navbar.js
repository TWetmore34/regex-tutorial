import { FaTimes } from 'react-icons/fa'
import NavEntry from './NavEntry'
import { useState } from 'react'

const Navbar = ({ navbar, setIndex, changeIndex }) => {

      // 
      let [regexTutorialDisplay, setRegexTutorialDisplay] = useState(false)
       // navbar entry render
       const navEntryHandler = () => {
        setRegexTutorialDisplay(!regexTutorialDisplay)
      }

  return (
    <nav style={{cursor: 'pointer'}} className="navbar">
        <FaTimes onClick={navbar} style={{color: 'red', cursor: 'pointer'}} />
        <ul>
          <li onClick={navEntryHandler}>
            Regex Tutorial
          </li>
          {regexTutorialDisplay ? 
            (
              <li>
            <NavEntry changeIndex={changeIndex} id={0} title={'Home'} />
            <NavEntry changeIndex={changeIndex} id={1} title={'.test'} />
            <NavEntry changeIndex={changeIndex} id={2} title={'.match'} />

             </li>
            ) :
            null}
              Regex Maker
            
        </ul>
    </nav>
  )
}

export default Navbar