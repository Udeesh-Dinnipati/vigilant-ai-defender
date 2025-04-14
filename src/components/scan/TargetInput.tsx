
import React, { useState } from 'react';
import { Search, Server, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const TargetInput: React.FC = () => {
  const [target, setTarget] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  const handleScan = () => {
    if (!target) return;
    
    setIsScanning(true);
    
    // Simulate scan process
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Complete",
        description: `Security scan completed for ${target}`,
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col space-y-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Server className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="Enter target URL or application details (e.g., https://example.com)"
              className="pl-10 bg-secondary border-border focus:border-primary focus:ring-1 focus:ring-primary terminal-text"
            />
          </div>
        </div>
        <Button 
          onClick={handleScan}
          disabled={!target || isScanning}
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {isScanning ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Scanning...</span>
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              <span>Scan Target</span>
            </>
          )}
        </Button>
      </div>
      {isScanning && (
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/30 to-primary/80 animate-scan"></div>
        </div>
      )}
    </div>
  );
};

export default TargetInput;
