import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, Setloading] = useState(true);

  // cart to add for local storage
  const [cart, setCart] = useState(() => {
    // Load initial cart from localStorage or start empty
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // cart intregate
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = async (email, password) => {
    Setloading(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    Setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const github = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth).then(() => SetUser(null));
  };

  const updateProfiles = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (Currentuser) => {
      SetUser(Currentuser);
      Setloading(false);
      if (Currentuser) {
        console.log(Currentuser);
      } else {
        Setloading(false);
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    signIn,
    google,
    github,
    loading,
    logOut,
    cart,
    addToCart,
    updateProfiles,
    removeFromCart
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
