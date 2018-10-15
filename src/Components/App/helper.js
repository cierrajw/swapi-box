export const fetchPeople = async () => {
 try {
   const url = 'https://swapi.co/api/people/';
   const response = await fetch(url);
   const data = await response.json();
   const unresolvedCharacterPromises = data.results.map(async character => {
     const person_name = character.name
     const species = await fetchSpecies(character.species)
     const homeworld = await fetchHomeWorld(character.homeworld)
     const peopleCard = {person_name, ...species, ...homeworld, type: 'people', id: Date.now() * Math.random()}
     return peopleCard
   })
   return Promise.all(unresolvedCharacterPromises)
 } catch(error) {
   throw new Error(error.message);
 }
}

export const fetchSpecies = async(url) => {
 try {
   const response = await fetch(url);
   const speciesData = await response.json();
   return {species: speciesData.name, language: speciesData.language, type: 'species'}
 } catch(error) {
   throw new Error(error.message)
 }
}

export const fetchHomeWorld = async (url) => {
 try {
   const response = await fetch(url);
   const homeworldData = await response.json();
   return {homeworld: homeworldData.name, population: homeworldData.population}
 } catch(error) {
   throw new Error(error.message);
 }
}

export const fetchVehicles = async () =>{
  try{
    const url = "https://swapi.co/api/vehicles/";
    const response = await fetch(url);
    const data = await response.json();

  const unresolvedVehiclePromises = data.results.map(async vehicle =>{
    const vehicle_name = vehicle.name;
    const model = vehicle.model;
    const vehicle_class = vehicle.vehicle_class;
    const passengers = vehicle.passengers;
    const vehicleCard = {vehicle_name, model, vehicle_class, passengers, type: 'vehicles', id: Date.now() * Math.random()}
    return vehicleCard;
  })
    return Promise.all(unresolvedVehiclePromises);
  }catch(error){
    throw new Error(error.message)
  }
}

export const fetchPlanets = async () => {
  try {
    const url = 'https://swapi.co/api/planets';
    const response = await fetch(url);
    const planetData = await response.json();
    const unresolvedPlanetPromises = planetData.results.map(async planet => {
      const planet_name = planet.name;
      const terrain = planet.terrain;
      const planet_population = planet.population;
      const climate = planet.climate;
      const residents = await fetchResidents(planet.residents);
      const planetCard = {planet_name, terrain, planet_population, climate, residents: residents, type: 'planets', id: Date.now() * Math.random()}
      return planetCard;
    })
    return Promise.all(unresolvedPlanetPromises);
  } catch(error) {
    throw new Error(error.message)
  }
}

const fetchResidents = (residents) => {
  try {
    const unresolvedResidentPromises = residents.map(async resident => {
      const response = await fetch(resident);
      const residentData = await response.json();
      const residentName = residentData.name;
      return residentName
    })
    return Promise.all(unresolvedResidentPromises)
  } catch(error) {
    throw new Error(error.message)
  }
}
