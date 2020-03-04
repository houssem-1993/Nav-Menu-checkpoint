import React from 'react';
import Navbar from './component/nav';
import './App.css';
const data =[
  {title:"Home",
  hover:"change"
},
  {title:"services" ,hover:"test", dropdown:["for entrepreneur","for students","for hobbyist"]},
  {title:"contact",hover:"cont"}
]

function App() {
  return (
    <div className="App">
      <Navbar data={data}/>
    </div>
  );
}

export default App;
