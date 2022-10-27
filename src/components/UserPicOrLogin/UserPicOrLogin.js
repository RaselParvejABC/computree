import React from "react";
import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SpinnerRoundFilled } from "spinners-react";
import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContextProvider/FirebaseAuthContextProvider";
import MyNavLink from "../MyNavBar/MyNavLink";

const UserPicOrLogin = () => {
  const { firebaseAuth } = React.useContext(FirebaseAuthContext);
  const [user, loading, error] = useAuthState(firebaseAuth);

  if (error) {
    throw error;
  }
  if (loading) {
    return <SpinnerRoundFilled size="16" />;
  }

  if (!user) {
    return (
      <MyNavLink to="/login">
        <Button variant="outlined" color="blue" className="px-3 mr-4">
          Log In
        </Button>
      </MyNavLink>
    );
  }

  return <div className="mx-3">Hi</div>;
};

export default UserPicOrLogin;
