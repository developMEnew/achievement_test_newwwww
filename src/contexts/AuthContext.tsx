import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signInWithRedirect, getRedirectResult, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  useTempDevAccount: boolean;
  toggleTempDevAccount: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

const tempDevUser = {
  uid: 'temp-dev-uid',
  email: 'dev@example.com',
  displayName: 'Dev User',
  photoURL: null,
  emailVerified: true,
  isAnonymous: false,
  metadata: {},
  providerData: [],
  refreshToken: '',
  tenantId: null,
  delete: async () => {},
  getIdToken: async () => '',
  getIdTokenResult: async () => ({ token: '', claims: {}, authTime: '', issuedAtTime: '', expirationTime: '', signInProvider: null }),
  reload: async () => {},
  toJSON: () => ({}),
  providerId: 'temp',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [useTempDevAccount, setUseTempDevAccount] = useState(false);

  useEffect(() => {
    if (useTempDevAccount) {
      setUser(tempDevUser as User);
      return () => {};
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    getRedirectResult(auth).catch((error) => {
      console.error('Redirect sign-in error:', error);
    });

    return unsubscribe;
  }, [useTempDevAccount]);

  const signInWithGoogle = async () => {
    if (useTempDevAccount) {
      setUser(tempDevUser as User);
      return;
    }

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        try {
          await signInWithRedirect(auth, googleProvider);
        } catch (redirectError) {
          console.error('Redirect sign-in error:', redirectError);
        }
      } else {
        console.error('Error signing in with Google:', error);
      }
    }
  };

  const logout = async () => {
    if (useTempDevAccount) {
      setUser(null);
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleTempDevAccount = () => {
    setUseTempDevAccount(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      signInWithGoogle, 
      logout,
      useTempDevAccount,
      toggleTempDevAccount 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};