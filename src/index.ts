import { User, UserProps } from './models/User';
import { Attributes } from './models/Attributes';

// const user = new User({ name: 'NEW NAME', age: 0 });

const user = new Attributes<UserProps>({
  name: 'Alex',
  age: 2
});

console.log(user);
