
import React from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Search, 
  Bug, 
  Database, 
  Server, 
  Lock, 
  Shield,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-card w-16 md:w-64 shrink-0 border-r border-border flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-center md:justify-start">
        <Shield className="h-8 w-8 text-primary" />
        <span className="hidden md:block ml-2 font-bold">VAD</span>
      </div>
      
      <nav className="py-4 flex-1 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {[
            { icon: Terminal, label: 'Console', active: true },
            { icon: ShieldAlert, label: 'Vulnerabilities' },
            { icon: Search, label: 'Reconnaissance' },
            { icon: Bug, label: 'Exploits' },
            { icon: Database, label: 'Databases' },
            { icon: Server, label: 'Network' },
            { icon: Lock, label: 'Authentication' },
          ].map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center p-2 rounded-md text-sm transition-colors
                ${item.active 
                  ? 'bg-secondary text-primary' 
                  : 'hover:bg-secondary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className="hidden md:inline-block">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto border-t border-border p-4">
        <a href="#" className="flex items-center p-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
          <Settings className="h-5 w-5 mr-3" />
          <span className="hidden md:inline-block">Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
