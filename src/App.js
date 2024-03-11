import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';
import { useEffect, useState } from 'react';

function App() {

  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch(`https://randomuser.me/api/?results=50`).then((response)=>
    response.json()
  ).then((data)=>{
    console.log(data);
    setResults(data.results)
  })
  } , [])

  
  return (
    <div>
   

     {
      results.map((result, index)=>{
        return(
          <ContactCard image = {result.picture.large} key={index} name= {result.name.first}  email={result.email} age = {result.dob.age} />
        )
      })
     }
    </div>
  );
}

export default App;
