import React from "react";
import { UserInfoTypes, authContext } from "../provider/AuthProvider";

const useUserContext = () => {
  const auth: UserInfoTypes | null = React.useContext(authContext);
  return auth;
};

export default useUserContext;
