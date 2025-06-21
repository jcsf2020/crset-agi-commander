import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/", element: _jsxs("div", { className: "flex flex-col items-center justify-center h-screen text-center px-6", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "CRSET Commander \uD83E\uDDE0" }), _jsx("p", { className: "text-lg mb-6", children: "Lan\u00E7amos automa\u00E7\u00F5es com IA para o teu neg\u00F3cio em 3 dias." }), _jsx("a", { href: "https://buy.stripe.com/test_aEUg2d4ih4P17sIbIJ", target: "_blank", rel: "noopener noreferrer", className: "bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition", children: "Automatizar agora por 149\u202F\u20AC" })] }) })] }) }));
}
