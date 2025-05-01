import { useState } from "react";
import { login } from "../api/userApi";
import { register } from "../api/userApi";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      window.location.href = "/profile";
    } catch (err) {
      setError("Échec de la connexion, vérifie tes identifiants.");
    } finally {
      setLoading(false);
    }
  };

  const handleInscription = async () => {
    setLoading(true);
    setError("");

    try {
      await register(username, email, password);
    } catch (err) {
      setError("Échec de la connexion, vérifie tes identifiants.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Page de Connexion/Inscription</h1>
      <div>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Chargement..." : "Se connecter"}
        </button>
        <button onClick={handleInscription} disabled={loading}>
          {loading ? "Chargement..." : "S'inscrire"}
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;