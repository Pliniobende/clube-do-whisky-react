import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        auth: false,
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
