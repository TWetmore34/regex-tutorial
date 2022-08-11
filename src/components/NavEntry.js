const NavEntry = ({ title, id, changeIndex }) => {
  return (
    <div id={id} onClick={changeIndex}>
        {title}
    </div>
  )
}

export default NavEntry