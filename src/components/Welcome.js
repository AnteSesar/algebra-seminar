import React from 'react';
import "./Welcome.css";

class Welcome extends React.Component {
  activateLink() {
    var loadingBar = document.querySelector('.loading-bar');
    loadingBar.style.width = '20px'; // Set the final width
    setTimeout(function() {
      loadingBar.classList.add('loaded');
      var enterText = document.querySelector('.enter-text');
      var welcomeText = document.querySelector('.welcome-text');
      enterText.style.animation = 'fade-out-3 2s linear forwards';
      welcomeText.style.animation = 'fade-out-2 2s linear forwards';
      setTimeout(function() {
        enterText.style.opacity = '0'; // Set opacity to 0
        welcomeText.style.opacity = '0'; // Set opacity to 0
        setTimeout(function() {
          window.location.href = "/algebra-seminar/";
        }, 2000); // Delay in milliseconds (2 seconds)
      }, 500); // Delay the opacity change by 500 milliseconds (0.5 seconds)
    }, 0);
  }

  render() {
    return (
      <div className="welcome-container">
        <div className="welcome-text">WELCOME</div>
        <div className="loading-bar">
          <div className="progress"></div>
        </div>
        <div className="enter-text">
          <a href="#" onClick={this.activateLink}>ENTER</a>
        </div>
      </div>
    );
  }
}

export default Welcome;
