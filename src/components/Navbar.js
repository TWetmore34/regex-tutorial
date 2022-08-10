import { FaTimes } from 'react-icons/fa'

const Navbar = ({ navbar }) => {
  return (
    <nav className="navbar">
        <FaTimes onClick={navbar} style={{color: 'red', cursor: 'pointer'}} />
        <ul>
            <li>
                <a href="/">Regex Tutorial</a>
            </li>
            <li>
                <a href="/">Regex Tutorial</a>
            </li>
            <li>
                <a href="/">Regex Tutorial</a>
            </li>
            <li>
                <a href="/">Regex Tutorial</a>
            </li>
            <li>
                <a href="/">Regex Tutorial</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar