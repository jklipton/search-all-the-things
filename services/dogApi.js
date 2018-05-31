const BASE_URL = 'https://dog.ceo/api';
const ALLBREED_URL = `${BASE_URL}/breeds/list/all`;
const BYBREED_URL = `${BASE_URL}/breed`;

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

  // const get = url => fetch(url)
  // .then((r) => { return r.json(); })
  // .then((data) => {
  //     const { message } = data;
  //     console.log('message', message);
  //     return message;
  //   });

export function loadAll() {
  return get(`${ALLBREED_URL}`);
}

export function search(breed) {
  return get(`${BYBREED_URL}/${search}/images`);
}
