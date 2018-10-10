export const fetchPeople = async () => {
  try {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const data = await response.json();
    // const names = await fetchNames(data.results)
    // await fetchSpecies(data)
    const homeworld = await fetchHomeWorld(data.results)

  } catch(error) {
    
  }
}

export const fetchNames = (people) => {
  const names = people.map(person => person.name)
  return {...names}
}

export const fetchSpecies = async (people) => {

}

export const fetchHomeWorld = (people) => {
  const homeworld = people.map(async person => {
    const response = await fetch(person.homeworld);
    const data = await response.json();
    console.log({homeworld: data.name})
    return {homeworld: data.name}
  })
  return homeworld

}