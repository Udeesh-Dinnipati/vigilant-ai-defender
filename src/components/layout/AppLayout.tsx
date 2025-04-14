
import React from 'react';
import Sidebar from './Sidebar';
import { Shield } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 overflow-hidden">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">Vigilant AI Defender</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs text-muted-foreground">System Active</span>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
