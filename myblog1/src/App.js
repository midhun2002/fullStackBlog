import React from 'react'
import Home from './components/home'
import PostBlog from './components/PostBlog'
import EachPost from './components/EachPost'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <Router>
       <Nav></Nav>
       <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/postblog" component={PostBlog}/>
          <Route path="/posts/:id" component={EachPost}/>
       </Switch>
    </Router>
  );
}

export default App;
