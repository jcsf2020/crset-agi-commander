import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setEmail(payload.sub);
        }
        catch (err) {
            console.error('Token inválido:', err);
            navigate('/login');
        }
    }, [navigate]);
    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-50", children: [_jsxs("h1", { className: "text-2xl font-bold mb-4", children: ["Bem-vindo, ", email] }), _jsx("button", { className: "px-4 py-2 bg-red-600 text-white rounded", onClick: handleLogout, children: "Logout" })] }));
}
