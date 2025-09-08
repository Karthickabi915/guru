import React, { createContext, useState, useEffect } from "react";
import client from "../../Common/Client/Client";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userContact, setUserContact] = useState([]);

  useEffect(() => {
    const fetchUserContact = async () => {
      try {
        const response = await client.get("/contact/get-contact");
        const data = response.data;
        setUserContact(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserContact();
  }, []);

   console.log(userContact)

  return (
    <AppContext.Provider value={{ userContact }}>{children}</AppContext.Provider>
  );
};
