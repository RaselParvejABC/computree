import React from "react";
import { Outlet } from "react-router-dom";
import MyNavBar from "./components/MyNavBar/MyNavBar";
import FirebaseAuthContextProvider from "./contexts/FirebaseAuthContextProvider/FirebaseAuthContextProvider";
import auth from "./firebase/Auth/Auth";

const App = () => {
  return (
    <FirebaseAuthContextProvider value={{ firebaseAuth: auth }}>
      <MyNavBar />
      <Outlet />
    </FirebaseAuthContextProvider>
  );
};

export default App;
