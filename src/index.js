import Person from './services/person';
import Planet from './services/planet';
import Starship from './services/starship';

testOne(new Person().getById(3));
testOne(new Planet().getById(1));
testOne(new Starship().getById(2));

testList(new Person().getList());
testList(new Planet().getList());
testList(new Starship().getList());

function testOne(promise) {
    promise
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}

function testList(promise) {
    promise
        .then((data) => data.forEach(item => console.log(item.name)))
        .catch((err) => console.error(err));
}
