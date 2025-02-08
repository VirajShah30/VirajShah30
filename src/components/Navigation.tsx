import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Briefcase, FileText, Mail } from 'lucide-react';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-black/50 backdrop-blur-md z-50">
      <div className="h-full flex flex-col items-center py-8">
        <Link to="/" className="mb-12">
          <Rocket className="w-8 h-8 text-purple-400" />
        </Link>
        <div className="flex-1 flex flex-col items-center space-y-12">
          <NavLink href="/projects" icon={Briefcase} active={location.pathname === "/projects"}>
            PROJECTS
          </NavLink>
          <NavLink href="/resume" icon={FileText} active={location.pathname === "/resume"}>
            RESUME
          </NavLink>
          <NavLink href="/contact" icon={Mail} active={location.pathname === "/contact"}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, icon: Icon, active }) {
  return (
    <Link
      to={href}
      className="relative flex flex-col items-center group"
    >
      <div className={`p-3 rounded-lg transition-colors duration-300 ${
        active 
          ? 'bg-white/10 text-purple-400' 
          : 'text-white hover:text-purple-400'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <span className={`nav-text text-xs mt-2 transition-colors duration-300 ${
        active 
          ? 'text-purple-400' 
          : 'text-white/70 group-hover:text-purple-400'
      }`}>
        {children}
      </span>
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-purple-400 to-pink-500 rounded-r" />
      )}
    </Link>
  );
}

export default Navigation;