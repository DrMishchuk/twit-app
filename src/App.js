import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <HeaderContainer />
        <Navbar />
        <Content state={props.state} dispatch={props.dispatch} />
      </div>
    </BrowserRouter>
    
  )
}

export default App;
