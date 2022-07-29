import { useState } from 'react'
import User from './user'

export default function useUser() {
  const getUser = () => {
    const userString = sessionStorage.getItem('user');

    let user = new User()
    if (userString == null) {
      return user
    }

    user.name = JSON.parse(userString).name
    user.email = JSON.parse(userString).email

    return user;
  };

  const [user, setUser] = useState(getUser());

  const saveUser = (user: User ) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return {
    setUser: saveUser,
    user
  }
}