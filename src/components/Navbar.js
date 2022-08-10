import { FaTimes } from 'react-icons/fa'
import NavEntry from './NavEntry'

const Navbar = ({ navbar }) => {
  return (
    <nav className="navbar">
        <FaTimes onClick={navbar} style={{color: 'red', cursor: 'pointer'}} />
        <ul>
            <NavEntry title={'Regex Tutorial'} />
            <NavEntry title={'Regex Maker'}/>
            
        </ul>
    </nav>
  )
}

export default Navbar