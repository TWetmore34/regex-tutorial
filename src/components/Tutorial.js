const Tutorial = ({ msg, setMsg, index }) => {
  return (
    <div>
        <h3 className="subheader">{setMsg.topic}</h3>
        <div className="text-area">
        <p className="msg-text">{setMsg.text}</p>
        </div>
        { setMsg.code ?
        <iframe height="400.82421875" style={{width: "80%", display: 'block', margin: '0 auto'}} 
        scrolling="no" 
        title="Untitled" 
        src={ setMsg.code }
        frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/twetmore34/pen/dymKVGN">
  Untitled</a> by TWetmore34 (<a href="https://codepen.io/twetmore34">@twetmore34</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe> : ''}
          <h4 className="msg-text">Page {parseInt(index) + 1}/{msg.length}</h4>
    </div>
  )
}

export default Tutorial