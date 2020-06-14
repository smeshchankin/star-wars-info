import StarWarsApi from './services/StarWarsApi';

new StarWarsApi()
    .getResource('people')
    .then((data) => console.log(data));
