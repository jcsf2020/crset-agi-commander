import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (_jsxs("nav", { className: "bg-gray-900 text-white px-6 py-4 flex justify-between items-center", children: [_jsx("div", { className: "text-xl font-bold", children: "CR_SET AGI Commander" }), _jsxs("div", { className: "space-x-4", children: [_jsx(Link, { to: "/", className: "hover:underline", children: "Dashboard" }), _jsx(Link, { to: "/settings", className: "hover:underline", children: "Settings" }), _jsx(Link, { to: "/logout", className: "hover:underline", children: "Logout" })] })] }));
}
