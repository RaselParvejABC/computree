import React, { useContext } from "react";
import { useLocation, useLoaderData, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContextProvider/FirebaseAuthContextProvider";
import Purchase from "./Purchase";

const PurchaseRouteProtector = ({ children }) => {
  const { firebaseAuth } = useContext(FirebaseAuthContext);
  const [currentUser, currentUserLoading, currentUserLoadingError] =
    useAuthState(firebaseAuth);
  const location = useLocation();
  const course = useLoaderData();

  if (currentUserLoading) {
    return null;
  }
  if (currentUserLoadingError) {
    throw currentUserLoadingError;
  }
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Purchase course={course} />;
};

export default PurchaseRouteProtector;
