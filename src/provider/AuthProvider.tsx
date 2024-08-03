/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createUserWithEmailAndPassword,
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React, { ReactNode } from "react";
import auth from "../firebase/firebase";

// Define the UserInfo type
export type UserInfoTypes = {
  user: FirebaseUser | null;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<any>;
  loginUser: (email: string, password: string) => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  logoutUser: () => Promise<void>;
  updateUserProfile: (name: string, photo: string) => Promise<void>;
};

// props types
interface AuthProviderProps {
  children: ReactNode;
}

// Create context with a default value of null
export const authContext = React.createContext<UserInfoTypes | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<FirebaseUser | null>(null);
  const [loading, setLoading] = React.useState(true);

  //  create user with email and password
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // login user
  const loginUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setLoading(false);
    });
  };

  // login user with google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() => {
      setLoading(false);
    });
  };

  // update profile
  const updateUserProfile = (name: string, photo: string) => {
    setLoading(true);
    return updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL: photo,
    }).finally(() => {
      setLoading(false);
    });
  };

  // logout user
  const logoutUser = async () => {
    setLoading(true);
    await signOut(auth);
    setLoading(false);
  };

  // on auth state changed get current login user
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        setUser(currentUser);
        setLoading(false);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  // authentication user info data
  const userInfo: UserInfoTypes = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
    updateUserProfile,
  };

  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
