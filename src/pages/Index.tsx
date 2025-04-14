
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import ChatInterface from '@/components/chat/ChatInterface';
import VulnerabilityDashboard from '@/components/dashboard/VulnerabilityDashboard';
import TargetInput from '@/components/scan/TargetInput';

const Index = () => {
  return (
    <AppLayout>
      <TargetInput />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VulnerabilityDashboard />
        <ChatInterface />
      </div>
    </AppLayout>
  );
};

export default Index;
