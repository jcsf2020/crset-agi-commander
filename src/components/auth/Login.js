import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleLogin(e) {
        e.preventDefault();
        // Aqui vamos ligar ao backend depois (FastAPI + JWT)
        alert(`Login com\nEmail: ${email}\nPassword: ${password}`);
    }
    return (_jsx("div", { className: "flex items-center justify-center h-screen bg-gray-100", children: _jsxs("form", { onSubmit: handleLogin, className: "bg-white p-8 rounded shadow-md w-full max-w-sm", children: [_jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Login" }), _jsx("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full p-2 mb-4 border rounded", required: true }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full p-2 mb-6 border rounded", required: true }), _jsx("button", { type: "submit", className: "w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition", children: "Entrar" })] }) }));
}
