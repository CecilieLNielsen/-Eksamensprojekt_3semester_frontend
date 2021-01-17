import facade from './loginFacade';
import { baseURL } from "./settings";
import EditDog from './components/EditDog';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function demoFacade() {
  const fetchData = (url, method, body) => {
    const options = facade.makeOptions(method, true, body); //True add's the token
    return fetch(baseURL + url, options).then(handleHttpErrors);
  }
  const addDog = (newDog) => {
    return fetchData("api/dog/add", "POST", newDog);
  }

  const getAllDogsByUser = () => {
    return fetchData("api/dog/all", "GET");
  }

  const getAllBreeds = () => {
    return fetchData("api/dog/breeds", "GET");
  }

  const getBreedInformation = (breed) => {
    return fetchData("api/dog/breeds/" + breed, "GET");
  }

  const deleteDog = (id) => {
    return fetchData("api/dog/" + id, "DELETE");
  }

  const editDog = (id, updatedDog) => {
    return fetchData("api/dog/" + id, "PUT", updatedDog);
  }



  return {
    addDog,
    getAllDogsByUser,
    getAllBreeds,
    getBreedInformation,
    deleteDog,
    editDog

  }
}

const demo = demoFacade();
export default demo;
