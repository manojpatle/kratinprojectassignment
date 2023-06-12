// import React, { useState } from 'react';
// import './Login.css'; // Import the CSS file
// import video1 from "./videos/ladycare.webm"


// function Login() {

   
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform login logic here

//     // Example: Simple validation
//     if (username === 'admin' && password === 'password') {
//       alert('Login successful');
//       // Redirect to another page or perform further actions
//     } else {
//       alert('Invalid username or password');
//       // Clear the form fields or perform other error handling
//     }
//   };

//   return (
//     <div className="login-container">
//         <video className="background-video" autoPlay muted loop>
//         <source src={video1} type="video/webm" />
//         {/* Add additional <source> elements for different video formats if needed */}
//       </video>
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/About">About</a></li>
//           <li><a href="/contact">Contact</a></li>
//           <li><a href="/sign up">Sign Up</a></li>

//         </ul>
//       </nav>
//       <div className="login-form">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" required />
//           <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import video1 from './videos/ladycare.webm';

function Header() {
  return (
    <header>
      {/* Add your custom navigation bar code here */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/sign up">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      {/* Add your YouTube link or any other content here */}
      <a href="https://www.youtube.com/watch?v=Ng7C9WoaRZc" target="_blank" rel="noopener noreferrer">Visit YouTube channel for Health Tips</a>
    </footer>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here

    // Example: Simple validation
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
      // Redirect to another page or perform further actions
    } else {
      alert('Invalid username or password');
      // Clear the form fields or perform other error handling
    }
  };

  return (
    <div className="login-container">
      <video className="background-video" autoPlay muted loop>
        <source src={video1} type="video/webm" />
        {/* Add additional <source> elements for different video formats if needed */}
      </video>
      <Header />
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

