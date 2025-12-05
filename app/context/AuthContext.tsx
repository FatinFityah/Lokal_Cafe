'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define what a User looks like
type User = {
  name: string;
  email: string;
  role: 'customer' | 'admin';
};

// Define what the Context provides
type AuthContextType = {
  user: User | null;
  login: (name: string, email: string, role: 'customer' | 'admin') => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Check if user is logged in when the website loads
  useEffect(() => {
    const storedUser = localStorage.getItem('lokalUser');
    if (storedUser) {
      try {
        // Try to parse the JSON object
        setUser(JSON.parse(storedUser));
      } catch (error) {
        // If it fails (because old data was just a string), clear it
        console.log("Old login data found, resetting...");
        localStorage.removeItem('lokalUser');
      }
    }
  }, []);

  // Login Function
  const login = (name: string, email: string, role: 'customer' | 'admin') => {
    const newUser = { name, email, role };
    setUser(newUser);
    // We save the whole object as a String so we can load it later
    localStorage.setItem('lokalUser', JSON.stringify(newUser));
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('lokalUser');
    // Optional: Reload page to clear clean state
    window.location.href = '/'; 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook to use the context easily
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}