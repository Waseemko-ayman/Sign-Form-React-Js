import React, { useState } from 'react'
import LogInPage from "../LogInPage";
import SignUpPage from "../SignUpPage";

const GamersPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const togglePage = () => {
    setIsSignedIn(!isSignedIn);
  }

  return (
    <div>
      {
        isSignedIn 
        ? (<SignUpPage togglePage={togglePage} />) 
        : (<LogInPage togglePage={togglePage} />)
      }
    </div>
  )
}

export default GamersPage