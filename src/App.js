import React from 'react';
import  {BrowserRouter,Route,Link} from 'react-router-dom'
import './App.css';
import HomeComponent from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav
   } from 'reactstrap'

import UserList from './components/users/UserList'
import UserShow from './components/users/UserShow'
import UserPost from './components/users/UserPost'
import UserPostShow from './components/users/UserPostShow'

//import PostByUSerShow from './components/users/PostByUSerShow'

function App(props) {
  return (
    <BrowserRouter>
    <div>
      <Navbar color="primary" dark expand="md" className="mb-5">
      <NavbarBrand color="dark" href="/">Blogs</NavbarBrand>
      <Nav className="ml-auto" navbar>

      <NavItem>
            <Link className="nav-link text-light" to="/">Home</Link>
      </NavItem>

      <NavItem>
            <Link className="nav-link text-light" to = "/users">Users</Link>
      </NavItem>

      <NavItem>
            <Link className="nav-link text-light" to = "/posts">Posts</Link>
      </NavItem>
      </Nav>
      </Navbar>

        
      <div className="container col-md-11">
      <Route path="/" component ={HomeComponent} exact={true}/>

      <Route path="/users" component={UserList} exact={true}/>
      <Route path="/users/:id" component={UserShow} />
      <Route path="/posts" component={UserPost} exact={true}/>
      <Route path="/posts/:id" component={UserPostShow} />
      {/* <Route path="/posts?userId:id" component={PostByUSerShow}  /> */}
      </div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
