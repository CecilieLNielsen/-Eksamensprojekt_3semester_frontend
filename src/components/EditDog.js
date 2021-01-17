import React, { useState, useEffect } from "react";
import dogFacade from "../dogFacade";


const EditDog = (props) => {

    const [updatedDogData, setupdatedDogData] = useState(props.existingDogData);

    useEffect(() => {
        setupdatedDogData(props.existingDogData);
    }, [props.existingDogData]);

    const perform = (evt) => {
        evt.preventDefault();
        dogFacade.editDog(props.dogId, updatedDogData).then(() => props.performAllDogs(evt));
    }
    const onChange = (evt) => {
        setupdatedDogData({ ...updatedDogData, [evt.target.id]: evt.target.value })
    }

    return (
        <div>
            <h3>Edit a dog</h3>
            <form onChange={onChange} >
                <input placeholder="Name" value={updatedDogData.name} id="name" />
                <input placeholder="Date of birth" value={updatedDogData.dateOfBirth} id="dateOfBirth" />
                <input placeholder="Info" value={updatedDogData.info} id="info" />
                <input placeholder="Breed name" value={updatedDogData.breedName} id="breedName" />
                <button onClick={perform}>Save changes</button>
            </form>
        </div>
    );
};

export default EditDog;