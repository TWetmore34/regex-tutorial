import Header from './components/Header'
import Button from './components/Button';
import { useEffect, useState } from 'react'
import './style.css'
import Tutorial from './components/Tutorial';

function App() {
  // grab index i where i is moved around by the buttons
  const [messages, setMessages] = useState([
    {
      topic: 'What are Regexes?',
      text: 'Regexes are nothing but patterns we can create to search through strings and arrays. JavaScript includes several built in methods for either option. For the sake of this tutorial, we will start by looking at string methods!',
      code: ""
    },
    {
      topic: "The .find method",
      text: "The first method we'll cover today is regex.find(str)! If you observe the code editor below, you may notice a very simple regex. The syntax for it starts out as simple as two forward slashes surrounding the pattern you'd like to find. The find method takes that pattern and returns a boolean value based on whether it exists in the string or not. In this case, /hello/ is in the string 'hello world' so we get a return value of true!",
      code: 'https://codepen.io/twetmore34/embed/dymKVGN?default-tab=js%2Cresult&editable=true&theme-id=dark'
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
      <Button color='coral' text='Next' index={indexUp} />
    </div>
  );
}

export default App;
