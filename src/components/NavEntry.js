const NavEntry = ({ title, id, changeIndex }) => {
  return (
    <div onClick={changeIndex} id={id}>
        {title}
    </div>
  )
}

export default NavEntry