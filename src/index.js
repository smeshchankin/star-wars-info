import Person from './services/person';
import Planet from './services/planet';
import Starship from './services/starship';

testOne(new Person().getById(3));
testOne(new Planet().getById(1));
testOne(new Starship().getById(2));

function testOne(promise) {
    promise
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}
