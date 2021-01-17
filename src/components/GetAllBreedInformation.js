import React from "react";

const GetAllBreedInformation = (props) => {

  return (
    <div>
      <h2>Information about dog breeds</h2>
      <img src={props.breedInformationData.image} alt={props.breedInformationData.image} width="300" height="200"></img>
      <ul>
        <li>Breed: {props.breedInformationData.breed}</li>
        <li>Info: {props.breedInformationData.info}</li>
        <li>Wikipedia: {props.breedInformationData.wikipedia}</li>
        <li>Image: {props.breedInformationData.image}</li>
        <li>Facts: {props.breedInformationData.facts}</li>
      </ul>
    </div>
  );
};

export default GetAllBreedInformation;