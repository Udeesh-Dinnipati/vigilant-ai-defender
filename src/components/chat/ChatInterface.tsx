
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatMessage from './ChatMessage';
import { generateAIResponse } from '@/utils/aiUtils';

export type MessageType = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: "Welcome to Vigilant AI Defender. I'm your ethical hacking assistant. How can I help you secure your systems today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const response = await generateAIResponse(newMessage);
      
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: response,
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: "I'm sorry, I encountered an error processing your request. Please try again.",
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-center p-3 rounded-lg max-w-[80%] bg-secondary text-secondary-foreground">
            <Loader2 className="h-4 w-4 mr-2 animate-spin text-primary" />
            <span className="text-sm terminal-text">Processing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-border pt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center space-x-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your security request..."
              className="w-full p-3 bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary rounded-md outline-none terminal-text"
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || !newMessage.trim()}
            className="h-12 w-12 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
