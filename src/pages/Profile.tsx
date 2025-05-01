import { useEffect, useState } from "react";
import { fetchCurrentUser } from "../api/userApi";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getCurrentUser = async () => {
        setLoading(true);
        setError("");
        try {
            const data = await fetchCurrentUser();
            setUsername(data.name);
        } catch (err) {
            setError("Échec de la connexion, vérifie tes identifiants.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
    getCurrentUser();
    }, []);

    return(
        <div>
            <h1>Profil utilisateur</h1>
            <div>
                <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={loading ? "Chargement..." : username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Profile;