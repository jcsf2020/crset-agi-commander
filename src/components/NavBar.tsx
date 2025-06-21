import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">CR_SET AGI Commander</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/settings" className="hover:underline">
          Settings
        </Link>
        <Link to="/logout" className="hover:underline">
          Logout
        </Link>
      </div>
    </nav>
  );
}
