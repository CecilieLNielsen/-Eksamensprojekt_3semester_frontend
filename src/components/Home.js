import React, { useState } from "react";
import facade from "../loginFacade";
import dogFacade from "../dogFacade";
import LogIn from './LogIn';
import LoggedIn from './LoggedIn';
import GetAllBreeds from './GetAllBreeds';
import GetAllBreedInformation from './GetAllBreedInformation';

const Home = () => {
  const init = facade.loggedIn;
  const [loggedIn, setLoggedIn] = useState(init)

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }
  const login = (user, pass) => {
    facade.login(user, pass)
      .then(res => setLoggedIn(true));
  }

 
  //GetAllBreedInformation

  const initBreedInformationData = {
    "breed": "",
    "info": "",
    "wikipedia": "",
    "image": "",
    "facts": [
      ""
    ]
  }

  const [breedInformationData, setbreedInformationData] = useState(initBreedInformationData);

  const performBreedInformation = (event, breed) => {
    event.preventDefault();
    dogFacade.getBreedInformation(breed).then(data => setbreedInformationData(data));
  }


  return (
    <div>
      <h1>Welcome</h1>
      {!loggedIn ? (<LogIn login={login} />) : (<LoggedIn logout={logout} />)}
      <br />
      <br />
      <GetAllBreedInformation breedInformationData={breedInformationData}/>
      <GetAllBreeds performBreedInformation={performBreedInformation}/>
    </div>
  );
};

export default Home;