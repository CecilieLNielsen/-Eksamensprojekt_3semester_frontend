import React, { useState, useEffect } from "react";
import dogFacade from "../dogFacade";


const GetAllBreeds = (props) => {

  const initBreedData = {
    "dogs": [
      {
        "breed": ""
      }
    ]
  }

  const [breedData, setbreedData] = useState(initBreedData);

  useEffect(() => {
    dogFacade.getAllBreeds().then(data => setbreedData(data));
  }, []);

  return (
    <div>
      <h3>List of dog breeds</h3>
      <ul>{breedData.dogs.map((element, index) => <li key={index}>{element.breed} <button onClick={(event) => { props.performBreedInformation(event, element.breed) }}>Retrieve information</button></li>)}</ul>
    </div>
  );
};

export default GetAllBreeds;