import React, { useState } from 'react'
import LogInPage from "../LogInPage";
import SignUpPage from "../SignUpPage";

const GamersPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const togglePage = () => {
    setIsSignedIn(!isSignedIn);
    console.log(isSignedIn)
  }

  return (
    <div>
      {
        isSignedIn 
        ? (<LogInPage togglePage={togglePage} />)
        : (<SignUpPage togglePage={togglePage} />) 
      }
    </div>
  )
}

export default GamersPage;