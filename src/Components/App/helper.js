export const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people/';
  const response = await fetch(url);
  const people = await response.json();
  return people
}