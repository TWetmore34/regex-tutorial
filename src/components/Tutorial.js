const Tutorial = ({ setMsg }) => {
  return (
    <div>
        <h3>{setMsg.topic}</h3>
        <p>{setMsg.text}</p>
        <iframe height="400.82421875" style={{width: "100%"}} 
        scrolling="no" 
        title="Untitled" 
        src={ setMsg.code }
        frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/twetmore34/pen/dymKVGN">
  Untitled</a> by TWetmore34 (<a href="https://codepen.io/twetmore34">@twetmore34</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    </div>
  )
}

export default Tutorial