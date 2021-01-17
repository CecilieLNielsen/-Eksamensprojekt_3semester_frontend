import React, { useState, useEffect } from "react";
import dogFacade from "../dogFacade";
import AddDog from './AddDog';
import EditDog from './EditDog';


const User = () => {

  //GetAllDogsByUser
  const initAllDogsdata = [{
    "id": "",
    "name": "",
    "dateOfBirth": "",
    "info": "",
    "breedName": ""
  }]

  const [allDogData, setallDogData] = useState(initAllDogsdata);

  const performAllDogs = (evt) => {
    evt.preventDefault();
    dogFacade.getAllDogsByUser().then(data => setallDogData(data));
  }

  //DeleteDog

  const performDeleteDog = (evt, id) => {
    evt.preventDefault();
    dogFacade.deleteDog(id).then(() => performAllDogs(evt));
  }

  //EditDog
  const [dogId, setdogId] = useState(0);
  const [existingDogData, setexistingDogData] = useState({});

  const performEditDog = (evt, dog) => {
    evt.preventDefault();
    setdogId(dog.id);
    const temp = {
      "name": dog.name,
      "dateOfBirth": dog.dateOfBirth,
      "info": dog.info,
      "breedName": dog.breedName
    }
    setexistingDogData(temp);
  }

  return (
    <div>
      <h1>User page</h1>
      <AddDog performAllDogs={performAllDogs} />
      <br />
      <h3>Get all my dogs</h3>
      <button onClick={performAllDogs}>Retrieve dogs</button>
      <ul>{allDogData.map(dog => <li key={dog.id}>{dog.name}, {dog.dateOfBirth}, {dog.info}, {dog.breedName} <button onClick={(event) => { performDeleteDog(event, dog.id) }}>Delete</button> <button onClick={(event) => { performEditDog(event, dog) }}>Edit</button></li>)}</ul>
      <EditDog performAllDogs={performAllDogs} dogId={dogId} existingDogData={existingDogData} />
    </div>
  );
};

export default User;