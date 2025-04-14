
import React from 'react';
import { Shield, User } from 'lucide-react';
import { MessageType } from './ChatInterface';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: MessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAI = message.sender === 'ai';
  
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        isAI ? "justify-start" : "justify-end"
      )}
    >
      {isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <Shield className="h-4 w-4 text-primary" />
        </div>
      )}
      
      <div
        className={cn(
          "p-3 rounded-lg max-w-[80%] terminal-text text-sm",
          isAI
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        <div className="text-xs opacity-70 mt-1 text-right">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      
      {!isAI && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
