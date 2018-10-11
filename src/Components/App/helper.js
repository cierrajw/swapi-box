export const fetchPeople = async () => {
 try {
   const url = 'https://swapi.co/api/people/';
   const response = await fetch(url);
   const data = await response.json();
   const unresolvedCharacterPromises = data.results.map(async character => {
     const name = character.name
     const species = await fetchSpecies(character.species)
     const homeworld = await fetchHomeWorld(character.homeworld)
     const peopleCard = {name, ...species, ...homeworld}
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
   return {species: speciesData.name, language: speciesData.language}
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
