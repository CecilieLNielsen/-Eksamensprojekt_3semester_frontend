import React, { useState } from "react";
import dogFacade from "../dogFacade";


const AddDog = (props) => {

  const initdata = {
    "name": "",
    "dateOfBirth": "",
    "info": "",
    "breedName": ""
  }

  const [newDogData, setnewDogData] = useState(initdata);

  const perform = (evt) => {
    evt.preventDefault();
    dogFacade.addDog(newDogData).then(() => props.performAllDogs(evt));
  }
  const onChange = (evt) => {
    setnewDogData({ ...newDogData, [evt.target.id]: evt.target.value })
  }


  return (
    <div>
      <h3>Add a dog</h3>
      <form onChange={onChange} >
        <input placeholder="Name" id="name" />
        <input placeholder="Date of birth" id="dateOfBirth" />
        <input placeholder="Info" id="info" />
        <input placeholder="Breed name" id="breedName" />
        <button onClick={perform}>Add dog</button>
      </form>
    </div>
  );
};

export default AddDog;