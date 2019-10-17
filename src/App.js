import React from 'react'
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';
import PostItem from './components/PostItem';

function App() {
  return (
    <>
      <Header />
      <PostList/>
    </>
  );
}

export default App;