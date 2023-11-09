
import React from "react";
import './../styles/App.css';
import Tabs from './Tabs'


const tabData=[
  {
      title:'Tab 1',
      content:'This is the content for Tab 1.',

  },
  {
    title:'Tab 2',
    content:'This is the content for Tab 2.',
  },
  {
    title:'Tab 3',
    content:'This is the content for Tab 3.',
  }
]

const App = () => {
  return (
    <div>
        <Tabs tabsProp={tabData}/> 
        {/* //tabsProp shoudl be same as object // and tabsprop should be same in tabs.js curly braces, passing data from one component to another*/ }
    </div>
  )
}

export default App
