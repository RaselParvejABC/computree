import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SpinnerRoundFilled } from "spinners-react";
import { FirebaseAuthContext } from "../../contexts/FirebaseAuthContextProvider/FirebaseAuthContextProvider";
import MyNavLink from "../MyNavBar/MyNavLink";

const UserPicOrLogin = () => {
  const { firebaseAuth } = React.useContext(FirebaseAuthContext);
  const [user, loading, error] = useAuthState(firebaseAuth);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  if (error) {
    throw error;
  }
  if (loading) {
    return <SpinnerRoundFilled size="16" />;
  }

  if (!user) {
    return (
      <MyNavLink to="/login">
        <Button variant="outlined" color="blue" className="px-3 mx-4">
          Log In
        </Button>
      </MyNavLink>
    );
  }

  return (
    <Button
      onClick={logOut}
      variant="outlined"
      color="blue"
      className="px-3 mx-4"
    >
      Sign Out
    </Button>
  );
};

export default UserPicOrLogin;
