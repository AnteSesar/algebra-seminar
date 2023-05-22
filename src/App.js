
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstTimeVisit: true,
    };
  }
  
  handleLogin = (username) => {
    this.setState({
      username,
      firstTimeVisit: false,
    });
  };
  
  
  toggleSidebar = () =>{
    this.sidebar.ToggleSidebar();
  }

  handleLogout = () =>{
    this.setState({username: ""});
  }

  

  useEffect = () => {
    if (this.state.firstTimeVisit && this.state.username) {
      window.location.href = "/algebra-seminar/login";
    }
  };
  
  

  render(){
    return ( 
       <div className="App">  
         <Header toggleSidebar={this.toggleSidebar} username={this.state.username} handleLogout={this.handleLogout} /> 
         <Sidebar ref={(reference)=> this.sidebar = reference}/> 
          <Routes>
            <Route
              path="/algebra-seminar/"
              element={
              this.state.firstTimeVisit && this.state.username ? (
                <Navigate to="/algebra-seminar/welcome" replace={true} />
              ) : this.state.username ? (
                <Chat username={this.state.username} />
              ) : (
                <Navigate to="/algebra-seminar/login" />
              ) } />
              <Route path="/algebra-seminar/welcome" element={<Welcome />} />
              <Route path="/algebra-seminar/login" element={<Login onLogin={this.handleLogin} 
                  username={this.state.username}/>} />
              <Route path="/algebra-seminar/about" 
                element={this.state.username ? <About />: 
                  <Navigate to="/algebra-seminar/login" /> } />
            </Routes>
    </div>
    )
  }
}

export default App;