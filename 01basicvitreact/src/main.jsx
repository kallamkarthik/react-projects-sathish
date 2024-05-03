import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const Heading = (
    <h1> this is new h1 tag</h1>
)


const reactElement = {
    type: 'a',
    props :{
        href:"https://google.com",
        target: '_blank'
    },
    Childen : "Click me to visit google"
} 

const AnotherElement = (<a href="http://google.com" target='_b'>visit google</a>)


const reactNewElement = React.createElement(
    "a",
    {href: 'https://google.com', target:'_blank'},
    "do u wnt google click here"
)




ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <App/>
    reactNewElement
     
  
)
