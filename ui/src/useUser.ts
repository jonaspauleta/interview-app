import { useState } from 'react';

export default function useUser() {
  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    return JSON.parse(userString);
  };

  const [user, setUser] = useState(getUser());

  const saveUser = user => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  return {
    setUser: saveUser,
    user
  }
}