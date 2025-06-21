import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock JWT token generator
const generateMockJWT = (email: string, name: string): string => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(JSON.stringify({
    email,
    name,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // 24 hours
    iat: Math.floor(Date.now() / 1000)
  }));
  const signature = btoa('mock-signature');
  return `${header}.${payload}.${signature}`;
};

// Mock users database
const mockUsers = [
  { email: 'admin@crset.com', password: '123456', name: 'Admin User' },
  { email: 'user@test.com', password: 'password', name: 'Test User' }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const decoded: any = jwtDecode(storedToken);
        if (decoded.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setUser({ email: decoded.email, name: decoded.name });
        } else {
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      const mockToken = generateMockJWT(user.email, user.name);
      setToken(mockToken);
      setUser({ email: user.email, name: user.name });
      localStorage.setItem('authToken', mockToken);
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return false;
    }
    
    // Add new user to mock database
    mockUsers.push({ email, password, name });
    
    // Auto login after registration
    const mockToken = generateMockJWT(email, name);
    setToken(mockToken);
    setUser({ email, name });
    localStorage.setItem('authToken', mockToken);
    return true;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    isAuthenticated: !!token
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};