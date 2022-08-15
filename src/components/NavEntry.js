import { Link } from "react-router-dom"

const NavEntry = ({ title, id, changeIndex }) => {
  return (
    <Link to='/' id={id} onClick={changeIndex}>
        {title}
    </Link>
  )
}

export default NavEntry