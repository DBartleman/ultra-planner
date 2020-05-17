import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskNavigator from './components/TaskNavigator';
import appContext from './appContext'

// TODO: get folders from signed in user
// demo data:

const lists = [
  {
    title: 'errands', tasks: [
      { title: 'go to mailbox', description: 'retrieve mail', gif: 'gif url here' },
      { title: 'get groceries', description: 'we need eggs, bell peppers, and olive oil', gif: 'gif url here' },
    ] 
  },
  {
    title: 'fix up the house', tasks: [
      { title: 're-paint the house number on sidewalk', description: 'we may need more white paint at the store', gif: 'gif url here' },
      { title: 'clean out the garage', description: 'put everything in boxes', gif: 'gif url here' },
      { title: 'take the recycleables to the recycling center', description: 'it may be closed today', gif: 'gif url here' },
      { title: 'take down christmas lights', description: 'they are still up there!', gif: 'gif url here' },
    ]
  },
  {
    title: 'no tasks', tasks: [

    ]
  },

];

function App() {
  const [ authToken, setAuthToken ] = useState(null);
  //const [ lists, setLists ] = useState([]); 

  const value = {
    authToken, setAuthToken
  };
  return (
    <appContext.Provider value={value}>
      <Navbar />
      <TaskNavigator lists={lists}/>
    </appContext.Provider>
  );
}

export default App;
