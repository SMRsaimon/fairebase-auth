import React from 'react';
import { hendelFaceBookSignIn, hendelGoogleSingIn, hendelLogOut, logInframWork } from '../UserLogIn';
import "./LogIn.css"


const LogIn = () => {
  logInframWork()

  const googleSignIn = () => {

    hendelGoogleSingIn()
      .then(res => {

        console.log(res)
      })
      .catch(error => {

        console.log(error)
      })
  }

  // Hendel Facebook

  const facebookSignIn = () => {

    hendelFaceBookSignIn()
      .then(res => {

        console.log(res)
      })
      .catch(error => {

        console.log(error)
      })
  }

  const LogOut = () => {

    hendelLogOut()
      .then((res) => {

        console.log("Success")
      })
      .catch(error => {

        console.log(error)
      })

  }

  return (
    <div className="LogIn-container">
      <h1>LogIn</h1>


      <button onClick={googleSignIn}>LogIn With Google</button>
      <button onClick={facebookSignIn}>LogIn With facebook</button>
      <button onClick={LogOut}>log OUt</button>

    </div>
  );
};

export default LogIn;