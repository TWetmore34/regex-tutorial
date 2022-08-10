const NavEntry = ({ title, id, changeIndex }) => {
  return (
    <div onClick={changeIndex} id={id} style={{}} className="nav-entry">
        {title}
    </div>
  )
}

export default NavEntry