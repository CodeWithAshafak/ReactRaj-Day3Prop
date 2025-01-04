import React from 'react'
import Level1 from './Level1'
import Level2 from './Level2'
import Level3 from './Level3'



// Lavel2 variable declaration:-

let name = "ashafak"
let subject = "MERN"
let college = "LNCT University"
let course = "MCA AIML"
let fee = 180000


//Lavel3 By using map funtion :-
let data = [
  {
    name:"Rahul",
    designation : "full stack",
    sal :20000,
    Technology:"Javascript" 
  },
  {
    name:"Aaliya",
    designation : "MERN Stack ",
    sal :80000,
    Technology:"React.js" 
  },
  {
    name:"Salman",
    designation : "CEO",
    sal : 1000000,
    Technology:"DEVops" 
  },
  {
    name:"Balvindar",
    designation : "full stack ",
    sal :220000,
    Technology:"Java technology" 
  },
  {
    name:"Virat ",
    designation : "Python developer",
    sal :180000,
    Technology:"Django" 
  }
  
]
let Result =data.map((key)=> <Level3
 nm={key.name}
 dn={key.designation}
 sl={key.sal}
 ts = {key.Technology}


/>)

const App = () => {
  return (
   <>
   
   <center><h1>----------Prop DAY -1---------</h1> </center>
   <center>Level-1</center>
   <Level1   nm="ashafak" cou="MERN" sl="1000" st="single"/>

   <center>Level-2</center>
   <Level2 t={name} sub={subject} cl={college} co={course} fe={fee}/>

   

   <center>Level-3</center>
  {Result}
  
   </>
  )
}

export default App