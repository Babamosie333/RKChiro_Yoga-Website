import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Clock, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/booking', icon: Calendar, label: '约课' },
    { path: '/appointments', icon: Clock, label: '已约' },
    { path: '/profile', icon: User, label: '我的' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 flex-1 h-full transition-colors ${
                isActive 
                  ? 'text-pink-500' 
                  : 'text-gray-500 hover:text-pink-400'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;