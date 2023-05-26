import { Fragment } from "react";
import "./Header.css";

const Header = (props) =>{
    // !! pretvara props.username u boolean.
    const isLoggedIn = !!props.username;

    return (
    // "<></>" je prazan react Fragment, služi istu svrhu kao i <div>, ali manje opterečuje DOM
    <>
      {isLoggedIn && 
      <div className="App-header">
        <button className='sidebar-btn' onClick={props.toggleSidebar}>Sidebar</button>
        <h1 style={{ fontFamily: 'TiltNeon-Regular' }}>{props.username}'s Chat Space</h1>
        <button className="logout-btn" onClick={props.handleLogout}>Log out</button>
      </div>
      }
      {!isLoggedIn && 
      <div className="App-header">
        <div></div>
        <h1 style={{ fontFamily: 'TiltNeon-Regular' }}>Chat'n'Stuff</h1>
        {/* Prazan div služi za flex pozicioniranje elemenata */}
        <div></div>
      </div>
      }
    </>
    )
}

export default Header;