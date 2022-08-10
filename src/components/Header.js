import { TbAlignJustified } from "react-icons/tb";

const Header = ({ navbar }) => {
  return (
    <header className="bg-custom">
        <TbAlignJustified onClick={navbar} size={34} style={{cursor: 'pointer'}} />
        <h1 className="app-header">Regexes are Fun!</h1>
    </header>
  )
}

export default Header