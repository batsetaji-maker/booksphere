import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        let mounted = true;

        const checkAuthentication = async () => {
            try {
                const response = await api.get(
                    "accounts/me/",
                    {
                        withCredentials: true,
                    }
                );

                console.log("AUTH CHECK:", response.data);

                if (mounted) {
                    setAuthenticated(true);
                }

            } catch (error) {
                console.log(
                    "AUTH CHECK FAILED:",
                    error.response?.status
                );

                if (mounted) {
                    setAuthenticated(false);
                }

            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        checkAuthentication();

        return () => {
            mounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <p>Checking authentication...</p>
            </div>
        );
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;