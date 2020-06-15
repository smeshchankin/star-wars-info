import People from './services/people';
import Planet from './services/planet';
import Starship from './services/starship';

test(new People().getById(1));
test(new Planet().getById(1));
test(new Starship().getById(2));

function test(promise) {
    promise
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}
