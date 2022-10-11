import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import React from "react";
const App= ()=> {
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search />
    </div>      //passing the parameter to the Header function
  );
}

export default App;
