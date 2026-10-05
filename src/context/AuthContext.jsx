import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../api/authApi";
import { getCurrentUser } from "../api/userApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const profile = await getCurrentUser();
        setUser(profile);
      } catch (error) {
        console.error("Failed to restore session:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("enrollmentNumber");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
   
    const response = await loginUser(credentials);

    localStorage.setItem("token", response.token);
    localStorage.setItem("role", response.role);
    localStorage.setItem("enrollmentNumber", response.enrollmentNumber);

    
    const profile = await getCurrentUser();
    setUser(profile);

    return profile;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("enrollmentNumber");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
