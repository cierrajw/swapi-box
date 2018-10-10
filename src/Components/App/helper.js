export const fetchPeople = async () => {
  try {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const data = await response.json();
    const names = await fetchNames(data.results);
    const species = await fetchSpecies(data.results);
    const homeworld = await fetchHomeWorld(data.results);

    const personCard = await {names, species, homeworld}

    return personCard;

  } catch(error) {

  }
}

export const fetchNames = (people) => {
  const names = people.map(person => person.name)

  return {...names};
}

export const fetchSpecies = (people) => {

  const species = people.map(person =>{
        const unresolvedPromises = person.species.map(async type=>{
        const response = await fetch(type);
        const data = await response.json();
        return {species: data.name}
      })
    return Promise.all(unresolvedPromises);
  })
  return species;
}

export const fetchHomeWorld = (people) => {
  const homeworld = people.map(async person => {
    const response = await fetch(person.homeworld);
    const data = await response.json();
    return {homeworld: data.name, population: data.population}
  })

  return homeworld;

}
