import { UserForm } from './views/UserForm';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({
  id: 1,
  name: 'Alex',
  age: 25
});

const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root Element not found');
}
