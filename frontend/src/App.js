import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import React from "react";
import { useState } from 'react';



const App= ()=> {
  const [word,setWord]=useState('');

  const handleSearchSubmit=(e)=>{
    e.preventDefault();
    console.log(word);   {/*target[0] is the search bar */}
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSearch={handleSearchSubmit}/>   {/*passing the function as parameter */}
    </div>      //passing the parameter to the Header function
  );
}

export default App;
