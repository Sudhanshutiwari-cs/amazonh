import React from 'react';
import { Home, BarChart2, Settings, Users, Box, HelpCircle, LogOut } from 'lucide-react';

function Sidebar() {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <Box size={20} />, label: 'Deliveries' },
    { icon: <Users size={20} />, label: 'Team' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 py-6 flex flex-col">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-2">
          <Box className="w-8 h-8 text-green-600" />
          <span className="text-xl font-bold text-gray-900">EcoShip</span>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors ${
                  index === 0 ? 'bg-gray-50 text-green-600' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 mt-6">
        <div className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-green-600 transition-colors">
            <LogOut size={20} />
            <span>Log Out</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;