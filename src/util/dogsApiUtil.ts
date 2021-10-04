export const fetchAllDogs = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
};

export const fetchBreedImages = (breed: string) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
};