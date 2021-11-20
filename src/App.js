import React from 'react';
import Home from './Home';
import './index';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogsDetails from './BlogsDetails';
import PageNotFound from './PageNotFound';
function App() {
  return (
    <Router>
    <div className="App">

      <Navbar/>

      <div className="content">
      <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>

          <Route path ="/create">
            <Create/>
          </Route>

          <Route path ="/blogs/:id">
           <BlogsDetails/>
          </Route>

          <Route path ="*">
           <PageNotFound/>
          </Route>
      </Switch>
      </div>  
      
    </div>
    </Router>
  );
}

export default App;
