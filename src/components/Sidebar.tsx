import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { path: '/leads', label: 'Leads', icon: '📨' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">CRSET Commander 🧠</h1>
        <p className="text-sm text-gray-300 mt-1">{user?.name}</p>
        <p className="text-xs text-gray-400">{user?.email}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-300 hover:bg-red-600 hover:text-white transition-colors w-full"
        >
          <span className="text-lg">🔓</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;