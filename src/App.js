import Header from './components/Header'
import Button from './components/Button';
import Navbar from "./components/Navbar"
import RegexForm from './components/RegexForm';
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css'
import Tutorial from './components/Tutorial';

function App() {
  // grab index i where i is moved around by the buttons
  const [messages, setMessages] = useState([
    {
      topic: 'What are Regexes?',
      text: 'Regexes are nothing but patterns we can create to search through strings and arrays. JavaScript includes several built in methods for either option. For the sake of this tutorial, we will start by looking at string methods!',
      code: "",
      id: 0
    },
    {
      topic: "The .test method",
      text: "The first method we'll cover today is regex.test(str)! If you observe the code editor below, you may notice a very simple regex. The syntax for it starts out as simple as two forward slashes surrounding the pattern you'd like to find. The find method takes that pattern and returns a boolean value based on whether it exists in the string or not. In this case, /hello/ is in the string 'hello world,' so we get a return value of true!",
      code: 'https://codepen.io/twetmore34/embed/dymKVGN?default-tab=js%2Cresult&editable=true&theme-id=dark',
      id: 1
    },
    {
      topic: 'The .match method',
      text: 'The next method to address is the match method. Much like .test, .match will search through a string with the pattern provided by your regex. The key difference is what the method returns. Instead of a boolean, we see the actual content that matched the pattern (more specifically, it is returned in an array - keep this in mind when accessing values grabbed with the method). so, instead of the regex /hello/ called on hello world returning true, it would instead return hello. This gives us a powerful tool for problems involving strings as we can quickly isolate the data we want to work with, rahter than just knowing its there!',
      code: 'https://codepen.io/twetmore34/embed/VwXBpgv?default-tab=js%2Cresult&editable=true&theme-id=dark',
      id: 2
    },
    {
      text: "Next on our list is the replace method. What makes this method fascinating is it is the first we've seen to actually mutate our data in some way. By using .replace on a string, the instance of our regex that is matched will be replaced with the mothod's second parameter.",
      code: 'https://codepen.io/twetmore34/embed/ZExPMGw?default-tab=js%2Cresult&editable=true&theme-id=dark',
      id: 3
    },
    {
      text: "The final method we'll cover in this tutorial is .search. This method returns the index at which the regex finds a match. It's syntax is very similar to the others with string.search(regex). Try it out for yourself down below!",
      code: "https://codepen.io/twetmore34/embed/wvmOEGp?default-tab=js%2Cresult&editable=true&theme-id=dark",
      id: 4
    }
  ]);

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

      // regex form submit
      const formHandler = (e) => {
        e.preventDefault()
        const select = document.querySelectorAll('select')
        const checkBox = document.querySelector('input')
        let regex = '/['
        for(let i=0;i<select.length - 1;i++){
          // currently, the last letter gets cut off by this check bc if always returns undefined
          if(select[i].value !== select[i+1].value) {
            regex += select[i].value
            if(i % 2 === 0){
              regex += '-'
            }
          } else {
            i++
          }
        }
        // for now, soliving it by just adding the last value manually
        regex += select[select.length-1].value
        if(checkBox.checked) regex += '!@#$%^&*()_'
        regex += ']/'

        // set in local storage
        let regexList = localStorage.getItem('regexes') ?? []
        regexList = [...regexList]
        regexList.push(regex)
        regexList.push('testing')
        console.log(regexList)
        
        localStorage.setItem('regexes', regexList)
        return regex
      }

  return (
    <BrowserRouter>
    <div >
   
      <Routes>
        <Route path='/' element={ 
           <>
           {navBarOn ? <Navbar lessons={messages} changeIndex={changeIndex} navbar={navbar}/> : ''}
           <Header navbar={navbar} setIndex={setIndex} />
           <Tutorial msg={messages} setMsg={messages[index]} index={index}/> 
           <Button color='red' text='Prev' index={indexDown}/>
           <Button color='coral' text='Next' index={indexUp} />
         </>
         }/>
        <Route
        path="/maker"
        element={
          <>
          {navBarOn ? <Navbar lessons={messages} changeIndex={changeIndex} navbar={navbar}/> : ''}
          <Header navbar={navbar} setIndex={setIndex} />
          <RegexForm formHandler={formHandler} />
          </>
      }
        />
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
