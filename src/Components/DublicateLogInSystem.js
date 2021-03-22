import React from 'react';
import { hendelGoogleSingIn, logInframWork } from './UserLogIn';

const DublicateLogInSystem = () => {

  logInframWork()

  const hendelGoogle = () => {
    hendelGoogleSingIn()
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

  }


  return (
    <div>


      <button onClick={hendelGoogle}>Dublicate LogIn with Google</button>

    </div>
  );
};

export default DublicateLogInSystem;