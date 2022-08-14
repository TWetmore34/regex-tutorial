import Select from "./Select"
const RegexForm = ({ formHandler }) => {
  // gen select els
  const createSelectNum = () => {
    let result = []
    for(let i=0;i<10;i++){
      result.push(i)
    }
    return result.map(num => (
    <Select title={num} />
    ))
  }

  // gen select els
  const createSelectAlpha = () => {
    let base = 'a'.charCodeAt(0)
    let result = []
    for(let i=0;i<26;i++){
      result.push(String.fromCharCode(base + i))
    }
    return result.map(letter => <Select title={letter} />)
  }

  const createSelectAlphaUpper = () => {
    let base = 'A'.charCodeAt(0)
    let result = []
    for(let i=0;i<26;i++){
      result.push(String.fromCharCode(base + i))
    }
    return result.map(letter => <Select title={letter} />)
  }
  
  return (
    <div className="form-container">
    {/* add check for proper order on these on submit */}
    <h3 className="subheader">Create Your (simple) Regex</h3>
    <form onSubmit={formHandler} className="form">
      {/* num range */}
      <label htmlFor={'numMin'}>Number Range? </label>
      <select id={'numMin'} name={'numMin'}>
      {createSelectNum()}
      </select>
      <label htmlFor={'numMax'}> to </label>
      <select id={'numMax'} name={'numMax'}>
      {createSelectNum()}
      </select>
      <br></br>
      {/* alpha range */}
      <label htmlFor={'alphaMin'}>Lowercase letter Range? </label>
      <select id={'alphaMin'} name={'alphaMin'}>
        {createSelectAlpha()}
      </select>
      <label htmlFor={'alphaMax'}> to </label>
      <select id={'alphaMax'} name={'alphaMax'}>
        {createSelectAlpha()}
      </select>
      <br></br>
      {/* uppercase */}
      <label htmlFor={'alphaMin'}>Uppercase letter Range? </label>
      <select id={'alphaMin'} name={'alphaMin'}>
        {createSelectAlphaUpper()}
      </select>
      <label htmlFor={'alphaMax'}> to </label>
      <select id={'alphaMax'} name={'alphaMax'}>
        {createSelectAlphaUpper()}
      </select>

      {/* spec chars */}
      <br></br>
      <label htmlFor={'alphaMin'}>Include special characters?</label>
      <input type={'checkbox'}></input>

      <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default RegexForm