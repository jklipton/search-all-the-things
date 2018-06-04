import fetchJsonp from 'fetch-jsonp';

const BASE_URL = 'http://api.petfinder.com';
const API_KEY = 'cb82b18a08189865c9771190942fca81';
const BYBREED_URL = `${BASE_URL}/pet.find?format=json&key=${API_KEY}&animal=dog`;

const throwJson = json => { throw json; };
const get = url => fetchJsonp(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function loadBreeds() {
  return get(`${BASE_URL}/breed.list?format=json&animal=dog&key=${API_KEY}`);
}

export function searchByBreed(breed, location) {
  return get(`${BYBREED_URL}&breed=${breed}&location=${location}`);
}

export function getDog(id) {
  return get(`${BASE_URL}/pet.get?format=json&key=${API_KEY}&id=${id}`);
}
