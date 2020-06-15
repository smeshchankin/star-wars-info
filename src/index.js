import StarWarsApi from './services/star-wars-api';

new StarWarsApi()
    .getResource('people')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
