import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userStorage = sessionStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        auth: false,
        id: 0,
        name: "",
        email: "",
        token: "",
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
