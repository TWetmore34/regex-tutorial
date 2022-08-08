const Button = ({ color, text, index }) => {
  return (
    <>
    <button onClick={index} style={{backgroundColor: color}} className="btn">{text}</button>
    </>
  )
}



export default Button