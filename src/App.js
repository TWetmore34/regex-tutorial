import Header from './components/Header'
import Button from './components/Button';
import Navbar from "./components/Navbar"
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
      topic: "The .test method",
      text: "The first method we'll cover today is regex.test(str)! If you observe the code editor below, you may notice a very simple regex. The syntax for it starts out as simple as two forward slashes surrounding the pattern you'd like to find. The find method takes that pattern and returns a boolean value based on whether it exists in the string or not. In this case, /hello/ is in the string 'hello world,' so we get a return value of true!",
      code: 'https://codepen.io/twetmore34/embed/dymKVGN?default-tab=js%2Cresult&editable=true&theme-id=dark'
    },
    {
      topic: 'The .match method',
      text: 'The next method to address is the match method. Much like .find, match will search through a string with the pattern provided by your regex. The key difference is what the method returns. Instead of a boolean, we see the actual content that matched the pattern (more specifically, it is returned in an array - keep this in mind when accessing values grabbed with the method). so, instead of the regex /hello/ called on hello world returning true, it would instead return hello. This gives us a powerful tool for problems involving strings as we can quickly isolate the data we want to work with, rahter than just knowing its there!',
      code: 'https://codepen.io/twetmore34/embed/VwXBpgv?default-tab=js%2Cresult&editable=true&theme-id=dark'
    }]);

     // use me for msg
    let [index, setIndex] = useState(0)

        // increase index
        const indexUp = () => {
          if(index < messages.length - 1) {
            index++
            return setIndex(index)
          }
        }
    
        // decrease index
        const indexDown = () => {
          if (index > 0){
            index--
            return setIndex(index)
          }
        }

        // set index for navbar
        const changeIndex = (e) => {
              setIndex(e.target.id)
            }

    // ComponentDidMount
    // It OBSERVES for a condition to change
    // When that CHANGE OCCURS, then does it run the logic
    useEffect(() => {
      // logic you want to execute
      setIndex(index)
    }, 
    // the condition that it observes to change
    [index]);

    let [navBarOn, setNavBarOn] = useState(false)

    // navbar render
      const navbar = () => {
        setNavBarOn(!navBarOn)
      }

  return (
    <div >
      {navBarOn ? <Navbar changeIndex={changeIndex} navbar={navbar}/> : ''}
      <Header navbar={navbar} setIndex={setIndex} />
      <Tutorial setMsg={messages[index]} index={index}/> 
      <Button color='red' text='Prev' index={indexDown}/>
      <Button color='coral' text='Next' index={indexUp} />
    </div>
  );
}

export default App;
