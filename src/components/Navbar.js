import { FaTimes } from 'react-icons/fa'
import NavEntry from './NavEntry'
import { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'

const Navbar = ({ changeIndex, lessons }) => {

      // switches nav entry display
      let [regexTutorialDisplay, setRegexTutorialDisplay] = useState(false)
       // navbar entry render
       const navEntryHandler = () => {
        setRegexTutorialDisplay(!regexTutorialDisplay)
      }

      // renders nav entries based on lessons
      const lessonList = () => {
        return lessons.map(lesson => (
          <NavEntry id={lesson.id} key={lesson.id} changeIndex={changeIndex} title={lesson.topic} /> 
        ))
      }

  return (
    <nav style={{cursor: 'pointer'}} className="navbar">
        <ul style={{listStyle: 'none'}}>
          <li onClick={navEntryHandler}>
            Regex Tutorial
            <IoIosArrowDropdown />
          </li>
          {regexTutorialDisplay ? 
            (
              <li className="nav-entry">
                {lessonList()}
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