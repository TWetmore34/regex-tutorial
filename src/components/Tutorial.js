const Tutorial = ({ setMsg }) => {
  return (
    <div>
        <h3>{setMsg.topic}</h3>
        <p>{setMsg.text}</p>
        <div className="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="dymKVGN" data-editable="true" data-user="twetmore34"  data-prefill='{"tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">
    <span id="result"></span>
    </pre>
  <pre data-lang="js">let regex = new RegExp('hello')

let str = 'hello world'

document.getElementById('result').innerHTML = regex.test(str)</pre></div>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </div>
  )
}

export default Tutorial