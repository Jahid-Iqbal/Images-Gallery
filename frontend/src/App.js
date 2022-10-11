import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import React from "react";
import { useState } from 'react';

const UNSPLASH_KEY= process.env.REACT_APP_UNSPLASH_KEY;   {/*connecting to upsplash API */}

const App= ()=> {
  const [word,setWord]=useState('');

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(word);   {/*target[0] is the search bar */}
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
    .then((result)=>result.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.log(error);
    })
    setWord('');          {/*set the default text in search bar after pressing search button*/}
  }
      {/*fetch is a function that retrieve the photos. That is a promise. */}
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearch={handleSearchSubmit}/>   {/*passing the function as parameter */}
    </div>      //passing the parameter to the Header function
  );
}

export default App;
