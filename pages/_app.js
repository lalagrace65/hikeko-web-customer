import { createGlobalStyle } from "styled-components";
import { UserLocationContext } from "@/context/UserLocationContext";
import { useState } from 'react';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: "Rubik", sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState(null);

  return (
    <>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </UserLocationContext.Provider>
    </>
  );
}
