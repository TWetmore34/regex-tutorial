const NavEntry = ({ title }) => {

     // navbar entry render
     const navEntryHandler = (e) => {
        console.log(e.target.classList.add())
      }

  return (
    <li onClick={navEntryHandler} style={{cursor: 'pointer'}} className="nav-entry">
        {title}
    </li>
  )
}

export default NavEntry