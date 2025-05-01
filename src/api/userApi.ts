import axios from "axios";

const API_BASE = "http://localhost:8080";

const axiosClient = axios.create({
    baseURL: API_BASE,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export const login = async (email: string, password: string) => {
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Échec de la connexion.");
    }
  };
  
  export const fetchCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Identifier vous.");
      }
      const response = await axiosClient.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Échec de la récupération des données utilisateur.");
    }
  };

  export const register = async (name: string, email: string, password: string) => {
    try {
      const response = await axiosClient.post("/users/register", {
        email,
        password,
        name
      });
      return response.data;
    } catch (error) {
      throw new Error("Échec de la récupération des données utilisateur.");
    }
  };