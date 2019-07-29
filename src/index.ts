import { User } from './models/User';

const user = new User({ name: 'NEW NAME', age: 0 });

user.save();

console.log(user);
