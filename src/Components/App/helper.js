export const fetchPeople = async () => {
  try {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const data = await response.json();
    const unresolvedCharacterPromises = data.results.map(async character => {
      const name = character.name;
      const species = await fetchSpecies(character.species);
      const homeworld = await fetchHomeWorld(character.homeworld);
      const peopleCard = {name, ...species, ...homeworld, type: 'people', id: Date.now() * Math.random(), favorite: false};
      return peopleCard;
    });
    return Promise.all(unresolvedCharacterPromises);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchSpecies = async(url) => {
  try {
    const response = await fetch(url);
    const speciesData = await response.json();
    return {species: speciesData.name, language: speciesData.language, type: 'species'};
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchHomeWorld = async (url) => {
  try {
    const response = await fetch(url);
    const homeworldData = await response.json();
    return {homeworld: homeworldData.name, population: homeworldData.population};
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchVehicles = async () =>{
  try {
    const url = "https://swapi.co/api/vehicles/";
    const response = await fetch(url);
    const data = await response.json();

    const unresolvedVehiclePromises = data.results.map(async vehicle =>{
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;
      const vehicleCard = {name, model, vehicleClass, passengers, type: 'vehicles', id: Date.now() * Math.random(), favorite: false};
      return vehicleCard;
    });
    return Promise.all(unresolvedVehiclePromises);
  } catch (error){
    throw new Error(error.message);
  }
};

export const fetchPlanets = async () => {
  try {
    const url = 'https://swapi.co/api/planets';
    const response = await fetch(url);
    const planetData = await response.json();
    const unresolvedPlanetPromises = planetData.results.map(async planet => {
      const name = planet.name;
      const terrain = planet.terrain;
      const planetPopulation = planet.population;
      const climate = planet.climate;
      const residents = await fetchResidents(planet.residents);
      const planetCard = {name, terrain, planetPopulation, climate, residents: residents, type: 'planets', id: Date.now() * Math.random(), favorite: false};
      return planetCard;
    });
    return Promise.all(unresolvedPlanetPromises);
  } catch (error) {
    throw new Error(error.message);
  }
};

const fetchResidents = (residents) => {
  try {
    const unresolvedResidentPromises = residents.map(async resident => {
      const response = await fetch(resident);
      const residentData = await response.json();
      const residentName = residentData.name;
      return residentName;
    });
    return Promise.all(unresolvedResidentPromises);
  } catch (error) {
    throw new Error(error.message);
  }
};
