import Header from './components/Header'
import Button from './components/Button';
import { useEffect, useState } from 'react'
import './style.css'
import Tutorial from './components/Tutorial';

function App() {
  // grab index i where i is moved around by the buttons
  const [messages, setMessages] = useState([
    {
      topic: 'msg',
      text: 'regexes r scary!!',
      code: "https://codepen.io/twetmore34/embed/dymKVGN?default-tab=js%2Cresult&editable=true&theme-id=dark"
    },
    {
      topic: 'msg',
      text: 'hello!',
      code: [':0', '/w+/ vibes']
    },
    {
      topic: 'msg',
      text: 'asdfasdf',
      code: [':0', '/w+/ vibes']
    }]);

     // use me for msg
    let [index, setIndex] = useState(0)

        // increase index
        const indexUp = () => {
          if(index >= messages.length - 1) {
            index = messages.length - 1
          } else {
            index++
            return setIndex(index)
          }
          console.log(index)
        }
    
        // decrease index
        const indexDown = () => {
          if (index - 1 <= -1){
            index = 0
          } else {
            index--
            return setIndex(index)
          }
        }

    // ComponentDidMount
    // It OBSERVES for a condition to change
    // When that CHANGE OCCURS, then does it run the logic
    useEffect(() => {
      // logic you want to execute
      console.log(index)
      setIndex(index)
      console.log(index)
    }, 
    // the condition that it observes to change
    [index]);


  return (
    <div >
      <Header />
      <Tutorial setMsg={messages[index]}/> 
      <Button color='red' text='Prev' index={indexDown}/>
      <Button color='coral' text='next' index={indexUp} />
    </div>
  );
}

export default App;
