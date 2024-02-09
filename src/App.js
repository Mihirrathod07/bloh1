import './App.css';
import React from 'react'
function App() {
  const students=['mihir','rathod','sam','peter'];
  // students.map((item)=>{
  
  //   console.warn("my name is :",item)
  
  // });
  // for(let i=0; i<students.length;i++)
  // {
  //   console.warn(" in for loop my name is :",students[i])

  // }
  return (
    <div className="App">
      <h1>Handle array with list</h1>
      {
        students.map((data)=>
        <h1>{data}</h1>
        )
      }
    </div>
  );
}

export default App;